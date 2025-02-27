"use client";

import { useState } from "react";
import "@/sass/pages/certificate.scss";

export default function CertificateGenerator() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAndDownloadCertificate = async () => {
    // Extract username from email (part before @)
    const username = email.split('@')[0].trim();
    
    // Basic validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/getCertificate?email=${encodeURIComponent(email)}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch certificate");
      }

      if (!data.certificateUrl) {
        throw new Error("Certificate URL not provided");
      }

      // Download with username-based naming
      const link = document.createElement("a");
      link.href = data.certificateUrl;
      link.download = `xianze_participation_certificate_${username}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (err) {
      setError(err.message || "An error occurred while fetching the certificate");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
          className="input-field"
          disabled={loading}
        />
        <button
          onClick={fetchAndDownloadCertificate}
          className="btn btn-primary"
          disabled={loading || !email}
        >
          {loading ? "Fetching..." : "Get Certificate"}
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}