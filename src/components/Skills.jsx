import { useEffect, useState } from "react";
import skills from "/src/skills.json";

const Skills = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <div className="skills" id="skills">
      <div className="skills__presentation">
        <h2>
          <span>&#47;&#47;</span> SKILLS
        </h2>
      </div>
      <div className="skills__details">
        {skills.map((skill, index) => (
          <>
            <div key={`${skill.id}-${windowWidth}`} className="skill">
              <img
                key={index}
                src={skill.img}
                alt={skill.name}
                data-name={skill.name}
                style={{ animationDelay: `${index * 1.9}s` }}
              />
            </div>
            <div className="skills__names">
              <p className="skills__name">{skill.name}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Skills;
