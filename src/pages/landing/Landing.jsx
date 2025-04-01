import { useState, useEffect } from "react";
import Image from "../../components/image/Image";
import Link from "../../components/link/Link";
import LandingImage1 from "/public/landing-1.svg";
import LandingImage2 from "/public/landing-2.svg";
import LandingImage3 from "/public/landing-3.svg";
import LandingImage4 from "/public/landing-4.svg";
import "./Landing.css";

export default function Landing() {
  const images = [LandingImage1, LandingImage2, LandingImage3, LandingImage4]; // Store references
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval
  }, [images.length]);

  return (
    <div className="landing">
      <div className="landing-image">
        <Image imagePath={images[imageIndex]} alt="Landing-Image" className="landing__img" />
      </div>

      <div className="landing-content">
        <span className="landing-text">Hello, I'm</span>
        <span className="landing-text landing-title">Vishnuprabhu</span>
        <span className="landing-text">Full Stack Developer</span>
        <Link label="My Resume" />
      </div>
    </div>
  );
}
