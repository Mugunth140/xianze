import Link from "next/link";
import {HamMenu} from "@/components/HamMenu";


const Navbar = () => {
  return (
    <nav id="navbar">
        <HamMenu />
        <div className="nav-container">
             <div className="nav-logo">
                <Link href="/">xianze</Link>
             </div>
             <div className="nav-routes">
                <Link href="/about">about</Link>
                <Link href="/events">event</Link>
                <Link href="/contact">contact</Link>
             </div>
                <Link href="/register"  className="nav-btn-container">
                <button className="nav-btn" >
                 Register
                 <span id="shimmer"></span>
                </button>
                </Link>
        </div>
    </nav>
  )
}

export default Navbar