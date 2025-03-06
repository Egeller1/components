import React from "react";
import { FaEye } from "react-icons/fa";

const ObservationsSection: React.FC = () => {
  return (
    <div className="container">
      <FaEye style={{ fontSize: "2rem" }} />
      <h2 style={{ marginBottom: "3rem" }}>Observations & Interviews</h2>
      <p style={{ fontSize: "2rem", marginBottom: "3rem" }}>
        Through our on-site observations and interviews with three Brown
        University students (including freshmen and upperclassmen), several
        themes emerged:
      </p>

      <ul
        style={{ textAlign: "left", margin: "1rem auto", maxWidth: "1000px" }}
      >
        <li style={{ fontSize: "2rem" }}>
          <strong>Unclear Document Sending Process:</strong>
          <em>
            {" "}
            “I had no idea how to send my document to the printer; I had to
            Google it.”{" "}
          </em>
        </li>
        <li style={{ fontSize: "2rem" }}>
          <strong>Wrong Card Swipe Orientation: </strong>
          Students often swiped incorrectly and had to retry.
        </li>
        <li style={{ fontSize: "2rem" }}>
          <strong>Upload Delay: </strong>
          People tried to print immediately but didn’t realize there’s a
          1-minute upload time. No progress indicator caused confusion.
        </li>
        <li style={{ fontSize: "2rem" }}>
          <strong>Cost & Balance Ambiguity: </strong>
          No easy way to see how much money remains or how much each print will
          cost
          <em> before</em> committing to print.
        </li>
        <li style={{ fontSize: "2rem" }}>
          <strong>Multiple Doc Confusion: </strong>
          With multiple documents printed, it’s tough to see where one doc ends
          and the next begins on the paper stack.
        </li>
        <li style={{ fontSize: "2rem" }}>
          <strong>Phone Printing Hassles: </strong>
          “Printing from my phone was so frustrating; I didn’t realize I had to
          be on Brown Wi-Fi first.”
        </li>
        <li style={{ fontSize: "2rem" }}>
          <strong>Physical Printer Instructions Lacking: </strong>A small QR
          code is available, but “it’s low to the ground and easy to miss.”
        </li>
      </ul>

      <p style={{ fontSize: "1.5rem", marginBottom: "4rem" }}>
        Many users reported feeling <strong>frustrated</strong> and{" "}
        <strong>anxious</strong>, especially under time pressure. Despite an
        otherwise “straightforward” interface, the learning curve for new users
        was steep.
      </p>
      <p>
        <em>
          Next, we’ll introduce two personas that capture these varied user
          experiences.
        </em>
      </p>
    </div>
  );
};

export default ObservationsSection;
