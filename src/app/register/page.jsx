"use client";

import { useState } from "react";
import "../../sass/pages/register.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    branch: "",
    college: "",
    contact: "",
    event: "",
    otherCourse: "",
    otherBranch: "",
  });

  const [loading, setLoading] = useState(false);
  const [buttonMessage, setButtonMessage] = useState("Register");

  const eventsList = [
    "Technical Connection",
    "Technical Quiz",
    "Paper Presentation",
    "Debugging",
    "Mini Hackathon",
    "Break the Query",
    "Gaming",
  ];

  const courses = {
    "B.Tech": [
      "Computer Science",
      "Information Technology",
      "Electronics",
      "Mechanical",
      "Civil",
      "Aerospace",
      "Automobile",
      "Biotechnology",
      "Chemical",
      "Electrical",
      "Electronics and Communication",
      "Instrumentation",
      "Others",
    ],
    "M.Tech": [
      "Computer Science",
      "Data Science",
      "Artificial Intelligence",
      "VLSI",
      "Cyber Security",
      "Information Security",
      "Network Security",
      "Cloud Computing",
      "Data Analytics",
      "Machine Learning",
      "Robotics",
      "Others",
    ],
    "B.Sc": [
      "Mathematics",
      "Physics",
      "Computer Science",
      "Information Technology",
      "Biology",
      "Chemistry",
      "Zoology",
      "Botany",
      "Statistics",
      "Electronics",
      "Microbiology",
      "Biochemistry",
      "Others",
    ],
    "M.Sc": [
      "Mathematics",
      "Physics",
      "Computer Science",
      "Information Technology",
      "Software System",
      "Biology",
      "Chemistry",
      "Zoology",
      "Botany",
      "Statistics",
      "Electronics",
      "Microbiology",
      "Biochemistry",
      "Biotechnology",
      "Environmental Science",
      "Others",
    ],
    BCA: [
      "General",
      "Cloud Computing",
      "Data Analytics",
      "Artificial Intelligence",
      "Cyber Security",
      "Mobile Application Development",
      "Web Development",
      "Networking",
      "Database Management",
      "Others",
    ],
    MCA: [
      "General",
      "Artificial Intelligence",
      "Cyber Security",
      "Data Science",
      "Cloud Computing",
      "Mobile Application Development",
      "Web Development",
      "Networking",
      "Database Management",
      "Enterprise Resource Planning",
      "Others",
    ],
    "B.A": [
      "English",
      "Hindi",
      "History",
      "Geography",
      "Economics",
      "Political Science",
      "Psychology",
      "Sociology",
      "Philosophy",
      "Others",
    ],
    "M.A": [
      "English",
      "Hindi",
      "History",
      "Geography",
      "Economics",
      "Political Science",
      "Psychology",
      "Sociology",
      "Philosophy",
      "Anthropology",
      "Linguistics",
      "Others",
    ],
    "B.Com": [
      "General",
      "Honors",
      "Accounting",
      "Finance",
      "Marketing",
      "Human Resource",
      "International Business",
      "Banking and Insurance",
      "Computer Application",
      "Others",
    ],
    "M.Com": [
      "General",
      "Accounting",
      "Finance",
      "Marketing",
      "Human Resource",
      "International Business",
      "Computer Application",
      "Banking and Insurance",
      "Taxation",
      "Financial Management",
      "Others",
    ],
    BBA: [
      "General",
      "Human Resource",
      "Marketing",
      "Finance",
      "International Business",
      "Entrepreneurship",
      "Operations Management",
      "Computer Application",
      "Others",
    ],
    MBA: [
      "General",
      "Human Resource",
      "Marketing",
      "Finance",
      "International Business",
      "Entrepreneurship",
      "Computer Application",
      "Operations Management",
      "Supply Chain Management",
      "Information Technology",
      "Others",
    ],
    "B.Ed": [
      "General",
      "Special Education",
      "Elementary Education",
      "Secondary Education",
      "Others",
    ],
    MS: ["General Surgery", "Orthopedics", "Ophthalmology", "ENT", "Others"],
    BDS: ["General"],
    MDS: [
      "General",
      "Orthodontics",
      "Prosthodontics",
      "Periodontics",
      "Pedodontics",
      "Oral Surgery",
      "Others",
    ],
    Others: [],
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "course") {
      setFormData((prev) => ({
        ...prev,
        branch: "",
        otherCourse: e.target.value === "Others" ? "" : prev.otherCourse,
        otherBranch: "",
      }));
    }

    if (e.target.name === "branch" && e.target.value !== "Others") {
      setFormData((prev) => ({
        ...prev,
        otherBranch: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setButtonMessage("Submitting...");
  
    if (!/^\d{10,}$/.test(formData.contact)) {
      setButtonMessage("Invalid Contact Number");
      setLoading(false);
      return;
    }
  
    const submittedData = {
      ...formData,
      course: formData.course === "Others" ? formData.otherCourse : formData.course,
      branch: formData.branch === "Others" ? formData.otherBranch : formData.branch,
    };
  
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submittedData),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        setButtonMessage("Registered Successfully");
        setFormData({
          name: "",
          email: "",
          course: "",
          branch: "",
          college: "",
          contact: "",
          event: "",
          otherCourse: "",
          otherBranch: "",
        });
      } else {
        setButtonMessage(data.error); 
      }
    } catch (error) {
      setButtonMessage("Failed to submit. Try again.");
    }
  
    setLoading(false);
  };
  

  return (
    <section className="registerSection">
      <div className="registerContainer">
        <h2>Event Registration</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select Course</option>
            {Object.keys(courses).map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>

          {formData.course === "Others" && (
            <input
              type="text"
              name="otherCourse"
              placeholder="Enter Course"
              value={formData.otherCourse}
              onChange={handleChange}
              required
            />
          )}

          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          >
            <option value="">Select Branch</option>
            {formData.course &&
              courses[formData.course]?.map((branch, index) => (
                <option key={index} value={branch}>
                  {branch}
                </option>
              ))}
          </select>

          {formData.branch === "Others" && (
            <input
              type="text"
              name="otherBranch"
              placeholder="Enter Branch"
              value={formData.otherBranch}
              onChange={handleChange}
              required
            />
          )}

          <input
            type="text"
            name="college"
            placeholder="College Name"
            value={formData.college}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
          />

          <select
            name="event"
            value={formData.event}
            onChange={handleChange}
            required
          >
            <option value="">Select an Event</option>
            {eventsList.map((event, index) => (
              <option key={index} value={event}>
                {event}
              </option>
            ))}
          </select>

          <button type="submit" disabled={loading} className="registerButton">
            {buttonMessage}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
