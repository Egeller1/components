import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const ResearchSection: React.FC = () => {
  return (
    <div className="container">
      <FaQuestionCircle style={{ fontSize: "2rem", marginBottom: "1rem" }} />
      <h2>User Research Approach</h2>
      <p style={{ fontSize: "2.3rem", marginBottom: "1rem" }}>
        To better understand real-world printer challenges, we sought out Brown
        University students and asked them questions while they were actively
        using the printer.
      </p>
      <p style={{ fontSize: "2.3rem", marginBottom: "1rem" }}>
        Our primary goal was to capture genuine reactions and frustrations in
        context, rather than relying on hypothetical scenarios.
      </p>
      <p style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        <strong>Key Interview Questions:</strong>
      </p>
      <ul
        style={{
          textAlign: "left",
          margin: "0 auto",
          maxWidth: "900px",
          marginBottom: "1rem",
        }}
      >
        <li style={{ fontSize: "2rem" }}>
          Can you describe your experience the first time you used the school
          printer system?
        </li>
        <li style={{ fontSize: "2rem" }}>
          For a first-time user, how easy or difficult was it to understand how
          to use the printer system?
        </li>
        <li style={{ fontSize: "2rem" }}>
          Could you walk me through the steps you take from logging in on the
          school Wi-Fi to swiping your card?
        </li>
        <li style={{ fontSize: "2rem" }}>
          How clear were the instructions you received (or found) when
          connecting to the school Wi-Fi?
        </li>
        <li style={{ fontSize: "2rem" }}>
          When multiple print jobs show up, how do you know which one to select
          or cancel?
        </li>
        <li style={{ fontSize: "2rem" }}>
          What challenges or frustrations have you encountered while using the
          printer interface?
        </li>
        <li style={{ fontSize: "2rem" }}>
          How do you feel when you use this printer system? Why?
        </li>
        <li style={{ fontSize: "2rem" }}>
          If you could change one thing about the printer interface, what would
          it be and why?
        </li>
      </ul>
      <p>
        With these questions in hand, we proceeded to observe and record the
        participants’ interactions and experiences.
      </p>
      <p>
        <em>Scroll down to see what we discovered.</em>
      </p>
    </div>
  );
};

export default ResearchSection;
