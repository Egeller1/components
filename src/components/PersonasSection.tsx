import React from "react";
import { FaUserCircle } from "react-icons/fa";

const PersonasSection: React.FC = () => {
  return (
    <div className="container">
      <FaUserCircle style={{ fontSize: "2rem", marginBottom: "1rem" }} />
      <h2>Personas</h2>
      <p style={{ fontSize: "1rem" }}>
        The empathy maps below capture the experiences and frustrations of two
        key user groups: Tania, the tech nervous freshman, and Lucas, the power
        user.
      </p>
      <div
        className="persona-maps"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div className="persona-map">
          <img
            src={`${import.meta.env.BASE_URL}images/tania_map.png`}
            alt="Tania's Empathy Map"
            style={{ width: "150%", height: "auto", maxWidth: "620px" }}
          />
          <p style={{ marginBottom: "5px" }}>
            <strong> Tania's Empathy Map</strong>
          </p>
          <p style={{ fontSize: "1.5rem", maxWidth: "4000px" }}>
            Tania is a first-semester freshman who has never printed on a campus
            printer before.
          </p>
          <p style={{ fontSize: "1.5rem" }}>
            She’s juggling classes, new routines, and campus life, so she rarely
            has time to learn new technology in advance.
          </p>
          <p style={{ fontSize: "1.5rem" }}>
            Her biggest hurdle is the confusing, multi-step process to get
            documents onto the printer (especially from her phone), and she
            often feels pressured when there are people waiting behind her.
          </p>
          <p style={{ fontSize: "1.5rem" }}>
            Many of my interviewees were infrequent users who struggled with the
            initial setup, especially figuring out which network to use, how to
            send documents, and the correct way to swipe an ID card.
          </p>
          <p style={{ fontSize: "1.5rem", marginBottom: "0" }}>
            Tania’s persona captures those fresh, anxious perspectives and the
            frustration that comes from the printer’s learning curve.
          </p>
        </div>
        <div className="persona-map">
          <img
            src={`${import.meta.env.BASE_URL}images/lucas_map.png`}
            alt="Lucas's Empathy Map"
            style={{ width: "150%", height: "auto", maxWidth: "630px" }}
          />
          <p style={{ marginBottom: "10px" }}>
            <strong>Lucas's Empathy Map </strong>
          </p>
          <p style={{ fontSize: "1.5rem" }}>
            Lucas is a junior who prints frequently for various projects and
            assignments.
          </p>
          <p style={{ fontSize: "1.5rem" }}>
            He’s familiar with logging in and swiping his card, so the basics
            aren’t an issue.
          </p>
          <p style={{ fontSize: "1.5rem" }}>
            However, he finds it clumsy to manage multiple print jobs in one
            queue and has encountered unexpected wait times or confusing file
            names.
          </p>
          <p style={{ fontSize: "1.5rem" }}>
            He prints often and struggles to keep track of how much print money
            he has left.
          </p>
          <p style={{ fontSize: "1.5rem" }}>
            Some of your interviewees mentioned that once they got the hang of
            sending documents, they still found the interface clunky for
            multiple print jobs.
          </p>
          <p style={{ fontSize: "1.5rem" }}>
            Frequent users complained about not knowing whether a print job was
            ready to go or how to track print costs and balances.
          </p>
          <p style={{ fontSize: "1.5rem" }}>
            Lucas embodies the more advanced “I know the basics, but I’m still
            annoyed by inefficiencies” perspective.
          </p>
        </div>
      </div>
      <p style={{ marginTop: "1rem" }}>
        <em>
          These maps illustrate key insights derived from our research into user
          frustrations with the campus printer interface. Let's take a closer
          look at Tania's printing process
        </em>
      </p>
    </div>
  );
};

export default PersonasSection;
