import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import ScrollIndicator from "./components/ScrollIndicator";

import IntroductionSection from "./components/IntroductionSection";
import SketchSection from "./components/SketchSection";
import ResearchSection from "./components/ResearchSection";
import ObservationsSection from "./components/ObservationsSection";
import PersonasSection from "./components/PersonasSection";
import StoryboardSection from "./components/StoryboardSection";
import ConclusionSection from "./components/ConclusionSection";

import { motion } from "framer-motion";

interface Slide {
  id: string;
  label: string;
  Component: React.FC;
}

const App: React.FC = () => {
  const slides: Slide[] = [
    {
      id: "introduction",
      label: "Introduction",
      Component: IntroductionSection,
    },
    { id: "sketch", label: "Sketch", Component: SketchSection },
    { id: "research", label: "Research", Component: ResearchSection },
    {
      id: "observations",
      label: "Observations",
      Component: ObservationsSection,
    },
    { id: "personas", label: "Personas", Component: PersonasSection },
    { id: "storyboard", label: "Storyboard", Component: StoryboardSection },
    { id: "conclusion", label: "Conclusion", Component: ConclusionSection },
  ];

  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    }, options);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const scrollToSection = (index: number) => {
    const sectionRef = sectionRefs.current[index];
    if (sectionRef) {
      window.scrollTo({
        top: sectionRef.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="App">
      <ScrollIndicator
        slides={slides}
        activeIndex={activeIndex}
        onDotClick={scrollToSection}
      />

      <div className="sections">
        {slides.map((slide, i) => {
          const SlideComponent = slide.Component;
          return (
            <section
              id={slide.id}
              className="snap-section"
              ref={(el) => {
                if (el) sectionRefs.current[i] = el;
              }}
              key={slide.id}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ width: "100%", height: "100%" }}
              >
                <SlideComponent />
              </motion.div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default App;
