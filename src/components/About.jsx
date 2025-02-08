import SplitText from "@/components/SplitText";
import aboutImg from "../../public/images/aboutImg.svg";
import Image from "next/image";
import * as motion from "motion/react-client";

const About = () => {
  return (
    <section className="aboutSection">
      <div className="aboutContainer">
        <div className="aboutContent">
          <SplitText
            text="About Xianze 2025"
            className="aboutTitle"
            textAlign="left"
          />
          <motion.p className="aboutPara"  initial={{x: -80, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1, ease:"backOut"}}>
            Xianze is an annual technical fest that brings together
            students from colleges across the region to showcase their
            creativity, innovation, and technical expertise. Organized by the Mind bender's Association from
            Department of Software Systems and Computer Science (PG) Since 2011, Xianze
            features an exciting mix of technical and non-technical events aimed
            at encouraging participants to think critically and collaborate
            effectively. The event provides a platform for undergraduate and
            postgraduate students to present innovative ideas, compete in
            challenging events, and explore the latest trends in technology.
          </motion.p>
        </div>

        <motion.div className="aboutImg" initial={{x: -80, opacity:0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1, ease:"backOut"}}>
         <Image src={aboutImg} alt="about_image" width={450} height={650} />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
 