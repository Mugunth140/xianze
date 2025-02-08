import Link from "next/link";
import {HamMenu} from "@/components/HamMenu";
import * as motion from "motion/react-client";


const Navbar = () => {
  return (
    <nav id="navbar">
        <HamMenu />
        <motion.div className="nav-container" initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0}} transition={{duration: 1, }}>
             <div className="nav-logo">
                <Link href="/">xianze</Link>
             </div>
             <div className="nav-routes">
                <Link href="/events">events</Link>
                <Link href="/schedule">schedule</Link>
                <Link href="/contact">contact</Link>
             </div>
                <Link href="/register"  className="nav-btn-container">
                <button className="nav-btn" >
                 Register
                </button>
                </Link>
        </motion.div>
    </nav>
  )
}

export default Navbar