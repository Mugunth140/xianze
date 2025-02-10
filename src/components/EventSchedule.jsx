import "../sass/components/eventSchedule.scss";
import * as motion from "motion/react-client";

const Schedule = () => {
  const schedule = [
    { title: "Spot Registration", time: "8:30 AM - 9:00 AM" },
    { title: "Inauguration", time: "9:00 AM - 10:00 AM" },
    { title: "Event Timing", time: "10:00 AM - 1:00 PM" },
    { title: "Lunch Timing", time: "1:00 PM - 2:00 PM" },
    { title: "Ceremony", time: "2:00 PM - 3:30 PM" },
  ];

  return (
    <motion.div className="schedule-container" initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1}}>
      <h2 className="heading">Event Schedule</h2>
      <ul className="schedule-list">
        {schedule.map((item, index) => (
          <li key={index} className="schedule-item">
            <span className="time">{item.time}</span>
            <span className="title">{item.title}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Schedule;
