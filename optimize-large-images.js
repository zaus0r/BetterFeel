// Image optimization script using Sharp
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// List of large images to optimize
const imagesToOptimize = [
  // Hero images
  'public/assets/images/hero/plaxpot_hero_clinic_optimized.jpg',
  'public/assets/images/hero/stones_beach_optimized.jpg',
  'public/assets/images/hero/contact_hero_optimized.jpg',
  'public/assets/images/hero/stones_in_sand_optimized.png',
  'public/assets/images/hero/plaxpot_hero_new_optimized.jpg',
  
  // Team images (very large)
  'public/assets/images/team/irene-nilsson_optimized.png',
  'public/assets/images/team/Irene-22_optimized.png',
  'public/assets/images/team/Irene-10_optimized.png',
  
  // Clinic images
  'public/assets/images/clinic/clinic-odenplan-exterior_optimized.png',
  'public/assets/images/clinic/clinic_room_optimized.jpg',
  'public/assets/images/clinic/clinic_room_bright_optimized.jpg',
];

async function optimizeImages() {
  console.log('Starting image optimization...\n');
  
  for (const imageToOptimize of imagesToOptimize) {
    try {
      // Check if file exists
      if (!fs.existsSync(imageToOptimize)) {
        console.log(`File not found: ${imageToOptimize}`);
        continue;
      }

      console.log(`Processing: ${imageToOptimize}`);
      
      // Get original file size
      const stats = fs.statSync(imageToOptimize);
      const originalSize = stats.size / (1024 * 1024); // in MB
      console.log(`  Original size: ${originalSize.toFixed(2)} MB`);

      // Parse file path
      const parsedPath = path.parse(imageToOptimize);
      const outputFile = `${parsedPath.dir}/${parsedPath.name}_reduced${parsedPath.ext}`;
      const outputWebp = `${parsedPath.dir}/${parsedPath.name}_reduced.webp`;

      // Process based on file extension
      if (parsedPath.ext.toLowerCase() === '.jpg' || parsedPath.ext.toLowerCase() === '.jpeg') {
        // Optimize as JPG with reduced quality
        await sharp(imageToOptimize)
          .resize(1200, null, { fit: 'inside', withoutEnlargement: true })
          .jpeg({ quality: 75, progressive: true })
          .toFile(outputFile);
      } 
      else if (parsedPath.ext.toLowerCase() === '.png') {
        // Optimize as PNG
        await sharp(imageToOptimize)
          .resize(1200, null, { fit: 'inside', withoutEnlargement: true })
          .png({ compressionLevel: 9, palette: true })
          .toFile(outputFile);
      }

      // Get optimized file size
      const optimizedStats = fs.statSync(outputFile);
      const optimizedSize = optimizedStats.size / (1024 * 1024); // in MB
      console.log(`  Optimized ${parsedPath.ext.substring(1)} size: ${optimizedSize.toFixed(2)} MB (${((1 - optimizedSize/originalSize) * 100).toFixed(2)}% reduction)`);

      // Create WebP version
      await sharp(imageToOptimize)
        .resize(1200, null, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 75 })
        .toFile(outputWebp);

      // Get WebP size
      const webpStats = fs.statSync(outputWebp);
      const webpSize = webpStats.size / (1024 * 1024); // in MB
      console.log(`  WebP size: ${webpSize.toFixed(2)} MB (${((1 - webpSize/originalSize) * 100).toFixed(2)}% reduction)`);
      console.log('');

    } catch (error) {
      console.error(`Error processing ${imageToOptimize}:`, error);
      console.log('');
    }
  }

  console.log('\nImage optimization complete!');
  console.log('Remember to update your code to reference these new optimized files.');
}

optimizeImages().catch(console.error); 