import '../sass/components/eventIntro.scss';
import Image from 'next/image';
import SplitText from '../components/SplitText';
import * as motion from "motion/react-client";

const eventData = [
  { text: "Intense technical competitions & hackathons", img: "/gif/hackathon.gif" },
  { text: "Engaging non-tech challenges for a fresh twist", img: "/gif/nontech.gif" },
  { text: "Inspiring talks & hands-on experience", img: "/gif/talk.gif" },
  { text: "Exciting cash prizes", img: "/gif/cash.gif" },
  { text: "A chance to connect, compete, and create", img: "/gif/networking.gif" },
];

const containerTransition = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.65, 0, 0.35, 1],
      staggerChildren: 0.3,
    }
  }
};

const itemTransition = {
  hidden: { opacity: 0, x: -200 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      ease: [0.65, 0, 0.35, 1],
      duration: 0.8
    }
  }
};

const EventIntro = () => {
  return (
    <div className="eventIntroSection">
      <div className="eventIntroContainer">
        <div className="eventIntroContent">
          <SplitText 
            text="Find the Event that Matches Your Passion"
            className="eventIntroTitle"
            textAlign="center"
          />

          <motion.h3
            className="eventIntroSubTitle"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            What to Expect?
          </motion.h3>

          <motion.ul
            className="eventList"
            variants={containerTransition}
            initial="hidden"
            whileInView="visible"
          >
            {eventData.map((event, index) => (
              <motion.li
                key={index}
                className="eventItem"
                variants={itemTransition}
              >
                <Image
                  src={event.img}
                  alt={event.text}
                  height={30}
                  width={30}
                  className="eventIcon"
                  unoptimized
                />
                <span>{event.text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default EventIntro;
