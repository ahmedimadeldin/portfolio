"use client";

import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = ()=> {

    const containerRef = useRef();

    const {scrollYProgress} = useScroll({container:containerRef});
    const skillRef = useRef();
    const isSkillRefInView = useInView(skillRef);
    return (
        <motion.div className='h-full' initial={{y:"-200vh"}} animate={{y: "0%"}} transition={{duration:1}}>
            {/* Container  */}
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                {/* Text Container  */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-16 md:gap-32 lg:gap-48 xl:gap-64">
                    {/* Biography Container  */}
                    <div className="flex flex-col gap-12 justify-center">
                        {/* Biography Title  */}
                        <h1 className="font-bold text-2xl">About Me</h1>
                        {/* Biography Description */}
                        <p className="text-lg">
                        Call me Ahmed, a Software Engineer, University of Khartoum graduate. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood.
                         With an insatiable curiosity and a keen analytical mind. 
                         Usually explore vast datasets for extracting meaningful information or fun.
                        </p>
                        <motion.svg
                         initial={{ opacity: 0.2, y: 0 }}
                        animate={{ opacity: 1, y: "10px" }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                     >
                        <path
                            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                            stroke="#000000"
                            strokeWidth="1"
                         ></path>
                        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                        <path
                            d="M15 11L12 14L9 11"
                            stroke="#000000"
                            strokeWidth="1"
                         ></path>
                        </motion.svg>
                    </div>
                    {/* Skills Container  */}
                    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                        <motion.h1 initial={{x:"-300px"}} animate={isSkillRefInView ? {x: 0 }:{}} transition={{delay: 1.2}} className="font-bold text-2xl">Skills</motion.h1>
                        {/* Skill List  */}
                        <motion.div initial={{x:"-300px"}} animate={isSkillRefInView ? {x: 0 }:{}} transition={{delay: 2}}className="flex gap-8 flex-wrap">
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">HTML</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">CSS</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Typescript</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Javascript</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tailwindcss</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Git</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Node.js</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Express.js</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Next.js</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Python</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">SQL</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">MongoDB</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Docker</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tableau</div>
                        </motion.div>
                            {/* Scroll SVG  */}

                            {/* Expierince  */}
                            {/* <div>

                            </div> */}
                    </div>
                </div>

                    {/* SVG CONTAINER  */}
                <div className="hidden lg:block w-1/2 xl:w-1/2 sticky top-0 z-30">
                        <Brain scrollYProgress={scrollYProgress}/>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutPage;