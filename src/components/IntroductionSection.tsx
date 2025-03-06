import React from "react";
import { FaPrint } from "react-icons/fa";

const IntroductionSection: React.FC = () => {
  return (
    <div className="container">
      <FaPrint style={{ fontSize: "2rem", marginBottom: "1rem" }} />
      <h1 style={{ marginBottom: "2rem" }}>
        From Frustration to Insight: The Campus Printer Experience
      </h1>

      <div>
        <img
          src={`${import.meta.env.BASE_URL}images/brown_logo.png`}
          alt="Brown Logo"
          style={{
            width: "15%",
            height: "10%",
            maxWidth: "400px",
            marginLeft: "550px",
            marginBottom: "75px",
          }}
        />
      </div>
      <p style={{ fontSize: "2rem", marginBottom: "5rem" }}>
        Imagine you're a brand-new student rushing to print an assignment
        minutes before class.
      </p>
      <p style={{ fontSize: "2rem", marginBottom: "5rem" }}>
        You reach the campus printer only to be met with unclear Wi-Fi steps,
        confusing card swipes, and zero guidance on how to send your document
        from phone to printer.
      </p>
      <p style={{ fontSize: "2rem", marginBottom: "5rem" }}>
        This portfolio piece explores how a seemingly trivial interface, which
        is used often, can become a major obstacle for first-time
        users—especially freshmen.
      </p>
      <p style={{ fontSize: "2rem", marginBottom: "10rem" }}>
        We’ll walk through a sketch of the system, our research methods, real
        observations, and a final set of takeaways that highlight the importance
        of user-centric design.
      </p>
      <p>
        <em>
          Scroll down to see a quick sketch of the actual printer interface!
        </em>
      </p>
    </div>
  );
};

export default IntroductionSection;
