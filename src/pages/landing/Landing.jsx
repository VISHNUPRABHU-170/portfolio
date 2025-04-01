import { useState, useEffect } from "react";
import Image from "../../components/image/Image";
import Link from "../../components/link/Link";
import "./Landing.css";

export default function Landing() {

  const [imagePath, setImagePath] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setImagePath((val) => {
        return val + 1 < 5 ? val + 1 : 1;
      });
    }, 4000);

    return () => clearInterval(interval); // Cleanup the interval
  }, []);


  return (
    <div className="landing">

      <div className="landing-image">
        <Image imagePath={`../../public/landing-${imagePath}.svg`} alt="Landing-Image" className="landing__img" />
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
