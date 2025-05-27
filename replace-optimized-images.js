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

// Helper function to safely copy a file
function safeCopyFile(source, destination) {
  try {
    if (fs.existsSync(source)) {
      fs.copyFileSync(source, destination);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error copying ${source} to ${destination}:`, error);
    return false;
  }
}

// Main function to replace original images with optimized versions
async function replaceWithOptimized() {
  console.log('Starting image replacement...\n');

  // Create backup directory if it doesn't exist
  const backupDir = 'public/assets/images/backup';
  try {
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
      console.log(`Created backup directory: ${backupDir}`);
    }
  } catch (error) {
    console.error(`Error creating backup directory:`, error);
    return;
  }
  
  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;
  
  for (const image of imagesToReplace) {
    console.log(`Processing: ${image.original}`);
    
    // Check if files exist
    if (!fs.existsSync(image.original)) {
      console.log(`  Original file not found: ${image.original}`);
      skipCount++;
      console.log('');
      continue;
    }
    
    if (!fs.existsSync(image.optimized)) {
      console.log(`  Optimized file not found: ${image.optimized}`);
      skipCount++;
      console.log('');
      continue;
    }
    
    try {
      // Create backup of original file
      const originalFilename = path.basename(image.original);
      const backupPath = path.join(backupDir, originalFilename);
      
      if (safeCopyFile(image.original, backupPath)) {
        console.log(`  Backed up original to: ${backupPath}`);
        
        // Replace original with optimized
        if (safeCopyFile(image.optimized, image.original)) {
          console.log(`  Replaced original with optimized version`);
          successCount++;
          
          // Also update the webp version if it exists
          const originalWebp = image.original.replace(path.extname(image.original), '.webp');
          if (fs.existsSync(originalWebp) && fs.existsSync(image.webp)) {
            const webpFilename = path.basename(originalWebp);
            const webpBackupPath = path.join(backupDir, webpFilename);
            
            if (safeCopyFile(originalWebp, webpBackupPath)) {
              console.log(`  Backed up original WebP to: ${webpBackupPath}`);
              
              if (safeCopyFile(image.webp, originalWebp)) {
                console.log(`  Replaced original WebP with optimized version`);
              } else {
                console.log(`  Failed to replace WebP version`);
              }
            }
          }
        } else {
          console.log(`  Failed to replace original with optimized version`);
          errorCount++;
        }
      } else {
        console.log(`  Failed to create backup of original file`);
        errorCount++;
      }
    } catch (error) {
      console.error(`  Error processing ${image.original}:`, error);
      errorCount++;
    }
    
    console.log('');
  }

  console.log('\nImage replacement summary:');
  console.log(`- Successfully replaced: ${successCount} images`);
  console.log(`- Skipped (files not found): ${skipCount} images`);
  console.log(`- Errors encountered: ${errorCount} images`);
  console.log('\nBackup files are in the "public/assets/images/backup" directory.');
  console.log('No code changes are needed since file names were preserved.');
}

replaceWithOptimized().catch(error => {
  console.error('Unhandled error:', error);
}); 