import { useRef, useState, useEffect } from "react";
import "./Projects.css";

export default function Projects() {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener("resize", updateScrollButtons);
    return () => window.removeEventListener("resize", updateScrollButtons);
  }, []);

  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const handleNext = () => {
    if (carouselRef.current && canScrollRight) {
      const scrollAmount = carouselRef.current.clientWidth * 0.35;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(updateScrollButtons, 500);
    }
  };

  const handlePrev = () => {
    if (carouselRef.current && canScrollLeft) {
      const scrollAmount = carouselRef.current.clientWidth * 0.35;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setTimeout(updateScrollButtons, 500);
    }
  };

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects__wrapper">
        <button onClick={handlePrev} className={!canScrollLeft ? "projects__btn__disable" : "projects__btn"}>
          &lt;
        </button>
        <div className="projects__list" ref={carouselRef} onScroll={updateScrollButtons}>
          <div className="projects__item">
            <div className="project__logo">
            </div>
            <div className="project__content">Project 1</div>
          </div>
          <div className="projects__item">
            <div className="project__logo">
            </div>
            <div className="project__content">Project 2</div>
          </div>
          <div className="projects__item">
            <div className="project__logo"></div>
            <div className="project__content">Project 3</div>
          </div>
          <div className="projects__item">
            <div className="project__logo"></div>
            <div className="project__content">Project 4</div>
          </div>
          <div className="projects__item">
            <div className="project__logo"></div>
            <div className="project__content">Project 5</div>
          </div>
          <div className="projects__item">
            <div className="project__logo"></div>
            <div className="project__content">Project 6</div>
          </div>
        </div>
        <button onClick={handleNext} className={!canScrollRight ? "projects__btn__disable" : "projects__btn"}>
          &gt;
        </button>
      </div>
    </div>
  );
}
