import React from "react";
import "./EmailSection.css";

const EmailSection = () => {
  return (
    <div className="email_section">
      <input type="text" placeholder="Enter your email" />

      <button>Subscribe to our newsletter</button>
    </div>
  );
};

export default EmailSection;
