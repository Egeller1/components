import React from "react";
import { FaPencilAlt } from "react-icons/fa";

const SketchSection: React.FC = () => {
  return (
    <div className="container">
      <FaPencilAlt style={{ fontSize: "2rem" }} />
      <h2 style={{ marginBottom: "1px" }}>Printer Interface Sketch</h2>
      <p style={{ marginLeft: "370px", marginBottom: "1px" }}>
        Below is a sketch of the printer interface that users work with every
        day
      </p>
      <div className="sketch-image-wrapper">
        <img
          src={`${import.meta.env.BASE_URL}images/sketch.png`}
          alt="Sketch of Printer Interface"
          style={{ marginBottom: "1px" }}
        />
      </div>
      <p style={{ fontSize: "2rem", marginBottom: "rem" }}>
        <strong>Interface Sketch:</strong>
        <li style={{ fontSize: "2rem" }}>
          This sketch represents the school printer interface designed to manage
          secure printing.
        </li>
        <li style={{ fontSize: "2rem" }}>
          Users first connect via school Wi-Fi, then authenticate by swiping
          their card at the designated slot.
        </li>
        <li style={{ fontSize: "2rem" }}>
          Navigation buttons allow users to confirm or cancel actions.
        </li>
        <li style={{ fontSize: "2rem" }}>
          The interface itself is user friendly, but connecting to the printer
          can be difficult
        </li>
      </p>
      <p>
        Next, we’ll look at how we conducted user research to validate these
        pain points.
      </p>
    </div>
  );
};

export default SketchSection;
