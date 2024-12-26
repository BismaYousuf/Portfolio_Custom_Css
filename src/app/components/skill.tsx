"use client";
import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare,} from 'react-icons/fa';
import styles from './skill.module.css'; // Import the CSS Module
import {RiNextjsFill, RiTailwindCssFill  } from "react-icons/ri";
import { SiTypescript, SiSanity } from "react-icons/si";



const skillIcons = [
    { icon: <FaHtml5 className={styles.skillItemIcon} size={140} />, label: "HTML" },
    { icon: <FaCss3Alt className={styles.skillItemIcon} size={140} />, label: "CSS" },
    { icon: <FaJsSquare className={styles.skillItemIcon} size={140} />, label: "JavaScript" },
    { icon: <FaReact className={styles.skillItemIcon} size={110} />, label: "React" },
    { icon: <RiNextjsFill className={styles.skillItemIcon} size={140} />, label: "Next Js"},
    { icon: <RiTailwindCssFill className={styles.skillItemIcon} size={140} />, label: "Tailwind Css"},
    { icon: <SiTypescript className={styles.skillItemIcon} size={140} />, label: "TypeScript"},
    { icon: <SiSanity className={styles.skillItemIcon} size={140} />, label: "Sanity"},
];

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.skillsContent}>
        <h2 className={styles.skillsHeading}>What I Do</h2>
        <div className={styles.skillsGrid}>
          {skillIcons.map((skill, index) => (
            <div 
                key={index} 
                className={styles.skillItem}
            >
                {skill.icon}
                <p className={styles.skillLabel}>{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
