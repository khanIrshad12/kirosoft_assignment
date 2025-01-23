'use client';

import { motion } from 'framer-motion';
import NetworkAnimation from './NetworkAnimation';
import { IoSparkles } from "react-icons/io5";
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import { cn } from '@/lib/utils';


export default function MainContent() {
    const titleWords = ['Inference', 'at', 'the', 'Edge'];
    const description = [
        "Boost your AI application's speed and efficiency globally by bringing ",
        "inference closer to your users.Enjoy customization and cost-efficiency for a",
        "best-in-class inference experience."
    ];

    return (
        <motion.div
            className="relative z-10 max-w-7xl mx-auto px-4 pt-24 text-center "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 6.5,

            }}
        >
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:7.9}}
            >

            <AnimatedGridPattern
                numSquares={20}
                maxOpacity={0.1}
                duration={3}
                width={80}
                height={70}
               

                className={cn(
                    "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-35%] h-[100vh] ",
                )}
            />
            </motion.div>
            <div className="flex justify-center mb-2">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className=" "
                >
                    <div className="relative inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900/80 rounded-full text-white">
                        {/* Top glow effect */}
                        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                        {/* Star icon */}
                        {/* Star icon */}
                        <IoSparkles className='text-orange-500' />

                        {/* Text */}
                        <span className="text-sm font-medium">Beta release</span>
                    </div>
                </motion.span>
            </div>

            <div className="flex justify-center flex-wrap gap-x-3 mb-1">
                {titleWords.map((word, index) => (
                    <motion.span
                        key={word}
                        initial={{ y: 600, opacity: 0, scale: 2 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.9,
                            delay: 1 + index * 0.15,
                            ease: "easeOut"
                        }}
                        className="text-5xl md:text-7xl font-bold bg-gradient-to-t from-zinc-100 to-zinc-600 bg-clip-text text-transparent"
                    >
                        {word}
                    </motion.span>
                ))}
            </div>

            <div className="max-w-3xl mx-auto mb-3">
                {description.map((sentence, index) => (
                    <motion.p
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 1.3 + index * 0.2,
                            ease: "easeOut"
                        }}
                        className="text-md text-zinc-400 "
                    >
                        {sentence}
                    </motion.p>
                ))}
            </div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.9, duration: 0.5 }}
                className="flex justify-center gap-4 "
            >
                <button className="px-5  bg-orange-600 text-white rounded-full font-medium hover:bg-orange-600 transition-colors">
                    Get started
                </button>
                <button className="px-5 py-2 border border-gray-700 text-white rounded-full font-medium hover:bg-white/5 transition-colors">
                    Book a demo
                </button>
            </motion.div>

            <NetworkAnimation />
        </motion.div>
    );
}