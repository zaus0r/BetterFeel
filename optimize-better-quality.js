// Image optimization script using Sharp with higher quality retention
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
  
  // Team images (very large)
  'public/assets/images/team/irene-nilsson_optimized.png',
  'public/assets/images/team/Irene-22_optimized.png',
  'public/assets/images/team/Irene-10_optimized.png',
];

// Higher quality settings
const jpgQuality = 90;
const webpQuality = 85;
const pngQuality = 90;

async function optimizeImages() {
  console.log('Starting image optimization with higher quality settings...\n');
  
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
      const outputFile = `${parsedPath.dir}/${parsedPath.name}_better${parsedPath.ext}`;
      const outputWebp = `${parsedPath.dir}/${parsedPath.name}_better.webp`;

      // Process based on file extension
      if (parsedPath.ext.toLowerCase() === '.jpg' || parsedPath.ext.toLowerCase() === '.jpeg') {
        // Optimize as JPG with higher quality
        await sharp(imageToOptimize)
          .resize(1500, null, { fit: 'inside', withoutEnlargement: true })
          .jpeg({ quality: jpgQuality, progressive: true })
          .toFile(outputFile);
      } 
      else if (parsedPath.ext.toLowerCase() === '.png') {
        // Optimize as PNG with higher quality
        await sharp(imageToOptimize)
          .resize(1500, null, { fit: 'inside', withoutEnlargement: true })
          .png({ compressionLevel: 7, adaptiveFiltering: true })
          .toFile(outputFile);
      }

      // Get optimized file size
      const optimizedStats = fs.statSync(outputFile);
      const optimizedSize = optimizedStats.size / (1024 * 1024); // in MB
      const optimizedKB = optimizedStats.size / 1024; // in KB
      console.log(`  Optimized ${parsedPath.ext.substring(1)} size: ${optimizedSize.toFixed(2)} MB (${optimizedKB.toFixed(0)} KB)`);
      console.log(`  Reduction: ${((1 - optimizedSize/originalSize) * 100).toFixed(2)}%`);

      // Create WebP version with higher quality
      await sharp(imageToOptimize)
        .resize(1500, null, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: webpQuality })
        .toFile(outputWebp);

      // Get WebP size
      const webpStats = fs.statSync(outputWebp);
      const webpSize = webpStats.size / (1024 * 1024); // in MB
      const webpKB = webpStats.size / 1024; // in KB
      console.log(`  WebP size: ${webpSize.toFixed(2)} MB (${webpKB.toFixed(0)} KB)`);
      console.log(`  Reduction: ${((1 - webpSize/originalSize) * 100).toFixed(2)}%`);
      console.log('');

    } catch (error) {
      console.error(`Error processing ${imageToOptimize}:`, error);
      console.log('');
    }
  }

  console.log('\nImage optimization complete!');
  console.log('The new images maintain higher quality while still providing good size reduction.');
}

optimizeImages().catch(console.error); 