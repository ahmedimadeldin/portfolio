"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./nav-links";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const links = [
    {url:"/" , title: "Home"},
    {url:"/about" , title: "About"},
    {url:"/portfolio" , title: "Portfolio"},
    {url:"/contact" , title: "Contact"},
]

const Navbar = ()=>{

    const [open,setOpen] = useState(false);

    const topVariants = {
        closed : {
            rotate:0,
        },
        opened:{
            rotate:45,
            backgroundColor: "rgb(255,255,255)"
        }
    };

    const centerVariants = {
        closed : {
            opacity: 1,
        },
        opened:{
            opacity: 0,
        }
    }

    const bottomVariants = {
        closed : {
            rotate:0,
        },
        opened:{
            rotate:-45,
            backgroundColor: "rgb(255,255,255)"
        }
    };

    const listVariants = {
        closed: {
            x: "100vw",
        },
        opened: {
            x: 0,
            transition: {
                staggerChildren: 0.3,
            }
        }
    }
    const listItemVariants = {
        closed: {
            x:-10,
            opacity: 0
        },
        opened: {
            x:0,
            opacity:1
        }
    }

    const router = useRouter();


    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            {/* Logo  */}
            <div className="md:hidden lg:flex ">
                <Link href={"/"} className="bg-black rounded-md font-caveat font-medium p-1 flex items-center justify-center">
                <span className="text-white w-18 h-8 flex items-center justify-center px-1 xs:">Ahmed</span>
                <span className="w-18 h-8 px-1 rounded bg-white text-black flex items-center justify-center">Almahady</span>
                </Link>
            </div>

            {/* Links  */}

            <div className="hidden md:flex gap-8 ">
                {links.map((link)=>(
                    <NavLink link={link} key={link.url}/>
                ))}
            </div>

            {/* Socials  */}
            <div className="hidden md:flex gap-4 ">
                <Link href={"https://github.com/ahmedimadeldin"} target="_blank">
                <Image src={"/github.png"} alt="" width={24} height={24} />
                </Link>
                <Link href={"https://www.linkedin.com/in/ahmed-imadeldin/"} target="_blank">
                <Image src={"/linkedin.png"} alt="" width={24} height={24} />
                </Link>
            </div>
            {/* Responsive Menu   */}
            <div className="md:hidden">
                {/* Menu Button  */}
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={()=> setOpen((prev)=> !prev)}>
                    <motion.div variants={topVariants} animate={open? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                    <motion.div variants={centerVariants} animate={open? "opened" : "closed"} className="w-10 h-1 bg-black rounded"></motion.div>
                    <motion.div  variants={bottomVariants} animate={open? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                </button>

                {/* MENU LIST  */}
                { open && 
                <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-xl z-40">
                    {links.map((link)=>(
                        <motion.div variants={listItemVariants} key={link.url}>
                            <Link onClick={()=>setOpen(false)} href={link.url}>{link.title}</Link>
                        </motion.div>
                    ))}
                </motion.div>
                }
            </div>
        </div>
    )
}

export default Navbar;