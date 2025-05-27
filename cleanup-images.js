import { readdir, stat, unlink } from 'fs/promises';
import { join, extname } from 'path';

async function cleanupImages(directory) {
  try {
    const files = await readdir(directory);
    
    for (const file of files) {
      const fullPath = join(directory, file);
      const stats = await stat(fullPath);
      
      if (stats.isDirectory()) {
        await cleanupImages(fullPath);
        continue;
      }
      
      // Check if it's an image file
      if (!file.match(/\.(jpg|jpeg|png|webp)$/i)) {
        continue;
      }
      
      // Get base name without extension
      const baseName = file.replace(/\.(jpg|jpeg|png|webp)$/i, '');
      
      // Remove files with multiple _optimized suffixes
      if (baseName.split('_optimized').length > 2) {
        console.log(`Removing duplicate optimized file: ${fullPath}`);
        await unlink(fullPath);
        continue;
      }
      
      // If it's a JPG/PNG file, check if a WebP version exists
      if (/\.(jpg|jpeg|png)$/i.test(file)) {
        const webpVersion = `${baseName}.webp`;
        try {
          await stat(join(directory, webpVersion));
          console.log(`Removing JPG/PNG version since WebP exists: ${fullPath}`);
          await unlink(fullPath);
        } catch (err) {
          // Keep the JPG/PNG if no WebP exists
        }
      }
    }
  } catch (err) {
    console.error(`Error processing directory ${directory}:`, err);
  }
}

// Start cleanup from dist/assets
cleanupImages('dist/assets')
  .then(() => console.log('Image cleanup complete!'))
  .catch(console.error); 