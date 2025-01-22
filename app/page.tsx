'use client';

import { motion, AnimatePresence } from 'framer-motion';
import PreloadAnimation from '@/app/components/Preloadanimation';
import MainContent from '@/app/components/MainContent';
import Navbar from '@/app/components/Navbar';
import { useState } from 'react';
import { Spotlight } from './components/SportLight';

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#151517] overflow-hidden">
      <PreloadAnimation onComplete={() => setShowMainContent(true)} />
      <AnimatePresence>
        {showMainContent && (
          <motion.div
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          exit={{ y: "100vh" }}
          transition={{
            duration: 1.8,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          >
            <Spotlight />
            <Navbar />
            <MainContent />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}