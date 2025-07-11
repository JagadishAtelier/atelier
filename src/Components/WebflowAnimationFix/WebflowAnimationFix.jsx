import { useEffect } from 'react';

export default function WebflowAnimationFix() {
  useEffect(() => {
    // Wait a short time to ensure all elements are loaded
    setTimeout(() => {
      if (window.Webflow && window.Webflow.require) {
        try {
          const ix2 = window.Webflow.require('ix2');
          if (ix2 && typeof ix2.init === 'function') {
            ix2.init(); // re-initialize Webflow animations
          }

          if (typeof window.Webflow.ready === 'function') {
            window.Webflow.ready(); // re-run Webflow's ready stack
          }

          // Trigger the load event manually
          window.dispatchEvent(new Event('load'));
        } catch (error) {
          console.error('Webflow animation fix failed:', error);
        }
      }
    }, 200); // small delay ensures DOM is ready
  }, []);

  return null;
}
