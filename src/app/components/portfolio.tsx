"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './portfolio.module.css'; // Import the CSS Module

const project = [
  {
    title: "Foodtuck",
    desc: "The FoodTuck Marketplace is a comprehensive e-commerce platform designed to connect buyers with high-quality food and restaurant supplies. ",
    devStack: "REACT, NEXTJS, TAILWIND CSS",
    link: "https://my-hackathone-3-x3yv.vercel.app/",
    git: "https://github.com/BismaYousuf/MY-Hackathone-3-",
    src: "/pics/project2.png"
  },
  {
    title: "Panacloud Website",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam labore veritatis laboriosam similique. Ullam iste quia dolor rem laborum.",
    devStack: "Core HTML, CSS",
    link: "https://panacloudwebsite.vercel.app/",
    git: "https://github.com/BismaYousuf/Panacloudwebsite",
    src: "/pics/project1.png"
  },
  {
    title: "Resume Builder",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam labore veritatis laboriosam similique. Ullam iste quia dolor rem laborum.",
    devStack: "HTML, CSS, Typescript",
    link: "https://interactive-resume-builder-2b9g.vercel.app/",
    git: "https://github.com/BismaYousuf/Interactive-Resume-Builder",
    src: "/pics/project3.png"
  }
];

const Portfolio = () => {
  return (
    <div className={styles.portfolioContainer} id="portfolio">
      <h1 className={styles.portfolioHeading}>
        SELECTED <span>PROJECTS</span>
      </h1>

      <div className={styles.projectGrid}>
        {project.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`${styles.projectItem} ${index % 2 === 1 ? styles.projectItemReverse : styles.projectItemNormal}`}
          >
            <div className={styles.projectDetails}>
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl text-white">{project.title}</h2>
              <p className={styles.projectDesc}>{project.desc}</p>
              <p className={styles.projectStack}>{project.devStack}</p>

              <div className={styles.projectLinks}>
                <a href={project.link} className="text-lg">See live site</a>
                <a href={project.git} className="text-lg">Github</a>
              </div>
            </div>

            <div className={styles.projectImageContainer}>
              <Image
                src={project.src}
                alt={project.title}
                width={350}
                height={500}
                layout="responsive"
                objectFit="cover"
                quality={90}
                className={styles.projectImage}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
