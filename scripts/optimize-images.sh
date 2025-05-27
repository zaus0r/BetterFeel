#!/bin/bash

optimize_image() {
    local input_file="$1"
    local filename=$(basename "$input_file")
    local directory=$(dirname "$input_file")
    local base="${filename%.*}"
    local ext="${filename##*.}"
    local ext_lower=$(echo "$ext" | tr '[:upper:]' '[:lower:]')

    # Skip if already optimized
    if [[ "$base" == *"_optimized"* ]]; then
        echo "Skipping already optimized file: $input_file"
        return 0
    fi

    local optimized_base="${base}_optimized"
    local optimized_file="$directory/$optimized_base.$ext_lower"
    local webp_file="$directory/$optimized_base.webp"

    echo "Processing $input_file..."

    # Create WebP version
    cwebp -q 75 -m 6 "$input_file" -o "$webp_file"

    # Optimize original format based on extension
    case "$ext_lower" in
        "png")
            pngquant --quality=75 --speed=1 --strip --force --output "$optimized_file" "$input_file"
            ;;
        "jpg"|"jpeg")
            convert "$input_file" -quality 75 -strip -interlace Plane -sampling-factor 4:2:0 "$optimized_file"
            ;;
    esac

    # Remove original if optimization was successful
    if [ -f "$optimized_file" ] && [ -f "$webp_file" ]; then
        rm "$input_file"
        echo "Successfully optimized: $input_file"
    else
        echo "Failed to optimize: $input_file"
    fi
}

# Process all images in public/assets
find public/assets -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
    optimize_image "$file"
done

echo "Image optimization complete!" 