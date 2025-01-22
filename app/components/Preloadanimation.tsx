'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PreloadAnimation({ onComplete }: { onComplete: () => void }) {
  const [showLetters, setShowLetters] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLetters(true);
    }, 1000);
    
    const completeTimer = setTimeout(() => {
      setIsComplete(true);
      onComplete();
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const letters = ['G','C', 'O', 'R', 'E'];
  
  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 bg-[#151517] flex items-center justify-center overflow-hidden z-50"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0, x: 0 }}
              animate={{ 
                scale: 1,
                x: showLetters ? -10 : 0
              }}
              transition={{ 
                scale: { duration: 0.6, ease: "easeOut" },
                x: { duration: 0.5, ease: "easeInOut" }
              }}
              className="w-14 h-14 bg-white rounded-full relative"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 ,
                    x: showLetters ? -9 : 0
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  className="text-[#151517] font-bold text-6xl"
                >
                  G
                </motion.div>
              </motion.div>
            </motion.div>

            <div className="absolute top-0 left-full flex h-14 items-center">
              {letters.map((letter, index) => (
                <motion.div
                  key={letter}
                  initial={{ opacity: 0, x: 20 }}
                  animate={showLetters ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: 0.15 * (index + 1),
                    ease: "easeOut"
                  }}
                  className="text-white font-bold text-2xl"
                >
                  {letter}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}