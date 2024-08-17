"use client";

import Image from 'next/image'
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <motion.div className='h-full' initial={{y:"-200vh"}} animate={{y: "0%"}} transition={{duration:1}}>
    <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:pb-6'>
      {/* Image Container  */}
      <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
        <Image src={"/hero.png"} fill className='object-contain'/>
      </div> 

      {/* Text Container */}
      <div className='flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2'>
       {/* Title  */}
       <h1 className='text-4xl md:text-6xl font-bold'>Crafting Digital Experiences, Designing for Tomorrow.</h1>
       {/* DESC  */}
       <p className='md:text-xl text-semibold'>Welcome to my digital canvas, where creativity and innovation converge.
        With a keen eye for aesthetics and mastery of code.
       </p>
       {/* Buttons  */}
       <div className='w-full flex gap-4'>
        <Link href={"/Ahmed-Almahady-cv.pdf"} passHref target='_blank'><button className='p-4 rounded-lg ring-1 ring-black bg-black text-white'>Download cv</button></Link>
        
        <Link href={"/contact"}><button  className='p-4 rounded-lg ring-1 ring-black'>Contact Me</button></Link>
       </div>
      </div>
    </div>
    </motion.div>
  )
}
