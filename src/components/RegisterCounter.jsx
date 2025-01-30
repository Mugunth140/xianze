import Countdown from "@/components/Countdown";
import "../sass/components/registerCounter.scss";
import Link from "next/link";

const RegisterCounter = () => {
  return (
    <section className="registerCounterSection">
      <div className="registerCounterContainer">
        <h2 className="registerCounterTitle">Limited Slots – The Countdown is On!</h2>
        <p className="registerCounterSubtitle">
          Secure your spot before it's too late. Register now and be part of Xianze!
        </p>
        <div className="eventIntroRegister">
          <Countdown targetDate="2025-02-14T23:59:59" />
        </div>
        <Link href="/register" className="registerButton">Register Now</Link>
      </div>
    </section>
  );
};

export default RegisterCounter;
