import Waves from "@/components/HeroBg";
import DecryptedText from "@/components/DecryptedText";
import { FaArrowDown } from "react-icons/fa6";
import Link from "next/link";
import * as motion from "motion/react-client";
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
      characters="!@#$%^&*()_+}{|:';?></>@#$%,"
      animateOn="view"
      revealDirection="start"
      className="revealed"
      parentClassName="all-letters"
      encryptedClassName="encrypted"
      />
      </div>
      
      <motion.div className="heroSubtitle" animate={{y: 0, opacity: 1}} initial={{y: 40, opacity: 0}} transition={{duration: 1}}>
    <p>Join the largest gathering of young tech enthusiasts and experience the thrill of competition, learning, as well as innovation, The place where ideas come alive and futures are shaped.</p>
    </motion.div>
      <motion.span initial={{y: 40, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1}}><Link href="https://forms.gle/mgmGwYPf7TUtApxKA" className="heroBtn">Register now</Link></motion.span>
      <motion.div className="heroScroller" animate={{y: 0, opacity: 1}} initial={{y: 30, opacity: 0}} transition={{duration: 1}}>
    <FaArrowDown />
    <p>scroll down</p>
    </motion.div>
    </div>
  </main>
  )
}

export default Home