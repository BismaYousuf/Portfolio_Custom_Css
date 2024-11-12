"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './hero.module.css'

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroOverlay}></div>

      <div className={styles.heroTextWrapper}>
        <div className={styles.heroHeading}>
          <h1 className={styles.heroPrimaryText}>Hey! I am</h1>
          <h1 className={styles.heroSecondaryText}>BISMA YOUSUF</h1>
        </div>

        <motion.div className={`${styles.heroIcon} hidden md:block`} drag>
          <Image src="/pics/icon1.png" alt="cursor" width={170} height={170} draggable="false" />
        </motion.div>

        <motion.div className={`${styles.heroIcon2} hidden md:block`} drag>
          <Image src="/pics/icon2.png" alt="message" width={120} height={120} draggable="false" />
        </motion.div>

        <p className={styles.heroDescription}>
          I am a front-end developer focused on creating websites that provide the best experience for users.
        </p>

        <Image
          src="/pics/profilepic.png"
          alt="picture"
          width={400}
          height={400}
          className={styles.heroImage}
        />
      </div>
    </div>
  );
};

export default Hero;
