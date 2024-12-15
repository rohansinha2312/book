import React from "react";
import { Link } from "react-router-dom";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>

        Read For<br /> Free Today!</h1>
        <p className={styles.description}>
        The fastest way to learn a Java on the market. For free! Straight to the point explanations, 7 projects, practice questions, and more in 50 pages. Unleash your coding ability faster than ever.
        </p>
        <Link to="/read" className={styles.contactBtn}>
          Read Now
        </Link> 
      </div>
      <img
        src={getImageUrl("hero/Java.png")}
        alt="Book image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      
    </section>
  );
};
