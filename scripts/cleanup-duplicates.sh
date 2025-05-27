#!/bin/bash

# Function to clean up duplicate optimized files
cleanup_duplicates() {
    local directory="$1"
    
    # Find all files in the directory
    find "$directory" -type f | while read -r file; do
        local filename=$(basename "$file")
        local base="${filename%.*}"
        local ext="${filename##*.}"
        
        # Check if file has multiple _optimized suffixes
        if [[ "$base" =~ _optimized.*_optimized ]]; then
            # Get the base name without any _optimized suffix
            local original_base=$(echo "$base" | sed 's/_optimized.*$//')
            local dir=$(dirname "$file")
            
            # Keep only the first optimized version
            if [[ -f "$dir/${original_base}_optimized.$ext" ]]; then
                echo "Removing duplicate: $file"
                rm "$file"
            fi
        fi
    done
}

# Clean up duplicates in public/assets
cleanup_duplicates "public/assets"

echo "Duplicate cleanup complete!" 