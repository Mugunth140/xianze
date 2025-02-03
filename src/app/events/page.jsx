import SplitText from "@/components/SplitText";
import "@/sass/pages/events.scss";

const eventData = [
  {
    id: 1,
    title: "Technical Connection",
    summary: "Two-round visual based questions",
    image: "/images/event-connection.svg",
    details: {
      rules: [
        "Teams should consist of 2 members",
        "Cheating or rule violations lead to disqualification",
        "Judges decisions are final"
      ],
      instructions: [
        "45-minute time limit for Round 1",
        "Top scorers advance to Round 2",
        "3 questions per PPT slide",
      ],
      note: ["No external resources allowed"]
    }
  },
  {
    id: 2,
    title: "Paper Presentation",
    summary: "Technology-focused research presentations",
    image: "/images/event-presentation.svg",
    details: {
      rules: [
        "Teams consist of maximum 2 members",
        "Strict time limit enforcement"
      ],
      instructions: [
        "PPT Should consists of minimum 8 slides",
        "5-8 minute time limit per presentation",
      ],
      note: ["Themes include AI,Ml,Data Science,BlockChain,Network Security,IOT,NLP"]
    }
  },
  {
    id: 3,
    title: "Technical Quiz",
    summary: "Multi-round technical quiz",
    image: "/images/event-quiz.svg",
    details: {
      rules: [
        "2 members per team",
        "No smart devices allowed",
        "Tie-breaker rounds available"
      ],
      instructions: [
        "Quiz consists of 2 rounds",
        "Questions based on MCQ, True/False, and Fill-in-the-blanks",
      ],
      note: ["Topics: Technical, Programming, or Scientific fields"]
    }
  },
  {
    id: 4,
    title: "Mini Hackathon",
    summary: "2.5 hour rapid prototyping challenge",
   
    image: "/images/event-hackathon.svg",
    details: {
      rules: [
        "Team can consists of 2-4 members",
        "On-the-spot topic revelation",
        "AI tools allowed"
      ],
      instructions: [
        "Complete the prototype within the deadline",
        "Judging based on creativity and implementation"
      ],
      note: ["Participants should bring their own laptop"]
    }
  },
  {
    id: 5,
    title: "Debugging",
    summary: "Multi-round code debugging competition",
   
    image: "/images/event-debugging.svg",
    details: {
      rules: [
        "Team consists of maximum 2 members",
        "No smart devices allowed",
        "C/C++/Java/Python only",
      ],
      instructions: [
        "Two elimination rounds",
        "Time-bound challenges"
      ],
      note: ["Systems will be provided"]
    }
  },
  {
    id: 6,
    title: "Break the Query",
    summary: "SQL query challenge series",
    
    image: "/images/event-query.svg",
    details: {
      rules: [
        "Team consists of 2-4 members",
        "Three progressive rounds",
        "2-hour time limit"
      ],
      instructions: [
        "Riddle-based initial round",
        "Fun filled challenges",
      ],
      note: ["Participants should bring their own laptop"]
    }
  },
  {
    id: 7,
    title: "Gaming (Free Fire)",
    summary: "Multi-stage mobile gaming tournament",
  
    image: "/images/event-gaming.svg",
    details: {
      rules: [
        "4 player squad from same college",
        "Cheating, use of hack, exploiting gliches is strictly prohibited",
        "Misbehavior or disputes result in disqualification"
      ],
      instructions: [
        "Battle Royal & Clash Squad modes",
        "Skin restrictions in Clash Squad"
      ],
      note: ["WiFi will not be provided"]
    }
  }
];


export default function EventsPage() {
  return (
    <div className="events-container">
     <header className="events-header">
     <SplitText
            text="XIANZE'25 EVENTS"
            className="events-title"
            textAlign="left"
          />
      </header>

      <div className="events-stack">
        {eventData.map((event, index) => (
          <div className="eventStack-container" key={event.id}>
          <div 
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
          </div>
        ))}
      </div>
    </div>
  );
}


