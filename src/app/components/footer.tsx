import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className="px-6 md:px-0 mt-12 max-w-[1000px] mx-auto flex justify-center items-center">
        <h1 className={styles.footerHeading}>Bisma Yousuf</h1>
      </div>
      <div className={styles.footerIcons}>
        <a
          href="https://www.linkedin.com/in/bisma-yousuf-52572b2b4/"
          className={styles.footerIcon}
        >
          <FaLinkedin size={24} />
        </a>
        <a href="#" className={styles.footerIcon}>
          <FaTwitter size={24} />
        </a>
        <a
          href="https://github.com/BismaYousuf"
          className={styles.footerIcon}
        >
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
