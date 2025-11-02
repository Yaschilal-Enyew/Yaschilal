import React, { useEffect, useState } from "react";
// Import necessary hooks from framer-motion
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

/**
 * A "fun and beautiful" animated loader component.
 * It displays a name with each letter performing a staggered bounce/zoom animation,
 * a battery bar that fills up, and a percentage counter.
 * The entire screen fades out when loading is complete.
 *
 * @param {object} props
 * @param {string} [props.name="Welcome to Yaschilal"] - The name or word to animate.
 */
const Loader = ({ name = "Yaschilal" }) => {
  const [loading, setLoading] = useState(true);
  const loadingDuration = 3; // 3 seconds

  // Create a motion value to animate the percentage
  const count = useMotionValue(0);
  // Create a transformed motion value that rounds the count to the nearest integer
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    // This timer is for demonstration.
    const timer = setTimeout(() => setLoading(false), loadingDuration * 1000);

    // Animate the 'count' motion value from 0 to 100
    // over the same duration as the loading.
    const controls = animate(count, 100, {
      duration: loadingDuration,
      ease: "linear",
    });

    return () => {
      clearTimeout(timer);
      controls.stop(); // Stop the animation if the component unmounts
    };
    // Add 'count' to dependency array
  }, [count]);

  /**
   * Variants for each letter's animation.
   * 'hidden': Initial state before animation starts (off-screen, invisible, smaller).
   * 'visible': The looping animation state (bouncing, fully visible, larger).
   */
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50, // Start 50px below final position
      scale: 0.5,
    },
    visible: (i) => ({
      opacity: 1,
      y: [0, -20, 0], // The bounce animation (start, up, end)
      scale: [1, 1.2, 1], // The zoom effect, synced with the bounce
      transition: {
        delay: i * 0.05, // Faster stagger for the longer string
        duration: 1.8,
        repeat: Infinity,
        repeatType: "mirror", // Makes it bounce up and down smoothly
        ease: "easeInOut",
      },
    }),
  };

  return (
    // AnimatePresence handles the exit animation when 'loading' becomes false.
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950 space-y-10"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
        >
          {/* This div groups the letters, allowing them to wrap on smaller screens */}
          <motion.div className="flex flex-wrap justify-center space-x-2 px-4">
            {name.split("").map((letter, idx) => (
              <motion.span
                key={idx}
                custom={idx} // Pass the index to the 'visible' variant for staggering
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="font-extrabold text-4xl text-yellow-400 sm:text-6xl"
                style={{
                  // A more pronounced "glow" effect
                  textShadow:
                    "0 0 8px rgba(250, 204, 21, 0.8), 0 0 20px rgba(250, 204, 21, 0.5), 0 0 30px rgba(250, 204, 21, 0.3)",
                }}
              >
                {/* Use '&nbsp;' for spaces to ensure they are rendered and animated */}
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Battery Loader Animation with Percentage and Text */}
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="flex items-center justify-center space-x-2">
              {/* Battery Casing */}
              <div className="w-24 h-10 border-2 border-yellow-500 rounded-lg p-1 flex items-center">
                {/* Battery Level (animated) */}
                <motion.div
                  className="h-full bg-yellow-400 rounded-md"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: loadingDuration, ease: "linear" }}
                />
              </div>
              {/* Battery Tip */}
              <div className="w-2 h-5 bg-yellow-500 rounded-r-md"></div>

              {/* Percentage Text */}
              <div className="flex items-center text-yellow-400 font-semibold text-xl w-14">
                {/* 'tabular-nums' prevents the width from changing as numbers count up */}
                <motion.span className="w-8 text-right tabular-nums">
                  {rounded}
                </motion.span>
                <span>%</span>
              </div>
            </div>

            {/* Loading Text */}
            <p className="text-yellow-500 text-lg font-medium">Loading...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;

