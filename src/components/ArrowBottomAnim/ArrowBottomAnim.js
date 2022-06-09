import React, { useState, useEffect } from 'react';
import './index.css'

const ArrowBottomAnim = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollBottom = () => {
    const vh = window.innerHeight
    window.scrollBy(0,vh)
  }
  return (
    <div
      onClick={()=>scrollBottom()}
      className={scrollPosition > 150 ? "none" : "mouse"}></div>
  )
}

export default ArrowBottomAnim
