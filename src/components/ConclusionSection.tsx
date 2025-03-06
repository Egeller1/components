import React from "react";
import { FaLightbulb } from "react-icons/fa";

const ConclusionSection: React.FC = () => {
  return (
    <div className="container">
      <FaLightbulb style={{ fontSize: "2rem", marginBottom: "1rem" }} />
      <h2>Conclusions & Next Steps</h2>
      <p
        style={{
          fontSize: "2.3rem",
          marginBottom: "3rem",
          maxWidth: "10000px",
        }}
      >
        This case study demonstrates how even a seemingly simple interface—like
        a campus printer—can derail users if core interactions are poorly
        communicated. By mapping out the steps, frustrations, and emotional
        touchpoints, we’ve uncovered clear opportunities for improvement:
      </p>
      <ul
        style={{
          textAlign: "left",
          margin: "1rem auto",
          marginBottom: "5rem",
          maxWidth: "6000px",
        }}
      >
        <li style={{ fontSize: "2rem", marginBottom: "2rem" }}>
          <strong>Wi-Fi Guidance:</strong> Prominent instructions for network
          setup and phone printing.
        </li>
        <li style={{ fontSize: "2rem", marginBottom: "2rem" }}>
          <strong>Card Swipe Feedback:</strong> Clear visual cues indicating
          proper swiping.
        </li>
        <li style={{ fontSize: "2rem", marginBottom: "2rem" }}>
          <strong>Real-Time Queue Updates:</strong> A progress bar or
          “uploading” indicator to reduce confusion.
        </li>
        <li style={{ fontSize: "2rem", marginBottom: "2rem" }}>
          <strong>Cost Transparency:</strong> Showing balance and per-page cost
          before sending a document to the printer, as well as on the screen.
        </li>
      </ul>
      <p style={{ fontSize: "2rem", marginBottom: "15rem" }}>
        Addressing these issues would not only lower user frustration but also
        turn the Brown campus “printer panic” into a straightforward task.
      </p>
      <p>
        <em>Thank you for exploring this UX case study!</em>
      </p>
      <p>
        <em>Case Study Done By Efram Geller</em>
      </p>
    </div>
  );
};

export default ConclusionSection;
