import React, { useEffect, useState } from 'react';
import { SocialLinks } from '../Footer';
import './FloatingDock.scss';


const FloatingDock = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const { top } = aboutSection.getBoundingClientRect();
      if (window.scrollY >= window.innerHeight * 0.9) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    visible && (
      <div className="hidden sm:flex floating-dock text-white text-xs">
        <SocialLinks />
      </div>
    )
  );
};

export default FloatingDock; 