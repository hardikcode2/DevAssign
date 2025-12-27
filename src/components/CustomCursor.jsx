import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  const circleRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize cursor position
    const initPosition = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    circleRef.current = initPosition;
    targetRef.current = initPosition;
    setCirclePosition(initPosition);
    setMousePosition(initPosition);

    const handleMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Smooth easing animation loop
    const animate = () => {
      const dx = targetRef.current.x - circleRef.current.x;
      const dy = targetRef.current.y - circleRef.current.y;

      // Heavy easing factor (0.15 = smooth trailing effect)
      const easing = 0.15;
      
      circleRef.current.x += dx * easing;
      circleRef.current.y += dy * easing;

      setCirclePosition({
        x: circleRef.current.x,
        y: circleRef.current.y
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Trailing circle */}
      <div
        style={{
          position: 'fixed',
          left: `${circlePosition.x}px`,
          top: `${circlePosition.y}px`,
          width: '40px',
          height: '40px',
          border: '2px solid #059669', // emerald-600
          borderRadius: '50%',
          backgroundColor: 'transparent',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          transition: 'none', // We handle animation manually
        }}
      />
      {/* Small dot at actual cursor position */}
      <div
        style={{
          position: 'fixed',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: '8px',
          height: '8px',
          backgroundColor: '#86efac', // light green
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 10000,
        }}
      />
    </>
  );
};

export default CustomCursor;

