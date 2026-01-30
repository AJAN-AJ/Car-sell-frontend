import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This creates the sliding effect
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed-bottom-right">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='border border-solid bg-black text-white font-black text-2xl fixed bottom-0 w-12 h-12 right-2 z-1000 rounded-full'
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default BackToTop;