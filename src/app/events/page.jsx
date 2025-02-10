import SplitText from "@/components/SplitText";
import * as motion from "motion/react-client";
import "@/sass/pages/events.scss";

const eventData = [
  {
    id: 1,
    title: "Technical Connection",
    summary: "Two-round visual based questions",
    image: "/images/event-connection.svg",
    details: {
      rules: [
        "Teams can consist of 2 members",
        "Cheating or rule violations lead to disqualification",
        "Judges decisions are final",
      ],
      instructions: [
        "45-minute time limit for Round 1",
        "Top scorers advance to Round 2",
        "3 questions per PPT slide",
      ],
      note: ["No external resources allowed"],
    },
  },
  {
    id: 2,
    title: "Paper Presentation",
    summary: "Technology-focused research presentations",
    image: "/images/event-presentation.svg",
    details: {
      rules: [
        "Teams consist of maximum 2 members",
        "Strict time limit enforcement",
      ],
      instructions: [
        "PPT Should consists of minimum 8 slides",
        "5-8 minute time limit per presentation",
      ],
      note: [
        "Themes include AI,Ml,Data Science,BlockChain,Network Security,IOT,NLP",
      ],
    },
  },
  {
    id: 3,
    title: "Technical Quiz",
    summary: "Multi-round technical quiz",
    image: "/images/event-quiz.svg",
    details: {
      rules: [
        "Team consists of 2 members",
        "No smart devices allowed",
        "Tie-breaker rounds available",
      ],
      instructions: [
        "Quiz consists of 2 rounds",
        "Questions based on MCQ, True/False, and Fill-in-the-blanks",
      ],
      note: ["Topics: Technical, Programming, or Scientific fields"],
    },
  },
  {
    id: 4,
    title: "Mini Hackathon",
    summary: "3 hour rapid prototyping challenge",

    image: "/images/event-hackathon.svg",
    details: {
      rules: [
        "Team can consists of 2 members",
        "Prototypes must be completed within 3hr time limit",
        "AI tools allowed",
      ],
      instructions: [
        "Judging based on creativity and implementation",
        "Choose any problem statement related to SDG",
      ],
      note: ["Participants should bring their own laptop"],
    },
  },
  {
    id: 5,
    title: "Debugging",
    summary: "Multi-round code debugging competition",

    image: "/images/event-debugging.svg",
    details: {
      rules: [
        "Team consists of 2 members",
        "No smart devices allowed",
        "C/C++/Java/Python only",
      ],
      instructions: ["Two elimination rounds", "Time-bound challenges"],
      note: ["Systems will be provided"],
    },
  },
  {
    id: 6,
    title: "Break the Query",
    summary: "SQL query challenge series",

    image: "/images/event-query.svg",
    details: {
      rules: [
        "Team consists of 2 members",
        "Three progressive rounds",
        "2-hour time limit",
      ],
      instructions: ["Riddle-based initial round", "Fun filled challenges"],
      note: ["Participants should bring their own laptop"],
    },
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
        "Misbehavior or disputes result in disqualification",
      ],
      instructions: [
        "Battle Royal & Clash Squad modes",
        "Skin restrictions in Clash Squad",
      ],
      note: ["WiFi will not be provided"],
    },
  },
];

export default function EventsPage() {
  const containerTransition = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.5,
      }
    }
  }

  const itemTransition = {
    hidden: { opacity: 0, x: -300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 1
      }
    }
  }

  return (
    <div className="events-container">
      <header className="events-header">
        <SplitText
          text="XIANZE'25 EVENTS"
          className="events-title"
          textAlign="left"
        />
      </header>

      <motion.div
        className="events-stack"
        variants={containerTransition}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} // Ensure this triggers on every scroll
      >
        {eventData.map((event, index) => (
          <motion.div
            className="eventStack-container"
            key={event.id}
            variants={itemTransition}
            whileInView="visible" // Ensure each item animates individually when it enters the viewport
            initial="hidden"
            viewport={{ once: false }} // Ensure this triggers on every scroll
          >
            <div className="event-card">
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
                  {Object.entries(event.details).map(
                    ([section, items]) =>
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
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

