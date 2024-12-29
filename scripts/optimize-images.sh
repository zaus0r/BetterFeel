#!/bin/bash

# Create WebP versions of all JPG/JPEG/PNG files
find public/assets -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r img; do
  echo "Processing: $img"
  
  # Get directory and filename without extension
  dir=$(dirname "$img")
  filename=$(basename "$img")
  filename_noext="${filename%.*}"
  
  # Create WebP version with 80% quality (good balance between quality and size)
  sharp -i "$img" -o "${dir}/${filename_noext}.webp" --format webp --quality 80
  
  # Optimize original file
  if [[ "$img" == *.png ]]; then
    # PNG optimization
    sharp -i "$img" -o "${img%.png}_optimized.png" --format png --quality 80
  else
    # JPEG optimization
    sharp -i "$img" -o "${img%.*}_optimized.jpg" --format jpeg --quality 80
  fi
done

echo "Image optimization complete!" 