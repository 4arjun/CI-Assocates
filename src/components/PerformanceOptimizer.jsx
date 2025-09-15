import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Optimize Core Web Vitals
    
    // 1. Cumulative Layout Shift (CLS) optimization
    const optimizeCLS = () => {
      // Add dimension attributes to images without them
      const images = document.querySelectorAll('img:not([width]):not([height])');
      images.forEach(img => {
        if (!img.width && !img.height) {
          // Set default dimensions based on common aspect ratios
          const aspectRatio = img.naturalWidth / img.naturalHeight;
          if (aspectRatio > 1.5) {
            // Landscape
            img.setAttribute('width', '800');
            img.setAttribute('height', '533');
          } else if (aspectRatio < 0.75) {
            // Portrait
            img.setAttribute('width', '400');
            img.setAttribute('height', '600');
          } else {
            // Square-ish
            img.setAttribute('width', '600');
            img.setAttribute('height', '600');
          }
        }
      });
    };

    // 2. Largest Contentful Paint (LCP) optimization
    const optimizeLCP = () => {
      // Preload critical resources
      const criticalImages = [
        '/src/assets/logo.jpeg',
        '/src/assets/project1.jpeg',
        '/public/logo.png'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });

      // Prioritize above-the-fold content
      const heroImages = document.querySelectorAll('.carousel img, .hero img, .splash-screen img');
      heroImages.forEach(img => {
        img.loading = 'eager';
        img.fetchpriority = 'high';
      });
    };

    // 3. First Input Delay (FID) optimization
    const optimizeFID = () => {
      // Use requestIdleCallback for non-critical tasks
      const deferNonCritical = () => {
        if ('requestIdleCallback' in window) {
          requestIdleCallback(() => {
            // Initialize non-critical animations
            const nonCriticalAnimations = document.querySelectorAll('[data-aos-delay]');
            nonCriticalAnimations.forEach(el => {
              if (parseInt(el.getAttribute('data-aos-delay')) > 500) {
                el.style.willChange = 'transform, opacity';
              }
            });
          });
        }
      };

      // Defer non-critical JavaScript execution
      setTimeout(deferNonCritical, 100);
    };

    // 4. Enhanced Image Loading Strategy
    const optimizeImages = () => {
      // Intersection Observer for lazy loading images
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                img.classList.add('loaded');
                observer.unobserve(img);
              }
            }
          });
        }, {
          rootMargin: '50px 0px',
          threshold: 0.1
        });

        // Observe all lazy images
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => {
          imageObserver.observe(img);
        });
      }
    };

    // 5. Font Loading Optimization
    const optimizeFonts = () => {
      // Ensure font display: swap is working
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      link.href = 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2';
      document.head.appendChild(link);
    };

    // 6. Resource Hints for Third-party Resources
    const addResourceHints = () => {
      const hints = [
        { rel: 'dns-prefetch', href: 'https://images.unsplash.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
      ];

      hints.forEach(hint => {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.crossorigin) link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // 7. Service Worker for Caching (if available)
    const registerServiceWorker = () => {
      if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js')
            .then(registration => {
              console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
              console.log('SW registration failed: ', registrationError);
            });
        });
      }
    };

    // Execute optimizations
    const runOptimizations = () => {
      optimizeLCP();
      optimizeFID();
      optimizeImages();
      optimizeFonts();
      addResourceHints();
      registerServiceWorker();
      
      // Delay CLS optimization until images are loaded
      setTimeout(optimizeCLS, 1000);
    };

    // Run immediately and on load
    runOptimizations();
    
    // Cleanup function
    return () => {
      // Clean up any observers or listeners if needed
    };
  }, []);

  // Performance monitoring (for development)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Web Vitals monitoring
      const logWebVitals = (metric) => {
        console.log(`${metric.name}:`, metric.value, metric);
      };

      // Observe performance metrics
      if ('PerformanceObserver' in window) {
        // LCP Observer
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          logWebVitals({
            name: 'LCP',
            value: lastEntry.startTime,
            entries
          });
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // FID Observer
        const fidObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach(entry => {
            logWebVitals({
              name: 'FID',
              value: entry.processingStart - entry.startTime,
              entry
            });
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // CLS Observer
        let clsScore = 0;
        const clsObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!entry.hadRecentInput) {
              clsScore += entry.value;
            }
          }
          logWebVitals({
            name: 'CLS',
            value: clsScore
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    }
  }, []);

  return null; // This is a utility component with no UI
};

export default PerformanceOptimizer;