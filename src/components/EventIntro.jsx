import '../sass/components/eventIntro.scss';
import Image from 'next/image';
import SplitText from '../components/SplitText';

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
          <SplitText text="Find the Event that Matches Your Passion"
          className="eventIntroTitle" 
          textAlign="center"
          />

          <h3 className="eventIntroSubTitle">What to Expect?</h3>
          <ul className="eventList">
            {eventData.map((event, index) => (
              <li key={index} className="eventItem">
                <Image src={event.img} alt={event.text} height={30} width={30} className="eventIcon" unoptimized/>
                <span>{event.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventIntro;
