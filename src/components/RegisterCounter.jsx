'use client'

import dynamic from "next/dynamic";
import Link from "next/link";
import SplitText from "../components/SplitText";
import "../sass/components/registerCounter.scss";
import * as motion from "motion/react-client";

const Countdown = dynamic(() => import("../components/Countdown"), { ssr: false });

const RegisterCounter = () => {
  return (
    <motion.section className="registerCounterSection" initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1}}>
      <div className="registerCounterContainer">
        <SplitText text="Limited Availability – Secure Your Spot Now!" 
        className="registerCounterTitle" 
        textAlign="center"
        />
        <motion.p className="registerCounterSubtitle" >
          Secure your spot before it's too late. Register now and be part of Xianze!
        </motion.p>
        <div className="eventIntroRegister">
          <Countdown targetDate="2025-02-23T08:59:59" />
        </div>
        <Link href="/register" className="registerButton">Register Now</Link>
      </div>
    </motion.section>
  );
};

export default RegisterCounter;
