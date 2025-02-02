import "@/sass/pages/events.scss";

const eventData = [
  {
    id: 1,
    title: "Technical Connection",
    college: "KG College of Arts and Science",
    summary: "Two-round technical quiz with PPT-based questions",
    image: "/images/tech-quiz.jpg",
    details: {
      rules: [
        "2 members per team",
        "45-minute time limit for Round 1",
        "3 questions per PPT slide"
      ],
      instructions: [
        "Top scorers advance to Round 2",
        "No external resources allowed"
      ],
      note: ["Bring college ID card"]
    }
  },
  {
    id: 2,
    title: "Paper Presentation",
    summary: "Technology-focused research presentations",
    college: "KG College of Arts and Science",
    image: "/images/paper-presentation.jpg",
    details: {
      rules: [
        "Solo or 2-member teams",
        "5-8 minute presentation",
        "Submit PPT to xianze2025@gmail.com"
      ],
      instructions: [
        "Themes include AI, Blockchain, Cybersecurity",
        "Strict time limit enforcement"
      ],
      note: ["Laptops provided for presentation"]
    }
  },
  {
    id: 3,
    title: "Technical Quiz",
    summary: "Multi-round programming and tech quiz",
    college: "KG College of Arts and Science",
    image: "/images/tech-quiz2.jpg",
    details: {
      rules: [
        "2 members per team",
        "No electronic devices allowed",
        "Tie-breaker rounds available"
      ],
      instructions: [
        "Covers programming languages and CS fundamentals",
        "Multiple choice/True-False questions"
      ],
      note: ["No calculator allowed"]
    }
  },
  {
    id: 4,
    title: "Mini Hackathon",
    summary: "3-hour rapid prototyping challenge",
    college: "KG College of Arts and Science",
    image: "/images/hackathon.jpg",
    details: {
      rules: [
        "2-4 members per team",
        "On-the-spot topic revelation",
        "AI tools allowed"
      ],
      instructions: [
        "Complete prototype within 3 hours",
        "Judging based on creativity and implementation"
      ],
      note: ["Bring your own laptop"]
    }
  },
  {
    id: 5,
    title: "Debugging Challenge",
    summary: "Multi-round code debugging competition",
    college: "KG College of Arts and Science",
    image: "/images/debugging.jpg",
    details: {
      rules: [
        "Max 2 members per team",
        "C/C++/Java/Python only",
        "No mobile phones allowed"
      ],
      instructions: [
        "Two elimination rounds",
        "Time-bound challenges"
      ],
      note: ["ID proof required"]
    }
  },
  {
    id: 6,
    title: "Break the Query",
    summary: "SQL and database challenge series",
    college: "KG College of Arts and Science",
    image: "/images/sql-challenge.jpg",
    details: {
      rules: [
        "2-4 members per team",
        "Three progressive rounds",
        "2-hour time limit"
      ],
      instructions: [
        "Real-world query scenarios",
        "Riddle-based initial round"
      ],
      note: ["Personal laptops mandatory"]
    }
  },
  {
    id: 7,
    title: "Gaming (Free Fire)",
    summary: "Multi-stage mobile gaming tournament",
    college: "KG College of Arts and Science",
    image: "/images/gaming.jpg",
    details: {
      rules: [
        "4-player squads only",
        "Battle Royal & Clash Squad modes",
        "No hacks/exploits allowed"
      ],
      instructions: [
        "Network setup responsibility",
        "Skin restrictions in Clash Squad"
      ],
      note: ["WiFi not provided"]
    }
  }
];


export default function EventsPage() {
  return (
    <div className="events-container">
      <header className="events-header">
        <h1>XIANZE'25 Events</h1>
      </header>

      <div className="events-stack">
        {eventData.map((event, index) => (
          <div 
            key={event.id}
            className="event-card"
            style={{ 
              "--sticky-offset": `${index * 40}px`,
              "--z-index": eventData.length - index
            }}
          >
            <div className="card-visual">
              <div 
                className="card-image"
                style={{ backgroundImage: `url(${event.image})` }}
              />
              <span className="card-number">0{event.id}</span>
            </div>
            
            <div className="card-content">
              <h2>{event.title}</h2>
              <p className="card-summary">{event.summary}</p>
              
              <div className="card-details">
                {Object.entries(event.details).map(([section, items]) => (
                  items.length > 0 && (
                    <div key={section} className="detail-section">
                      <h3>{section.toUpperCase()}</h3>
                      <ul>
                        {items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


