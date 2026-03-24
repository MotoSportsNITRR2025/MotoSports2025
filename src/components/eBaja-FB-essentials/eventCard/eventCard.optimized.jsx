/**
 * OPTIMIZED EVENT CARD
 * 
 * Changes:
 * - Add loading="lazy" to event card images
 * - Better responsive design
 * - Prevent layout shift during image load
 */

import "./eventCard.css"

const EventCard = ({ heading, subHeading, description, imgSrc }) => {
    return (
        <div className="relative flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white overflow-hidden hover:shadow-xl transition-shadow">
            
            {/* ✅ OPTIMIZED: Add loading="lazy" to event images */}
            <div className="w-full h-48 bg-gray-200 mb-4 rounded overflow-hidden flex-shrink-0">
                <img
                    src={imgSrc}
                    alt={subHeading}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                />
            </div>

            {/* Event Details */}
            <h3 className="text-lg font-bold text-center text-gray-800 mb-2">{heading}</h3>
            <p className="text-sm text-gray-600 text-center mb-2 font-semibold">{subHeading}</p>
            <p className="text-xs text-gray-500 text-center">{description}</p>
        </div>
    )
}

export default EventCard;

/**
 * KEY IMPROVEMENTS:
 * 
 * 1. Image Loading:
 *    - Add loading="lazy" attribute
 *    - Only loads when card is visible/about to be visible
 * 
 * 2. Layout Stability:
 *    - Fixed height container (h-48)
 *    - Prevents cumulative layout shift
 *    - Placeholder background while loading
 * 
 * 3. Image Quality:
 *    - object-cover for proper scaling
 *    - Maintains aspect ratio
 *    - No distortion
 * 
 * 4. Performance:
 *    - decoding="async" prevents blocking
 *    - Images load in background
 *    - Smooth user experience
 */
