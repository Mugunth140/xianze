'use client'
import Link from "next/link";

export const HamMenu = () => {

    const toggleMenu = () => {
        const menu = document.querySelector(".ham-menu");
        const routes = document.querySelector(".ham-routes");
        menu.classList.toggle("menu-open");
        routes.classList.toggle("ham-open");
        
    }

  return (
    <>
    <div className="ham-container">
    <div className="ham-logo">
        <Link href="/">Xianze</Link>
    </div>
    <div className="ham-menu " onClick={toggleMenu}>
    <p></p>
    <p></p>
    </div>
    <div className="ham-routes">
     <Link href="/" onClick={toggleMenu}>Home</Link>
     <Link href="/about" onClick={toggleMenu} >About</Link>
     <Link href="/events" onClick={toggleMenu}>Events</Link>
     <Link href="/contact" onClick={toggleMenu}>Contact</Link>
     <Link href="/register" onClick={toggleMenu}><button>Register</button></Link>
    </div>
    </div>
    </>
  )
}
