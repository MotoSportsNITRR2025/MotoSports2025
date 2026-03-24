/**
 * QUICK REPLACE GUIDE: Converting <img> to Optimized Components
 * Copy the patterns below into your components
 */

// ╔═══════════════════════════════════════════════════════════════╗
// ║ PATTERN 1: Basic Lazy Loading (Easiest)                       ║
// ╚═══════════════════════════════════════════════════════════════╝

// Import the component
import { LazyImage } from '../common/LazyImageComponents';

// ❌ OLD
// <img src={logoImg} alt="Logo" className="w-24" />

// ✅ NEW - Just wrap with LazyImage
// <LazyImage src={logoImg} alt="Logo" className="w-24" />

// Works with both imported and URL paths
// <LazyImage src="/assets/logos/sponsors/gravityWorkshop.png" alt="Sponsor" />


// ╔═══════════════════════════════════════════════════════════════╗
// ║ PATTERN 2: WebP with JPG Fallback (Recommended)                ║
// ╚═══════════════════════════════════════════════════════════════╝

import { LazyImage } from '../common/LazyImageComponents';

// ❌ OLD - Single format
// <img src={carImage} alt="Car" className="w-full" />

// ✅ NEW - WebP with fallback
// Use <picture> element with <source> tags
<picture>
  <source 
    srcSet="/assets/images/carImages/carImg_1.webp" 
    type="image/webp" 
  />
  <LazyImage
    src="/assets/images/carImages/carImg_1.jpg"
    alt="Car Image"
    className="w-full"
  />
</picture>

// OR if you prefer shorter syntax:
<picture>
  <source srcSet="/assets/images/sponsors/gravity.webp" type="image/webp" />
  <LazyImage src="/assets/images/sponsors/gravity.jpg" alt="Gravity Workshop" />
</picture>


// ╔═══════════════════════════════════════════════════════════════╗
// ║ PATTERN 3: Responsive Images (Mobile/Tablet/Desktop)           ║
// ╚═══════════════════════════════════════════════════════════════╝

import { LazyImage } from '../common/LazyImageComponents';

// ❌ OLD - One size for all devices
// <img src={bannerImg} alt="Banner" className="w-full" />

// ✅ NEW - Different sizes per device
<picture>
  {/* Mobile: Smaller dimensions */}
  <source 
    media="(max-width: 640px)"
    srcSet="/assets/images/banner-mobile.webp"
    type="image/webp"
  />
  <source 
    media="(max-width: 640px)"
    srcSet="/assets/images/banner-mobile.jpg"
  />
  
  {/* Tablet: Medium dimensions */}
  <source 
    media="(max-width: 1024px)"
    srcSet="/assets/images/banner-tablet.webp"
    type="image/webp"
  />
  <source 
    media="(max-width: 1024px)"
    srcSet="/assets/images/banner-tablet.jpg"
  />
  
  {/* Desktop: Full resolution */}
  <source 
    srcSet="/assets/images/banner-desktop.webp"
    type="image/webp"
  />
  
  {/* Fallback */}
  <LazyImage
    src="/assets/images/banner.jpg"
    alt="Banner Image"
    className="w-full h-auto"
  />
</picture>

// Benefits:
// - Mobile gets smaller image (~200KB)
// - Tablet gets medium (~400KB)  
// - Desktop gets full (~600KB)
// - Save up to 70% on mobile data


// ╔═══════════════════════════════════════════════════════════════╗
// ║ PATTERN 4: Image Carousel (Multiple Images)                    ║
// ╚═══════════════════════════════════════════════════════════════╝

import { OptimizedImageCarousel, LazyImage } from '../common/LazyImageComponents';

// ❌ OLD - Import all images at once
// import Img1 from '/assets/images/car1.jpg';
// import Img2 from '/assets/images/car2.jpg';
// ... 15 more imports = ALL load immediately

// ✅ NEW - Dynamic image array, load one at a time
const carImages = [
  { src: '/assets/images/carImages/carImg_1.jpg', alt: 'Car 1' },
  { src: '/assets/images/carImages/carImg_2.jpg', alt: 'Car 2' },
  { src: '/assets/images/carImages/carImg_3.jpg', alt: 'Car 3' },
  // ... add more
];

// Use the carousel component
<OptimizedImageCarousel 
  images={carImages}
  autoPlay={true}
  interval={5000}
  className="w-full max-w-4xl"
/>

// What it does:
// - Shows one image
// - Only loads that image
// - User scrolls/clicks → loads next image
// - Saves 80% data vs loading all 17 at once


// ╔═══════════════════════════════════════════════════════════════╗
// ║ PATTERN 5: Hero/Banner Images (Critical Content)               ║
// ╚═══════════════════════════════════════════════════════════════╝

import { LazyImage } from '../common/LazyImageComponents';

// ✅ For above-the-fold images: DON'T use lazy loading
// These load critical content immediately

// Top of component (above-the-fold)
<img 
  src="/assets/images/finalizedCarImg/homeCarOne.png" 
  alt="Home Car"
  className="w-full h-auto"
  // NO loading="lazy" here - loads ASAP
/>

// Further down (below-the-fold)
<LazyImage 
  src="/assets/images/carImages/carImg_1.jpg" 
  alt="Gallery Image"
  className="w-full h-auto"
/>


// ╔═══════════════════════════════════════════════════════════════╗
// ║ PATTERN 6: Logo/Icon Images (Multiple Small Images)             ║
// ╚═══════════════════════════════════════════════════════════════╝

// Small images like logos should still lazy load
// But you can batch them in SVG sprite or CSS background

// ✅ Option A: Lazy load each logo
const logos = [
  { src: '/assets/logos/sponsors/gravity.png', alt: 'Gravity' },
  { src: '/assets/logos/sponsors/gulf.png', alt: 'Gulf' },
  { src: '/assets/logos/sponsors/ansys.png', alt: 'ANSYS' },
];

<div className="flex gap-4">
  {logos.map(logo => (
    <LazyImage 
      key={logo.alt}
      src={logo.src} 
      alt={logo.alt}
      className="h-24"
    />
  ))}
</div>

// ✅ Option B: Use CSS background (better for small images)
<div 
  className="w-24 h-24 bg-contain bg-no-repeat bg-center"
  style={{backgroundImage: 'url(/assets/logos/sponsors/gravity.png)'}}
/>


// ╔═══════════════════════════════════════════════════════════════╗
// ║ PATTERN 7: Container Queries (Modern CSS)                       ║
// ╚═══════════════════════════════════════════════════════════════╝

// If browsers support it (most modern ones):
// Serve different images based on container size

<picture>
  <source 
    sizes="(max-width: 512px) 100vw, 50vw"
    srcSet="
      /assets/images/banner-sm.webp 512w,
      /assets/images/banner-md.webp 1024w,
      /assets/images/banner-lg.webp 2048w"
    type="image/webp"
  />
  <LazyImage
    src="/assets/images/banner.jpg"
    alt="Banner"
    sizes="(max-width: 512px) 100vw, 50vw"
    srcSet="
      /assets/images/banner-sm.jpg 512w,
      /assets/images/banner-md.jpg 1024w,
      /assets/images/banner-lg.jpg 2048w"
    className="w-full"  
  />
</picture>


// ╔═══════════════════════════════════════════════════════════════╗
// ║ IMPLEMENTATION GUIDE FOR EACH FILE                             ║
// ╚═══════════════════════════════════════════════════════════════╝

/*
1. header.jsx (Logo + Menu)
   - Logo: Pattern 1 (basic lazy load)
   - Nav menu icon: Pattern 1

2. footer.jsx (Social icons)
   - Social icons: Pattern 1 or CSS background

3. contact.jsx (Sponsor logos)
   - Multiple logos: Pattern 6
   - Large images: Pattern 3 (responsive)

4. home.jsx (Carousel + Car images) ⭐ PRIORITY
   - Carousel: Pattern 4 (OptimizedImageCarousel)
   - Hero cars: Pattern 5 (NO lazy loading)
   - Below-fold images: Pattern 1

5. about.jsx (Event cards + Team)
   - Event images: Pattern 1
   - Team photos: Pattern 1 or 4 if many

6. eBaja-FB-essentials/timeline/
   - Timeline event images: Pattern 1
   - 3D model: Pattern 7 (on-demand loading)

7. merchandise/
   - Product images: Pattern 3 (responsive)
   - Multiple products: Pattern 4 (carousel)


// ╔═══════════════════════════════════════════════════════════════╗
// ║ TESTING YOUR CHANGES                                          ║
// ╚═══════════════════════════════════════════════════════════════╝

// After implementing patterns:

1. Visual check:
   - Open page in browser
   - Scroll down slowly
   - Images should load as you scroll (not all at once)

2. DevTools Network check:
   - Ctrl+Shift+I → Network tab
   - Hard refresh (Ctrl+Shift+R)
   - Filter by Img
   - Look for:
     ✅ Images load on-demand (not all at once)
     ✅ WebP files load first (if supported)
     ✅ JPG only if WebP not supported
     ❌ All 17 images don't load immediately

3. Performance check:
   - DevTools → Performance tab
   - Record → Scroll page → Stop
   - Look for fewer image decode operations
   - Check FCP/LCP times are lower

4. Lighthouse check:
   - DevTools → Lighthouse
   - Run audit
   - Check Images are listed as deferrable/offscreen
   - Target: > 85 score


// ╔═══════════════════════════════════════════════════════════════╗
// ║ ROLLOUT PRIORITY                                              ║
// ╚═══════════════════════════════════════════════════════════════╝

Priority 1 (Quick wins - 30 min):
  □ home.jsx → Pattern 4 (carousel)
  □ Add loading="lazy" to all img tags
  □ Compress images with TinyPNG

Priority 2 (Best quality - 1 hour):
  □ contact.jsx → Pattern 3 (responsive sponsor logos)
  □ Convert images to WebP
  □ Apply Pattern 2 to all important images

Priority 3 (Advanced - 2 hours):
  □ about.jsx → Pattern 1 for team photos
  □ Code splitting for lazy routes
  □ 3D model on-demand loading

Priority 4 (Polish - ongoing):
  □ Monitor Lighthouse scores
  □ User feedback on load times
  □ Fine-tune compression quality
  □ A/B test image formats
*/

export default {};
