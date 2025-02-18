'use client'
import Link from "next/link";
import {motion} from "motion/react";

export const HamMenu = () => {

    const toggleMenu = () => {
        const menu = document.querySelector(".ham-menu");
        const routes = document.querySelector(".ham-routes");
        menu.classList.toggle("menu-open");
        routes.classList.toggle("ham-open");
        
    }

  return (
    <>
    <motion.div className="ham-container" initial={{opacity: 0, y:-30}} animate={{opacity:1, y:0}} transition={{duration: 1}}>
    <div className="ham-logo">
        <Link href="/">Xianze</Link>
    </div>
    <div className="ham-menu " onClick={toggleMenu}>
    <p></p>
    <p></p>
    </div>
    <div className="ham-routes">
     <Link href="/" onClick={toggleMenu}>Home</Link>
     <Link href="/events" onClick={toggleMenu}>Events</Link>
     <Link href="/schedule" onClick={toggleMenu} >Schedule</Link>
     <Link href="/contact" onClick={toggleMenu}>Contact</Link>
     <Link href="https://forms.gle/mgmGwYPf7TUtApxKA" onClick={toggleMenu}><button>Register</button></Link>
    </div>
    </motion.div>
    </>
  )
}
