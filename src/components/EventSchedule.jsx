import "../sass/components/eventSchedule.scss";

const Schedule = () => {
  const schedule = [
    { title: "Spot Registration", time: "8:30 AM - 9:00 AM" },
    { title: "Inauguration", time: "9:00 AM - 10:00 AM" },
    { title: "Event Timing", time: "10:00 AM - 1:00 PM" },
    { title: "Lunch Timing", time: "1:00 PM - 2:00 PM" },
    { title: "Ceremony", time: "2:00 PM - 3:30 PM" },
  ];

  return (
    <div className="schedule-container">
      <h2 className="heading">Event Schedule</h2>
      <ul className="schedule-list">
        {schedule.map((item, index) => (
          <li key={index} className="schedule-item">
            <span className="time">{item.time}</span>
            <span className="title">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
