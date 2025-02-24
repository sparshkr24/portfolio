import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { skills } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import me from "../assets/me.jpg";

const ServiceCard = ({ index, title, icon }) => {
  const content = {
    "Languages": ["C++", "Python", "HTML", "CSS", "JavaScript", "TypeScript"],
    "Frameworks & Libraries": ["React", "Redux", "Node", "Next.js", "Flask", "Django"],
    "Databases": ["MySQL", "PostgreSQL", "MongoDB"],
    "Tools": ["Git", "Jira", "Azure", "AWS", "Docker", "GitHub"]
  };

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>

          <div className='flex flex-wrap justify-center mt-4'>
            {content[title].map((item, idx) => (
              <span key={idx} className='text-xs border border-white rounded-full px-2 py-1 m-1'>
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <p className={styles.sectionSubText}>Get to know me</p>
          <h2 className={styles.sectionHeadText}>About me.</h2>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            I'm a backend-first, full-stack engineer, and a problem solver with 2 years of development experience.
            Energetic, optimistic, and always up for a challenge - that's me! I take ownership of problems, 
            adapt quickly, and deliver results, whether working solo or with a team.
            Beyond code, I excel at communication and collaboration, ensuring ideas are clearly presented 
            and discussions turn into action.
          </motion.p>
        </div>
        <div className="flex-1 relative mt-10 md:mt-0 md:ml-10">
          <div className="unique-shape bg-tertiary p-5 rounded-full">
            <img
              src={me}
              alt="Sparsh"
              className="w-80 h-80 object-cover rounded-full"
            />
          </div>
        </div>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {skills.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
