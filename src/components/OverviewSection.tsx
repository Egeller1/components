import React from "react";

const OverviewSection: React.FC = () => {
  return (
    <div className="overview-section">
      <h1>UX Case Study: The Printer Paradox</h1>
      <p>
        <strong>Engaging Narrative:</strong>
      </p>
      <ul>
        <li>
          The campus printer interface inadvertently sets up freshmen to fail.
        </li>
        <li>
          Key challenges: confusing wifi instructions, problematic key card
          swipes, and unclear printing steps.
        </li>
        <li>
          Lessons learned: the importance of intuitive design and clear
          instructions.
        </li>
      </ul>
      <p>
        This project examines how design flaws in a seemingly mundane interface
        can create significant hurdles for new users.
      </p>
      <div className="placeholder-image">[Hero Image Placeholder]</div>
    </div>
  );
};

export default OverviewSection;
