import Waves from "@/components/HeroBg";
import DecryptedText from "@/components/DecryptedText";
import { FaArrowDown } from "react-icons/fa6";
import Link from "next/link";
import '@/sass/pages/home.scss';

const Home = () => {
  return (
    <main data-scroll-section>
    <div className="heroBg">
      <Waves
        lineColor="lightblue"
        backgroundColor="rgba(255, 255, 255, 0.2)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={100}
        xGap={12}
        yGap={36}
      />
    </div>

    <div className="heroContainer">
      <div className="heroTitle">
      <DecryptedText
      text="XIANZE` 25"
      speed={60}
      sequential={true}
      maxIterations={200}
      characters="!@#$%^&*()_+}{|:';?></div>.,"
      animateOn="view"
      revealDirection="start"
      className="revealed"
      parentClassName="all-letters"
      encryptedClassName="encrypted"
      />
      </div>
      
      <div className="heroSubtitle">
        <p>Join the largest gathering of young tech enthusiasts and experience the thrill of competition, learning, as well as innovation, The place where ideas come alive and futures are shaped.</p>
      </div>
      <Link href="/register" className="heroBtn">Register now</Link>

      <div className="heroScroller">
        <FaArrowDown />
        <p>scroll down</p>
      </div>
    </div>
  </main>
  )
}

export default Home