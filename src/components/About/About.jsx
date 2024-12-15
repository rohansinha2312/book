import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Why Choose this Book?</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("hero/Java.png")}
          alt="Book Pic"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/clock.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Short</h3>
              <p>
                Exactly 50 pages of content, covering all the basics of Java. The book can be finished in 3 hours.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/brain.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Practice</h3>
              <p>
                The book includes 7 projects and 10+ practice questions to help you master the concepts.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/man-climbing-stairs.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>For Beginners</h3>
              <p>
                Anyone can grasp the contents of this book as it is worded super simply, while not missing any details.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};