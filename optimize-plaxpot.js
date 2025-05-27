// Image optimization script using Sharp
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file directory (ES module equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Image to optimize - path relative to project root
const imageToOptimize = 'public/assets/images/hero/plaxpot_hero_clinic_optimized.jpg';

async function optimizeImage() {
  try {
    // Check if file exists
    if (!fs.existsSync(imageToOptimize)) {
      console.error(`File not found: ${imageToOptimize}`);
      return;
    }

    // Get original file size
    const stats = fs.statSync(imageToOptimize);
    const originalSize = stats.size / (1024 * 1024); // in MB
    console.log(`Original size: ${originalSize.toFixed(2)} MB`);

    // Parse file path
    const parsedPath = path.parse(imageToOptimize);
    const outputJpg = `${parsedPath.dir}/${parsedPath.name}_further_optimized.jpg`;
    const outputWebp = `${parsedPath.dir}/${parsedPath.name}_further_optimized.webp`;

    // Optimize as JPG with reduced quality
    await sharp(imageToOptimize)
      .resize(1200, null, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 75, progressive: true })
      .toFile(outputJpg);

    // Get optimized JPG size
    const jpgStats = fs.statSync(outputJpg);
    const jpgSize = jpgStats.size / (1024 * 1024); // in MB
    console.log(`Optimized JPG size: ${jpgSize.toFixed(2)} MB (${((1 - jpgSize/originalSize) * 100).toFixed(2)}% reduction)`);

    // Create WebP version with reduced quality
    await sharp(imageToOptimize)
      .resize(1200, null, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(outputWebp);

    // Get WebP size
    const webpStats = fs.statSync(outputWebp);
    const webpSize = webpStats.size / (1024 * 1024); // in MB
    console.log(`WebP size: ${webpSize.toFixed(2)} MB (${((1 - webpSize/originalSize) * 100).toFixed(2)}% reduction)`);

    console.log('\nOptimized images saved as:');
    console.log(`- ${outputJpg}`);
    console.log(`- ${outputWebp}`);
    console.log('\nUpdate your code to reference these new files for better performance.');

  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImage().catch(console.error); 