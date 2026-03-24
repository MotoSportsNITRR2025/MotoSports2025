import React, { useState, useEffect, useRef } from 'react';

/**
 * LazyImage Component - Replaces <img> for native lazy loading
 * Uses Intersection Observer for better performance than loading="lazy"
 * Fallback to native if not supported
 */
export const LazyImage = ({ src, alt, className, width, height, srcSet = '', ...props }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageRef, setImageRef] = useState(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Modern browsers support Intersection Observer
    if ('IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              if (observerRef.current) {
                observerRef.current.unobserve(entry.target);
              }
            }
          });
        },
        { rootMargin: '50px' } // Start loading 50px before entering viewport
      );

      if (imageRef) {
        observerRef.current.observe(imageRef);
      }

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    } else {
      // Fallback for older browsers
      setImageSrc(src);
    }
  }, [src, imageRef]);

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      srcSet={srcSet}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
      {...props}
    />
  );
};

/**
 * ResponsiveImage Component - Serves WebP with JPG fallback
 * Takes image name and serves optimized variants
 * Usage: <ResponsiveImage name="carImg_1" alt="Car" />
 */
export const ResponsiveImage = ({ 
  name, 
  alt, 
  className, 
  basePath = '/assets/images/carImages',
  ...props 
}) => {
  return (
    <picture>
      {/* WebP format - modern browsers */}
      <source 
        srcSet={`${basePath}/${name}.webp`} 
        type="image/webp" 
      />
      {/* JPEG fallback */}
      <LazyImage
        src={`${basePath}/${name}.jpg`}
        alt={alt}
        className={className}
        {...props}
      />
    </picture>
  );
};

/**
 * ImageCarousel Component - Optimized carousel that loads one image at a time
 * Much more efficient than loading all images at once
 */
export const OptimizedImageCarousel = ({ images, autoPlay = true, interval = 5000, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Main image display */}
      <div className="relative w-full">
        {images.map((img, index) => (
          index === currentIndex && (
            <LazyImage
              key={`carousel-${index}`}
              src={typeof img === 'string' ? img : img.src}
              alt={typeof img === 'string' ? `Slide ${index + 1}` : img.alt}
              className="w-full h-auto"
              loading="lazy"
            />
          )
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 hover:bg-black/60 transition-colors"
        aria-label="Previous slide"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 hover:bg-black/60 transition-colors"
        aria-label="Next slide"
      >
        ❯
      </button>

      {/* Thumbnail indicators */}
      <div className="flex gap-2 justify-center mt-4 flex-wrap">
        {images.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-tawny scale-125' : 'bg-gray-400 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LazyImage;
