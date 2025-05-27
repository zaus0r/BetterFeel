// Script to replace original image files with their optimized versions
import fs from 'fs';
import path from 'path';

// Images to replace (original files and their optimized versions)
const imagesToReplace = [
  // Hero images
  {
    original: 'public/assets/images/hero/plaxpot_hero_clinic_optimized.jpg',
    optimized: 'public/assets/images/hero/plaxpot_hero_clinic_optimized_better.jpg',
    webp: 'public/assets/images/hero/plaxpot_hero_clinic_optimized_better.webp'
  },
  {
    original: 'public/assets/images/hero/stones_beach_optimized.jpg',
    optimized: 'public/assets/images/hero/stones_beach_optimized_better.jpg',
    webp: 'public/assets/images/hero/stones_beach_optimized_better.webp'
  },
  {
    original: 'public/assets/images/hero/contact_hero_optimized.jpg',
    optimized: 'public/assets/images/hero/contact_hero_optimized_better.jpg',
    webp: 'public/assets/images/hero/contact_hero_optimized_better.webp'
  },
  {
    original: 'public/assets/images/hero/stones_in_sand_optimized.png',
    optimized: 'public/assets/images/hero/stones_in_sand_optimized_better.png',
    webp: 'public/assets/images/hero/stones_in_sand_optimized_better.webp'
  },
  
  // Team images
  {
    original: 'public/assets/images/team/irene-nilsson_optimized.png',
    optimized: 'public/assets/images/team/irene-nilsson_optimized_better.png',
    webp: 'public/assets/images/team/irene-nilsson_optimized_better.webp'
  },
  {
    original: 'public/assets/images/team/Irene-22_optimized.png',
    optimized: 'public/assets/images/team/Irene-22_optimized_better.png',
    webp: 'public/assets/images/team/Irene-22_optimized_better.webp'
  },
  {
    original: 'public/assets/images/team/Irene-10_optimized.png',
    optimized: 'public/assets/images/team/Irene-10_optimized_better.png',
    webp: 'public/assets/images/team/Irene-10_optimized_better.webp'
  }
];

async function replaceWithOptimized() {
  console.log('Starting image replacement...\n');

  // Create backup directory if it doesn't exist
  const backupDir = 'public/assets/images/backup';
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
  
  for (const image of imagesToReplace) {
    try {
      // Check if original file exists
      if (!fs.existsSync(image.original)) {
        console.log(`Original file not found: ${image.original}`);
        continue;
      }
      
      // Check if optimized file exists
      if (!fs.existsSync(image.optimized)) {
        console.log(`Optimized file not found: ${image.optimized}`);
        continue;
      }
      
      // Create backup of original file
      const originalFilename = path.basename(image.original);
      const backupPath = path.join(backupDir, originalFilename);
      fs.copyFileSync(image.original, backupPath);
      console.log(`Backed up ${image.original} to ${backupPath}`);
      
      // Replace original with optimized
      fs.copyFileSync(image.optimized, image.original);
      console.log(`Replaced ${image.original} with optimized version`);
      
      // Also update the webp version if it exists
      const originalWebp = image.original.replace(path.extname(image.original), '.webp');
      if (fs.existsSync(originalWebp) && fs.existsSync(image.webp)) {
        const webpFilename = path.basename(originalWebp);
        const webpBackupPath = path.join(backupDir, webpFilename);
        fs.copyFileSync(originalWebp, webpBackupPath);
        fs.copyFileSync(image.webp, originalWebp);
        console.log(`Replaced ${originalWebp} with optimized webp version`);
      }
      
      console.log('');
    } catch (error) {
      console.error(`Error processing ${image.original}:`, error);
      console.log('');
    }
  }

  console.log('\nImage replacement complete!');
  console.log('Original files have been backed up to the "public/assets/images/backup" directory.');
  console.log('No code changes are needed since file names were preserved.');
}

replaceWithOptimized().catch(console.error); 