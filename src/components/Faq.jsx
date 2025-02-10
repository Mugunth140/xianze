'use client'
import { useState } from "react";
import "../sass/components/faq.scss";
import {motion} from "motion/react";

const faqs = [
  {
    question: "What is Xianze?",
    answer: "Xianze is an inter-college technical event where students showcase their skills in various competitions and workshops.",
  },
  {
    question: "How can I register?",
    answer: "You can register online through Google forms or via official website.",
  },
  {
    question: "Is there a cash prize for winners?",
    answer: "Yes! Winners of competitions can win cash prizes of up to ₹20,000 along with certificates and other exciting rewards.",
  },
  {
    question: "Is food provided?",
    answer: "Yes, lunch will be provided for participants from other colleges.",
  },
  {
    question: "Who can participate?",
    answer: "Anyone with an interest in technology and innovation can participate.",
  },
  {
    question: "Will I get certificate?",
    answer: "Yes! All participants will receive certificate, and winners will get special recognition and prizes.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div className="faq-container" whileInView={{x: 0, opacity: 1}} initial={{x: 100, opacity: 0}} transition={{duration: 1}}>
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="icon">{openIndex === index ? "−" : "+"}</span>
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQ;
