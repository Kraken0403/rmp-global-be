import React, { useState, useEffect } from 'react';
import './CursorFollower.scss';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleLinkHover = () => {
      setIsHoveringLink(true);
    };

    const handleLinkLeave = () => {
      setIsHoveringLink(false);
    };

    window.addEventListener('mousemove', updateCursorPosition);

    // Select and attach event listeners to all link elements by class name
    const linkElements = document.querySelectorAll('.link-element');
    linkElements.forEach((linkElement) => {
      linkElement.addEventListener('mouseenter', handleLinkHover);
      linkElement.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);

      // Remove event listeners from all link elements
      linkElements.forEach((linkElement) => {
        linkElement.removeEventListener('mouseenter', handleLinkHover);
        linkElement.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  return (
    <div
      className={`cursor-follower ${isHoveringLink ? 'link-hover' : ''}`}
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        transform: isHoveringLink ? 'translate(-50%, -50%)' : 'link-hover',
      }}
    >
      {/* Content for cursor follower */}
    
    </div>
  );
};

export default CursorFollower;
