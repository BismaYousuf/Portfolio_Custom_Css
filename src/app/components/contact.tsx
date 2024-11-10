import React from 'react';
import Image from 'next/image';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <>
      <div className={styles.contactContainer}>
        <div className={styles.contactGrid}>
          <div className={styles.contactGridItem}>
            <ul>
              <li className={styles.contactGridItem}>
                <Image
                  src={'/pics/phone.png'}
                  alt={'phone'}
                  width={110}
                  height={110}
                  className="h-[110px] w-auto"
                />
                <p className={styles.contactText}>+92 345680876</p>
              </li>
              <li className={styles.contactGridItem}>
                <Image
                  src={'/pics/mail.png'}
                  alt={'mail'}
                  width={110}
                  height={110}
                  className="h-[110px] w-auto"
                />
                <p className={styles.contactText}>bismayousuf540@gmail.com</p>
              </li>
            </ul>
          </div>

          <div className={styles.contactForm}>
            <h2 className={styles.contactFormHeading}>Let&apos;s Connect</h2>
            <p className={styles.contactFormText}>Send me a message and let&apos;s schedule a call!</p>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  className={styles.contactInput}
                  placeholder="First Name"
                />
                <input
                  type="text"
                  name="name"
                  className={styles.contactInput}
                  placeholder="Last Name"
                />
                <input
                  type="email"
                  name="email"
                  className={styles.contactInput}
                  placeholder="Email"
                />
                <input
                  type="phone"
                  name="phone"
                  className={styles.contactInput}
                  placeholder="Phone Number"
                />
              </div>
              <textarea
                className={`${styles.contactInput} h-[150px]`}
                placeholder="Your Message"
              />
              <button type="submit" className={styles.contactButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
