'use client'
import Countdown from '@/components/Countdown';
import '../sass/components/eventIntro.scss';
import Image from 'next/image';

const eventData = [
  { text: "Intense technical competitions & hackathons", img: "/gif/hackathon.gif" },
  { text: "Engaging non-tech challenges for a fresh twist", img: "/gif/nontech.gif" },
  { text: "Inspiring talks & hands-on experience", img: "/gif/talk.gif" },
  { text: "Exciting cash prizes", img: "/gif/cash.gif" },
  { text: "A chance to connect, compete, and create", img: "/gif/networking.gif" },
];

const EventIntro = () => {
  return (
    <div className="eventIntroSection">
      <div className="eventIntroContainer">
        <div className="eventIntroContent">
          <h1 className="eventIntroTitle">Find the Event that Matches Your Passion</h1>
          <h3 className="eventIntroSubTitle">What to Expect?</h3>
          <ul className="eventList">
            {eventData.map((event, index) => (
              <li key={index} className="eventItem">
                <Image src={event.img} alt={event.text} height={30} width={30} className="eventIcon" />
                <span>{event.text}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="eventIntroRegister">
          <Countdown targetDate="2025-02-14T23:59:59" />
        </div> */}
      </div>
    </div>
  );
};

export default EventIntro;
