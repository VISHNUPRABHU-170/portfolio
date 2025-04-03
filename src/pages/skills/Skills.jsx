import Image from '../../components/image/Image';
import skills from './config.jsx';
import './Skills.css'

export default function Skills() { 
  return (
    <div className="skills">
      <h1>Tech Stack</h1>
      <ul className="skills-list">
        {skills.map((skill, index) => {
          return (
            <li key={index} className="skill-card">
              <Image imagePath={skill.skillIcon} className="skill__img" />
              <span>{skill.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
