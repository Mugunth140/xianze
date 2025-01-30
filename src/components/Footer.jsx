import Link from "next/link";
import "../sass/components/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <h2 className="footer-logo">Xianze</h2>
          <p className="footer-tagline">Where Passion Meets Innovation.</p>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Xianze. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
