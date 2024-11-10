"use client";
import React from 'react';
import Image from 'next/image';
import styles from './about.module.css'; // Importing the CSS Module

const About = () => {
  return (
    <div className={styles.aboutContainer} id='about'>
      <h1 className={styles.heading}>
        About <span>Me</span>
      </h1>

      <div className={styles.gridContainer}>
        
        {/* Education Section */}
        <div className={`${styles.card} md:col-span-5`}>
          <div className={styles.cardOverlay}></div>
          <div className={styles.cardContent}>
            <Image src={'/pics/book.png'} alt={'book'} width={130} height={130} className={styles.cardImage} />
            <div className={styles.cardText}>
              <h2>Education</h2>
              <p>I have completed my Intermediate education with an F.Sc. background, focusing on foundational sciences that support her analytical and problem-solving skills.</p>
            </div>
          </div>
        </div>

        {/* Finance Section */}
        <div className={`${styles.card} md:col-span-3`}>
          <div className={styles.cardOverlay}></div>
          <div className={styles.cardContent}>
            <Image src={'/pics/finance.png'} alt={'finance'} width={130} height={130} className={styles.cardImage} />
            <div className={styles.cardText}>
              <h2>Finance</h2>
              <p>I approach challenges with a logical and systematic mindset.</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className={`${styles.card} md:col-span-3`}>
          <div className={styles.cardOverlay}></div>
          <div className={styles.cardContent}>
            <Image src={'/pics/card.png'} alt={'card'} width={130} height={130} className={styles.cardImage} />
            <div className={styles.cardText}>
              <h2>Experience</h2>
              <p>I have a diverse portfolio of projects, specializing in building responsive and visually engaging web applications that prioritize user experience and performance.</p>
            </div>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className={`${styles.card} md:col-span-5`}>
          <div className={styles.cardOverlay}></div>
          <div className={styles.cardContent}>
            <Image src={'/pics/pc.png'} alt={'pc'} width={130} height={130} className={styles.cardImage} />
            <div className={styles.cardText}>
              <h2>Technical Skills</h2>
              <p>With expertise in HTML, CSS, Next.js, Tailwind CSS, and TypeScript, I create responsive, high-performance web applications with user-friendly interfaces.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
