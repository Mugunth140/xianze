'use client'

import dynamic from "next/dynamic";
import Link from "next/link";
import SplitText from "../components/SplitText";
import "../sass/components/registerCounter.scss";

const Countdown = dynamic(() => import("../components/Countdown"), { ssr: false });

const RegisterCounter = () => {
  return (
    <section className="registerCounterSection">
      <div className="registerCounterContainer">
        <SplitText text="Limited Availability – Secure Your Spot Now!" 
        className="registerCounterTitle" 
        textAlign="center"
        />
        <p className="registerCounterSubtitle">
          Secure your spot before it's too late. Register now and be part of Xianze!
        </p>
        <div className="eventIntroRegister">
          <Countdown targetDate="2025-02-23T08:59:59" />
        </div>
        <Link href="/register" className="registerButton">Register Now</Link>
      </div>
    </section>
  );
};

export default RegisterCounter;
