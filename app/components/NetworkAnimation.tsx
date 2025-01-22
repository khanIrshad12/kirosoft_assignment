"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function NetworkAnimation() {

    const beamRef1 = useRef(null);
    const beamRef2 = useRef(null);
    const beamRef3 = useRef(null);
    const beamRef4 = useRef(null);
    const beamRef5 = useRef(null);
    const beamRef6 = useRef(null);
    const beamRef7 = useRef(null);
    const beamRef8 = useRef(null);
    // const beamRef9 = useRef(null);
    useEffect(() => {
        const beam1 = beamRef1.current;
        const beam2 = beamRef2.current;
        const beam3 = beamRef3.current;
        const beam4 = beamRef4.current;
        const beam5 = beamRef5.current;
        const beam6 = beamRef6.current;
        const beam7 = beamRef7.current;
        const beam8 = beamRef8.current;
        // const beam7 = beamRef7.current;

        // Function to start the beam animation
        const startBeamAnimation = (refElem:HTMLElement | null) => {
            if (!refElem) return;
           // console.log(refElem);
            // Show the refElem
            refElem.style.visibility = 'visible';

            // Reset animation by removing and reapplying the animation property
            refElem.style.animation = 'none';

            // Allow browser to reset before reapplying animation
            requestAnimationFrame(() => {
                setTimeout(() => {
                    refElem.style.animation = 'moveBeam 1s linear';
                }, 0);
            });

            // Hide the beam after the animation duration (1s)
            setTimeout(() => {
                refElem.style.visibility = 'hidden';

                // Wait a random delay before starting the animation again
                const randomDelay = Math.random() * 4000 + 2000; // Between 1s and 5s
                setTimeout(() => startBeamAnimation(refElem), randomDelay);
            }, 1000); // 1s animation duration */
        };

        // Start the first animation
        setTimeout((() => startBeamAnimation(beam1)), 5000)
        setTimeout((() => startBeamAnimation(beam2)), 10000)
        setTimeout((() => startBeamAnimation(beam3)), 15000)
        setTimeout((() => startBeamAnimation(beam4)), 20000)
        setTimeout((() => startBeamAnimation(beam5)), 13000)
        setTimeout((() => startBeamAnimation(beam6)), 18000)
        setTimeout((() => startBeamAnimation(beam7)), 20000)
        setTimeout((() => startBeamAnimation(beam8)), 12000)
    }, []);


    return (
        <div className="w-full">
            <div className="relative w-full max-w-[1180px] mx-auto">
                <motion.svg id="network-svg" viewBox="0 0 1180 220" preserveAspectRatio="xMidYMid meet" initial="hidden" animate="visible">
                    <defs>
                        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: "#333333" }} />
                            <stop offset="100%" style={{ stopColor: "#4a4a4a" }} />
                        </linearGradient>

                        <linearGradient id="gradientt" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgb(243, 244, 246)" /> {/* from-zinc-100 */}
                            <stop offset="100%" stopColor="rgb(75, 85, 99)" /> {/* to-zinc-600 */}
                        </linearGradient>
                    </defs>

                    {/* Connection Lines */}
                    <g className="connections">
                        {/* Left Top to AI */}
                        <motion.polyline
                            points="150,35 350,35 380,55 535,53"
                            fill="none"
                            stroke="url(#pathGradient)"
                            strokeWidth="2"
                            variants={drawLineVariants}
                            initial="hidden"
                            animate="visible"
                        />
                        <polyline ref={beamRef1} style={{}} className="beam" points="150,35 350,35 380,55 535,53" />


                        {/* Left Middle to AI */}
                        <motion.polyline
                            points="50,102 250,102 280,72 535,72"
                            fill="none"
                            stroke="url(#pathGradient)"
                            strokeWidth="2"
                            variants={drawLineVariants}
                            initial="hidden"
                            animate="visible"
                        />
                        <polyline ref={beamRef2} style={{}} className="beam" points="50,102 250,102 280,72 535,72" />

                        {/* Left Bottom to AI */}
                        <motion.polyline
                            points="100,160 300,160 380,93 535,93"
                            fill="none"
                            stroke="url(#pathGradient)"
                            strokeWidth="2"
                            variants={drawLineVariants}
                            initial="hidden"
                            animate="visible"
                        />
                        <polyline ref={beamRef3} style={{}} className="beam" points="100,160 300,160 380,93 535,93" />

                        {/* AI to Left Last */}
                        <motion.polyline
                            points="0,200 300,200 400,110 540,110"
                            fill="none"
                            stroke="url(#pathGradient)"
                            strokeWidth="2"
                            variants={drawLineVariants}
                            initial="hidden"
                            animate="visible"
                        />
                        <polyline ref={beamRef4} style={{}} className="beam" points="0,200 300,200 400,110 540,110" />

                        {/* // AI to Right Top (Reversed animation) */}
                        <motion.polyline
                            points="990,35 810,35 780,53 643,53" // Reverse the order of points here
                            fill="none"
                            stroke="url(#pathGradient)"
                            strokeWidth="2"
                            variants={drawLineVariants}
                            initial="hidden"
                            animate="visible"
                        />
                        <polyline ref={beamRef5} style={{}} className="beam" points="990,35 810,35 780,53 643,53" />

                        {/* AI to Right Middle */}
                        <motion.polyline
                            points="1080,103 950,70 780,73 643,73" // Reverse the order of points
                            fill="none"
                            stroke="url(#pathGradient)"
                            strokeWidth="2"
                            variants={drawLineVariants}
                            initial="hidden"
                            animate="visible"
                        />
                        <polyline ref={beamRef6} style={{}} className="beam" points="1080,103 950,70 780,73 643,73" />

                        {/* AI to Right Bottom */}
                        <motion.polyline
                            points="1040,170 900,170 800,93 643,93" // Reverse the order of points
                            fill="none"
                            stroke="url(#pathGradient)"
                            strokeWidth="2"
                            variants={drawLineVariants}
                            initial="hidden"
                            animate="visible"
                        />
                        <polyline ref={beamRef7} style={{}} className="beam" points="1040,170 900,170 800,93 643,93" />
                        {/* AI to Right Last */}
                        <motion.polyline
                            points="1180,200 890,200 780,110 643,110" // Reverse the order of points
                            fill="none"
                            stroke="url(#pathGradient)"
                            strokeWidth="2"
                            variants={drawLineVariants}
                            initial="hidden"
                            animate="visible"
                        />
                        <polyline ref={beamRef8} style={{}} className="beam" points="1180,200 890,200 780,110 643,110" />
                        {/* Bottom Connections - Straight vertical lines */}
                        {[562, 583, 603, 620].map((x, i) => (
                            <motion.line
                                key={i}
                                x1={x}
                                y1="300" // Start at the bottom
                                x2={x + 0.1}
                                y2="132" // End at the top
                                stroke="url(#pathGradient)"
                                strokeWidth="2"
                                variants={drawLineVariants}
                                initial="hidden"
                                animate="visible"
                            />
                        ))}
                    </g>

                    {/* Network Container */}
                    <g className="network-container">
                        {/* AI Node */}
                        <motion.g className="ai-node" transform="translate(550, 40)" variants={aiNodeVariants}>
                            {/* AI Node Pins */}
                            <g className="pins">
                                {/* Left Pins */}
                                {[10, 30, 50, 68].map((y, i) => (
                                    <motion.rect
                                        key={i}
                                        x="-15"
                                        y={y}
                                        width="20"
                                        height="5"
                                        rx="2"
                                        ry="2"
                                        fill="#2c2c2c"
                                        stroke="#4a4a4a"
                                        strokeWidth="3"
                                        variants={pinVariants}

                                    />
                                ))}
                                {/* Right Pins */}
                                {[10, 30, 50, 68].map((y, i) => (
                                    <motion.rect
                                        key={i}
                                        x="73"
                                        y={y}
                                        width="20"
                                        height="5"
                                        rx="2"
                                        ry="2"
                                        fill="#2c2c2c"
                                        stroke="#4a4a4a"
                                        strokeWidth="3"
                                        variants={pinVariants}
                                    />
                                ))}
                                {/* Bottom Pins */}
                                {[10, 30, 50, 68].map((x, i) => (
                                    <motion.rect
                                        key={i}
                                        x={x}
                                        y="72"
                                        width="5"
                                        height="20"
                                        rx="2"
                                        ry="2"
                                        fill="#2c2c2c"
                                        stroke="#4a4a4a"
                                        strokeWidth="3"
                                        variants={pinVariants}
                                    />
                                ))}
                            </g>

                            {/* AI Box */}
                            <rect width="80" height="80" rx="10" ry="10" fill="#2c2c2c" stroke="#4a4a4a" strokeWidth="3" />
                            <text x="27" y="50" fontFamily="Arial" fontSize="28" fill="url(#gradientt)" fontWeight="bold" >
                                AI
                            </text>
                        </motion.g>

                        {/* Left Side Nodes */}
                        <g className="left-nodes">
                            {/* A Node */}
                            <motion.g
                                transform="translate(100, 10)"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0 * 0.2 + 1.5, duration: 0.5 }}
                            >
                                {/* Pin */}
                                <rect
                                    x="40"
                                    y="23"
                                    width="20"
                                    height="5"
                                    rx="2"
                                    ry="2"
                                    fill="#2c2c2c"
                                    stroke="#4a4a4a"
                                    strokeWidth="3"
                                />
                                {/* Box */}
                                <rect width="50" height="50" rx="10" ry="10" fill="#2c2c2c" stroke="#4a4a4a" strokeWidth="3" />
                                <text x="20" y="32" fontFamily="Arial" fontSize="18" fill="url(#gradientt)" fontWeight="bold">
                                    A
                                </text>
                            </motion.g>

                            {/* S Node */}
                            <motion.g
                                transform="translate(10, 80)"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 * 0.2 + 1.5, duration: 0.5 }}
                            >
                                {/* Pin */}
                                <rect
                                    x="30"
                                    y="20"
                                    width="20"
                                    height="5"
                                    rx="2"
                                    ry="2"
                                    fill="#2c2c2c"
                                    stroke="#4a4a4a"
                                    strokeWidth="3"
                                />
                                {/* Box */}
                                <rect width="40" height="40" rx="10" ry="10" fill="#2c2c2c" stroke="#4a4a4a" strokeWidth="3" />
                                <text x="14" y="26" fontFamily="Arial" fontSize="18" fill="url(#gradientt)" fontWeight="bold">
                                    S.
                                </text>
                            </motion.g>

                            {/* M Node */}
                            <motion.g
                                transform="translate(70, 130)"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2 * 0.2 + 1.5, duration: 0.5 }}
                            >
                                {/* Pin */}
                                <rect
                                    x="50"
                                    y="28"
                                    width="20"
                                    height="5"
                                    rx="2"
                                    ry="2"
                                    fill="#2c2c2c"
                                    stroke="#4a4a4a"
                                    strokeWidth="3"
                                />
                                {/* Box */}
                                <rect width="60" height="60" rx="10" ry="10" fill="#2c2c2c" stroke="#4a4a4a" strokeWidth="3" />
                                <text x="20" y="40" fontFamily="Arial" fontSize="25" fill="url(#gradientt)"fontWeight="bold">
                                    M
                                </text>
                            </motion.g>
                        </g>

                        {/* Right Side Nodes */}
                        <g className="right-nodes">
                            {/* S Node */}
                            <motion.g
                                transform="translate(1000, 10)"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 3 * 0.2 + 1.5, duration: 0.5 }}
                            >
                                {/* Pin */}
                                <rect
                                    x="-10"
                                    y="23"
                                    width="20"
                                    height="5"
                                    rx="2"
                                    ry="2"
                                    fill="#2c2c2c"
                                    stroke="#4a4a4a"
                                    strokeWidth="3"
                                />
                                {/* Box */}
                                <rect width="50" height="50" rx="10" ry="10" fill="#2c2c2c" stroke="#4a4a4a" strokeWidth="3" />
                                <text x="20" y="32" fontFamily="Arial" fontSize="18" fill="url(#gradientt)" fontWeight="bold">
                                    S.
                                </text>
                            </motion.g>

                            {/* Group containing the rectangle and the image */}
                            <motion.g
                                transform="translate(50, 50)"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 4 * 0.2 + 1.5, duration: 0.5 }}
                            >
                                {/* Pin */}
                                <rect
                                    x="990"
                                    y="40"
                                    width="20"
                                    height="5"
                                    rx="2"
                                    ry="2"
                                    fill="#2c2c2c"
                                    stroke="#4a4a4a"
                                    strokeWidth="3"
                                />
                                {/* Rectangle */}
                                <rect
                                    width="60"
                                    height="60"
                                    rx="10"
                                    ry="10"
                                    fill="#2c2c2c"
                                    stroke="#4a4a4a"
                                    strokeWidth="3"
                                    x="1000"
                                    y="15"
                                />
                                {/* Image */}
                                <image x="1009" y="25" width="40" height="40" href="/grid.jpg" />
                            </motion.g>

                            {/* ChatGPT Node */}
                            <motion.g
                                transform="translate(50, 50)"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 5 * 0.2 + 1.5, duration: 0.5 }}
                            >
                                {/* Pin */}
                                <rect
                                    x="980"
                                    y="118"
                                    width="20"
                                    height="5"
                                    rx="2"
                                    ry="2"
                                    fill="#2c2c2c"
                                    stroke="#4a4a4a"
                                    strokeWidth="3"
                                />
                                {/* Box */}
                                <rect
                                    width="40"
                                    height="40"
                                    rx="10"
                                    ry="10"
                                    fill="#2c2c2c"
                                    stroke="#4a4a4a"
                                    strokeWidth="3"
                                    x="990"
                                    y="97"
                                />
                                {/* Image */}
                                <image x="996" y="103" width="30" height="30" href="/icons8-chatgpt-24.png" />
                            </motion.g>
                        </g>
                    </g>
                </motion.svg>
            </div>
        </div>
    )
}

const aiNodeVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
}

const pinVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 },
    },
}

const drawLineVariants = {
    hidden: { pathLength: 0, pathOffset: 1 },
    visible: {
        pathLength: 1,
        pathOffset: 0,
        transition: {
            delay: 2.5,
            duration: 1.5,
            ease: "easeInOut",
        },
    },
}

