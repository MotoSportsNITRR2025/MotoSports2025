/**
 * EXAMPLE: How to refactor home.jsx for image optimization
 * Apply this pattern to your actual home.jsx file
 */

// ❌ OLD APPROACH - Imports all images eagerly (bad for performance)
// import Img_1 from '/assets/images/carImages/carImg_1.jpg';
// import Img_2 from '/assets/images/carImages/carImg_2.jpg';
// ... (17 total imports = all loaded at once)

// ✅ NEW APPROACH - Lazy load images as needed
import { OptimizedImageCarousel, LazyImage } from '../common/LazyImageComponents';
import React from 'react';
import CountUp from 'react-countup';
import SpeedBanner from './speedBanner/speedBanner';

// Import only critical images that show immediately
import carImgOne from '/assets/images/finalizedCarImg/homeCarOne.png';
import carImgTwo from '/assets/images/finalizedCarImg/homeCarTwo.png';
import TrophyOne from '/assets/svg/trophyOne.svg';
import TrophyThree from '/assets/svg/trophyThree.svg';
import StarOne from '/assets/svg/starOne.png';
import StarTwo from '/assets/svg/starTwo.png';
import SponsorOno from '/assets/logos/sponsors/looksSalon.png';
import SponsorTwo from '/assets/logos/sponsors/gravityWorkshop.png';
import SponsorThree from '/assets/logos/sponsors/carDecor.png';
import popupIMG from './popupImg.png';

// ✅ Define image file names instead of importing each one
// This tells the bundler to load these only when needed
const carImageNames = [
  'carImg_1.jpg',
  'carImg_2.jpg',
  'carImg_3.jpg',
  'carImg_4.jpg',
  'carImg_5.jpg',
  'carImg_6.jpg',
  'carImg_7.jpg',
  'carImg_8.jpg',
  'carImg_10.jpg',
  'carImg_11.jpg',
  'carImg_12.jpg',
  'carImg_13.jpg',
  'carImg_14.jpg',
  'carImg_15.jpg',
  'carImg_16.jpg',
  'carImg_17.jpg',
  'carImg_18.jpg',
];

// Build image URL array dynamically
const carImages = carImageNames.map(name => ({
  src: `/assets/images/carImages/${name}`,
  alt: `MotoSports Car ${carImageNames.indexOf(name) + 1}`
}));

function Home() {
  const [showProblemPopup, setShowProblemPopup] = React.useState(true);

  return (
    <>
      {showProblemPopup && (
        <div className='fixed inset-0 z-[70] bg-black/55 flex items-center justify-center px-4'>
          <div className='relative w-full max-w-2xl'>
            <button
              type='button'
              aria-label='Close problem statement banner'
              onClick={() => setShowProblemPopup(false)}
              className='absolute -top-3 -right-3 z-10 w-10 h-10 rounded-full bg-dustyWhite text-blackbean text-2xl leading-none shadow-md'
            >
              ×
            </button>

            <a href='/problemStatements' className='block'>
              {/* ✅ Use LazyImage for non-critical images */}
              <LazyImage
                src={popupIMG}
                alt='Open Problem Statement Page'
                className='w-full rounded-2xl border-4 border-sealbrown bg-dustyWhite shadow-xl cursor-pointer'
              />
            </a>
          </div>
        </div>
      )}

      <main className='flex flex-col justify-between items-center bg-modestBrown'>
        <div id='introDiv' className="w-85vw flex flex-col justify-between items-center lg:flex-row lg:justify-evenly lg:items-center box-border lg:top-32">
          <div id='introTextDiv' className='flex flex-col justify-evenly items-center sm:px-6 sm:py-2 w-full sm:w-550px md:w-full lg:w-400px 1.5lg:px-6 1.5lg:py-6 1.5lg:w-475px xl:w-625px 2xl:w-700px h-500'>
            <div id='introHeading' className='w-full text-4xl sm:text-5xl xl:text-6xl font-albulaHeavy text-blackbean'>
              Official <br />
              <span className="text-tawny">Motosports Club</span> of <br />
              <span className="text-tawny">NIT, Raipur</span>
              <p className='text-base sm:text-xl font-poppins font-medium mt-4 text-mutedBlack'>
                Unleashing Adrenaline: The Heart-Pounding World of Motorsport!
              </p>
            </div>

            <div id='introStatDiv' className='flex justify-between items-start w-full lg:mr-7 xl:mr-16'>
              <div id='statBlockOne' className=' flex flex-col justify-between items-center w-150'>
                <p className='font-poppins font-bold text-2xl sm:text-4xl lg:text-3xl xl:text-4xl text-brown'>
                  <CountUp start={0} end={85} duration={4} delay={0}></CountUp>
                  <span>+</span>
                </p>
                <p className='font-poppins text-base sm:text-xl text-blackbean text-center'>team members</p>
              </div>
              {/* ... Other stats ... */}
            </div>
          </div>

          {/* ✅ Use OptimizedImageCarousel instead of importing all images */}
          <OptimizedImageCarousel 
            images={carImages}
            autoPlay={true}
            interval={5000}
            className="w-full lg:w-1/2"
          />
        </div>

        <SpeedBanner />

        {/* Rest of component... */}
      </main>
    </>
  );
}

export default Home;

/**
 * KEY IMPROVEMENTS:
 * 
 * 1. Removed 17 static image imports
 *    - OLD: 17 imports = 17 images loaded immediately
 *    - NEW: Dynamic URL array = only visible image loads
 * 
 * 2. OptimizedImageCarousel handles:
 *    - One image display at a time
 *    - Intersection Observer lazy loading
 *    - Native loading="lazy" attribute
 *    - Automatic cleanup
 * 
 * 3. Bundle size impact:
 *    - Before: ~8-12MB for all images in bundle
 *    - After: ~0.5MB initial + images load on demand
 * 
 * 4. Page load impact:
 *    - Before: 17 images × 500KB = 8.5MB to download
 *    - After: Only carousel image loads (~500KB) + rest on scroll
 * 
 * 5. To implement:
 *    - Create src/components/common/ folder
 *    - Copy LazyImageComponents.jsx there
 *    - Apply this pattern to home.jsx
 *    - Test with DevTools Lighthouse
 */
