import { useRef, useState, useEffect } from "react";
import Image from "../../components/image/Image";
import PartnerPortal from "/public/partner-portal.png";
import Fixit from "/public/fixit.png";
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
              <Image imagePath={PartnerPortal} alt="Landing-Image" className="project__img" />
            </div>
            <div className="project__content">
              <span className="project__title">Partner Portal</span>
              <span className="project__description">
                A web application that allows partners to raise tickets, view their status, and communicate with the support team.
              </span>
            </div>
          </div>
          <div className="projects__item">
            <div className="project__logo">
              <Image imagePath={Fixit} alt="Landing-Image" className="project__img" />
            </div>
            <div className="project__content">
              <span className="project__title">Fixit</span>
              <span className="project__description">
                A mobile application that allows users to book services like plumbing, electrical, and carpentry.
              </span>
            </div>
          </div>
          <div className="projects__item">
            <div className="project__logo">
              <Image imagePath={Fixit} alt="Landing-Image" className="project__img" />
            </div>
            <div className="project__content">
              <span className="project__title">Fixit</span>
              <span className="project__description">
                A mobile application that allows users to book services like plumbing, electrical, and carpentry.
              </span>
            </div>
          </div>
          <div className="projects__item">
            <div className="project__logo">
              <Image imagePath={Fixit} alt="Landing-Image" className="project__img" />
            </div>
            <div className="project__content">
              <span className="project__title">Fixit</span>
              <span className="project__description">
                A mobile application that allows users to book services like plumbing, electrical, and carpentry.
              </span>
            </div>
          </div>
        </div>
        <button onClick={handleNext} className={!canScrollRight ? "projects__btn__disable" : "projects__btn"}>
          &gt;
        </button>
      </div>
    </div>
  );
}
