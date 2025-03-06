import React from "react";
import { FaFilm } from "react-icons/fa";

interface Frame {
  caption: string;
}

const StoryboardSection: React.FC = () => {
  const frames: Frame[] = [
    {
      caption:
        "1. Tania has class readings to print out and decides to use the school printer for the first time",
    },
    {
      caption:
        "2. Swipes ID to printer, trying to see how to print. But there are no instructions on the printer screen.",
    },
    { caption: "3. Confusion about the online printing instructions" },
    {
      caption: "4. Asking upperclassman for help understanding how to print",
    },
    { caption: "5. Finally logs into the correct Brown network, tries again." },
    { caption: "6. Tania finally prints the pdf to myprinter" },
    {
      caption:
        "7. Tries swiping her ID multiple times, often in the wrong orientation.",
    },
    { caption: "8. Wonders if she has enough print credit left." },
    {
      caption: "9. Navigating this printer interface to print her readings",
    },
    { caption: "10. Relief! Paper finally prints, just in time for class." },
  ];

  return (
    <div className="container">
      <FaFilm style={{ fontSize: "2rem", marginBottom: "1rem" }} />
      <h2>Storyboard: Tania’s Printing Journey</h2>
      <p>
        This 10-frame storyboard captures Tania’s stressful path from arrival at
        the printer to finally collecting her document. Each frame highlights a
        key step—and potential frustration—in the process.
      </p>
      <div className="storyboard-frames">
        {frames.map((frame, index) => (
          <div key={index} className="storyboard-frame">
            <img
              src={`${import.meta.env.BASE_URL}images/storyboard${
                index + 1
              }.png`}
              alt={`Storyboard ${index + 1}`}
              style={{ width: "100%", height: "auto" }}
            />
            <p className="frame-caption">{frame.caption}</p>
          </div>
        ))}
      </div>
      <p style={{ marginTop: "3rem" }}>
        <em>Scroll down for final conclusions and next steps.</em>
      </p>
    </div>
  );
};

export default StoryboardSection;
