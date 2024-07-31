"use client";

import Navbar from "@/components/navbar";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({children})=>{

    const pathName = usePathname();
    return (
        <AnimatePresence mode="wait">
     <div className='w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100'>
          <motion.div className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{height: "0vh"}}
          exit={{height: "120vh"}}
          transition={{duration: 0.6 , ease :"easeOut"}}
          key={pathName}
          />
          <motion.div className="h-screen w-screen fixed bg-black bottom-0 rounded-t-[100px] z-30"
          initial ={{height: "120vh"}}
          animate={{height: "0vh", transition: {delay:0.5}}}
          key={pathName}
          />
          <motion.div className=" fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial ={{opacity: 1}}
          animate={{opacity: 0,}}
          exit={{opacity: 0}}
          transition={{duration: 1 ,ease: "easeOut"}}
          key={pathName}
          >
            {pathName.substring(1).toLocaleUpperCase()}
          </motion.div>

          <div className='h-24'>
            <Navbar/>
          </div>
          <div className='h-[calc(100vh-6rem)]'>
            {children}
          </div>
    </div>

        </AnimatePresence>
    )
}

export default TransitionProvider;