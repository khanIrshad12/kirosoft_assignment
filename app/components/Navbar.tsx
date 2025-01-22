'use client';

import { motion } from 'framer-motion';
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [showLetters, setShowLetters] = useState(false);
    const letters = ['G', 'C', 'O', 'R', 'E'];

    // Framer Motion Variants for Staggered Animation
    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 5,
                staggerChildren: .8, // Add delay between children
            },
        },
    };

    const staggerItem = {
        hidden: { opacity: 0, scale: 0.8, y: 20, rotate: -10 },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: 0,
            transition: {
                duration: 1,
                ease: "easeOut",
            },
        },
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLetters(true);
        }, 500); // Delay to trigger stagger animation

        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.nav
            initial={{ y: -800, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, delay: 1, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 "
        >
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Left: Animated Logo */}
                <div className="flex items-center">
                    <div className="relative flex items-center">
                        <motion.div
                            initial={{ scale: 0, x: 0 }}
                            animate={{
                                scale: 1,
                                x: showLetters ? -10 : 0,
                            }}
                            transition={{
                                scale: { duration: 0.6, delay: 0.7, ease: "easeOut" },
                                x: { duration: 0.5, ease: "easeInOut" },
                            }}
                            className="w-8 h-8 bg-white rounded-full relative"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{
                                    scale: 1,
                                    x: showLetters ? -4 : 0,
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <motion.div className="text-[#151517] font-bold text-4xl">
                                    G
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="flex h-8 items-center"
                            variants={staggerContainer}
                            initial="hidden"
                            animate={showLetters ? "show" : "hidden"}
                        >
                            {letters.map((letter) => (
                                <motion.div
                                    key={letter}
                                    variants={staggerItem}
                                    className="text-white font-bold text-2xl"
                                >
                                    {letter}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Middle: Staggered Animation for Navbar Items */}
                <motion.div
                    className="hidden md:flex space-x-6 text-[.9rem]"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                >
                    {["Products", "Pricing", "Resources", "Partners", "Why GCore"].map(
                        (item, index) => (
                            <motion.button
                                key={index}
                                className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                                variants={staggerItem}
                            >
                                {item}
                                <IoIosArrowDown />
                            </motion.button>
                        )
                    )}
                </motion.div>

                {/* Right: Contact and Sign-up Buttons */}
                <motion.div
                    className="flex items-center space-x-4"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                >
                    <motion.button
                        className="text-white isolate px-3 py-2 rounded-full bg-white/20 shadow-lg"
                        variants={staggerItem}
                    >
                        Contact us
                    </motion.button>
                    <motion.button
                        className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
                        variants={staggerItem}
                    >
                        Sign up for free
                    </motion.button>
                </motion.div>
            </div>
        </motion.nav>
    );
}
