'use client';
import { motion } from 'motion/react';
import { useEffect, useRef, useState, useMemo } from 'react';

const SplitText = ({
  text = '',
  className = '',
  delay = 0.1,
  animationFrom = { opacity: 0, y: 20 },
  animationTo = { opacity: 1, y: 0 },
  easing = 'easeOut',
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onWordAnimationComplete,
}) => {
  // Split the text into words (no need to split letters anymore)
  const words = useMemo(() => text.split(' '), [text]);

  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);

  // Define IntersectionObserver here to handle multiple animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset animated count when it comes into view again
          animatedCount.current = 0; // Reset so animation triggers again
          setInView(true);
        } else {
          setInView(false); // Optional: reset when it's out of view (if you want it to disappear)
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  // Handle completion of all word animations
  const handleAnimationComplete = () => {
    animatedCount.current += 1;
    if (animatedCount.current === words.length && onWordAnimationComplete) {
      onWordAnimationComplete();
    }
  };

  return (
    <p
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        textAlign,
        overflow: 'hidden',
        display: 'inline',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
      }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          <motion.span
            initial={animationFrom}
            animate={inView ? animationTo : animationFrom}
            transition={{
              delay: wordIndex * delay, // Add delay for each word based on its index
              duration: 0.3,
              ease: easing,
            }}
            onAnimationComplete={handleAnimationComplete}
            style={{
              display: 'inline-block',
              willChange: 'transform, opacity',
            }}
          >
            {word}
          </motion.span>
          <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>
        </span>
      ))}
    </p>
  );
};

export default SplitText;
