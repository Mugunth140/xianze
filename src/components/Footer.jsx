import Link from "next/link";
import Image from "next/image";
import "../sass/components/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Us */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <Image src="/images/kgcas_logo.png" alt="KGCAS Logo" width={180} height={90} className="footerImg"/>
          <p>Department of Software System & Computer Science PG</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/schedule">Schedule</Link></li>
            <li><Link href="/register">Register</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:xianze2025@gmail.com">xianze2025@gmail.com</a></p>
          <p>Phone: <a href="tel:+916384761234">+91 63847 61234</a></p>
          <p>Phone: <a href="tel:+918148529920">+91 8148529920</a></p>
          <p>Location: KGCAS, Coimbatore</p>
        </div>

      </div>

      {/* Credits */}
      <div className="footer-credits">
        <p>Made with ❤️ by <a href="https://mugunth.me" target="_blank" rel="noopener noreferrer">Mugunth</a></p>
      </div>
    </footer>
  );
};

export default Footer;
