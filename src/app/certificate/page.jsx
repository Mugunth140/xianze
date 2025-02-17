"use client";

import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "@/sass/pages/certificate.scss";

export default function CertificateGenerator() {
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [certificateGenerated, setCertificateGenerated] = useState(false);

  const fetchUserData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/getUser?email=${email}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "User not found");
      setUserData(data);
    } catch (err) {
      setError(err.message);
      setUserData(null);
    }
    setLoading(false);
  };

  const generatePDF = () => {
    if (!userData) return;

    const certificate = document.getElementById("certificate");
    html2canvas(certificate, {
      scale: 3, // Increase the scale to ensure high quality
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "landscape" });
      pdf.addImage(imgData, "PNG", 0, 0, 297, 210);
      pdf.save(`${userData.name}_Xianze.pdf`);
      setCertificateGenerated(true);
    });
  };

  return (
    <div className="container">
      <div className="form-container">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <button onClick={fetchUserData} className="btn btn-primary">
          {loading ? "Loading..." : "Get Certificate"}
        </button>
        {error && <p className="error-message">{error}</p>}
        {userData && (
          <div className="certificate-wrapper" id="certificate">
            <div className="certificate">
              <img
                src="/images/certificate.png" // Ensure this is a high-res image
                alt="Certificate Template"
                className="template-image"
              />
              <div className="certificate-content">

                <p>Name: {userData.name}</p>
                <p>Event: {userData.event}</p>
              </div>
            </div>
          </div>
        )}
        {userData && !certificateGenerated && (
          <button onClick={generatePDF} className="btn btn-success">
            Download PDF
          </button>
        )}
      </div>
    </div>
  );
}
