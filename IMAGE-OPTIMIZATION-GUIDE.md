# Image Optimization Guide

## Optimized Images

We've created optimized versions of the large images on the website while maintaining good visual quality. Here are the optimized images and their sizes:

### Hero Images
- plaxpot_hero_clinic_optimized_better.jpg: 386 KB (81.69% reduction)
- plaxpot_hero_clinic_optimized_better.webp: 250 KB (88.15% reduction)
- stones_beach_optimized_better.jpg: 147 KB (91.24% reduction)
- stones_beach_optimized_better.webp: 60 KB (96.42% reduction)
- contact_hero_optimized_better.jpg: 260 KB (78.79% reduction)
- contact_hero_optimized_better.webp: 132 KB (89.24% reduction)
- stones_in_sand_optimized_better.png: 629 KB (45.44% reduction)
- stones_in_sand_optimized_better.webp: 44 KB (96.20% reduction)

### Team Images
- irene-nilsson_optimized_better.png: 2384 KB (75.86% reduction)
- irene-nilsson_optimized_better.webp: 221 KB (97.77% reduction)
- Irene-22_optimized_better.png: 1795 KB (27.36% reduction)
- Irene-22_optimized_better.webp: 210 KB (91.52% reduction)
- Irene-10_optimized_better.png: 1143 KB (20.93% reduction)
- Irene-10_optimized_better.webp: 134 KB (90.73% reduction)

## How to Update Image References

To use these optimized images, update the image references in your code. For example:

### For Plaxpot Hero Image

In `src/pages/Plaxpot.tsx`:

1. Find all references to `plaxpot_hero_clinic_optimized.jpg` and change them to `plaxpot_hero_clinic_optimized_better.jpg`
2. Find all references to `plaxpot_hero_clinic_optimized.webp` and change them to `plaxpot_hero_clinic_optimized_better.webp`

Example:
```tsx
// From
image="/assets/images/hero/plaxpot_hero_clinic_optimized.jpg"
// To
image="/assets/images/hero/plaxpot_hero_clinic_optimized_better.jpg"

// From
preloadImages={['/assets/images/hero/plaxpot_hero_clinic_optimized.webp']}
// To
preloadImages={['/assets/images/hero/plaxpot_hero_clinic_optimized_better.webp']}

// From
srcSet="/assets/images/hero/plaxpot_hero_clinic_optimized.webp"
// To
srcSet="/assets/images/hero/plaxpot_hero_clinic_optimized_better.webp"
```

### For Team Images

In coaching-related files (like `src/pages/coaching/index.tsx`):

```tsx
// From
src="/assets/images/team/irene-nilsson_optimized.png"
// To
src="/assets/images/team/irene-nilsson_optimized_better.png"

// For WebP with fallback pattern
<picture>
  <source srcSet="/assets/images/team/irene-nilsson_optimized_better.webp" type="image/webp" />
  <img src="/assets/images/team/irene-nilsson_optimized_better.png" alt="Irene Nilsson" />
</picture>
```

## Alternative Approach

Instead of changing all the references, you could also rename the optimized files to replace the originals:

1. Back up the original images
2. Rename the `_better` versions to match the original filenames

Example:
```bash
# Back up original
mv public/assets/images/hero/plaxpot_hero_clinic_optimized.jpg public/assets/images/hero/plaxpot_hero_clinic_optimized.bak.jpg

# Replace with optimized version
mv public/assets/images/hero/plaxpot_hero_clinic_optimized_better.jpg public/assets/images/hero/plaxpot_hero_clinic_optimized.jpg
```

This approach requires no code changes but is less explicit about the optimization. 