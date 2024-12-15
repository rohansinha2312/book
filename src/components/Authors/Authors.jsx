import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Authors.module.css";
import { Contact } from "../Contact/Contact.jsx";

export const Authors = () => {
  return (
    <div className={styles.container}>
      <section className={styles.authorsSection}>
        <h2 className={styles.title}>Meet the Authors</h2>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <img
              src={getImageUrl("about/rohan.png")}
              alt="Author 1"
              className={styles.authorImage}
            />
            <div className={styles.cardContent}>
              <h3>Rohan Sinha</h3>
              <p>
                As a freshman in high school, I took an introductory Java course that was slow-paced and repetitive, yet lacked crucial information. This experience inspired me to write a book that teaches beginners the most important Java topics in both a condensed and detailed manner. Now a rising junior, I've expanded my skills through various experiences. I'm currently a Computational Game Theory Research Intern at the University of Maryland, have interned as a software engineer at a startup, working on both frontend and backend development, and have taught 100+ students programming. This book aimed to provide the engaging and efficient introduction to Java that I wish I'd had when starting out. I hope it did!
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img
              src={getImageUrl("about/SJ.png")}
              alt="Author 2"
              className={styles.authorImage}
            />
            <div className={styles.cardContent}>
              <h3>Samanth Jain</h3>
              <p>
               I believe this book can serve as a tool to enrich one’s computer science experience and help with preparing for APCSA. Now a rising junior, I have expanded my skills significantly to include libraries and languages such as React, React Native, Spring Boot, and MySQL, and achieved a score of 5 on the APCSA exam. Drawing from my own experiences and the skills I've developed, I hope this book serves as a valuable resource for you and inspires your passion for computer science. Happy coding!
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img
              src={getImageUrl("about/rithik.png")}
              alt="Author 3"
              className={styles.authorImage}
            />
            <div className={styles.cardContent}>
              <h3>Rithik Paladugu</h3>
              <p>
                As a freshman going into high school without a real sense of direction, I took the same Computer Science class as my friends because I didn’t want to feel left out. In the course itself, I developed a strong liking towards coding and machine learning, intrigued and wanting to learn more. Today, after getting a 5 on the APCSA exam, I’m trying to broaden my learning through studying quantum. After achieving the necessary certifications, I plan to try and build quantum algorithms to help people. I hope this book can serve as a guide for curious minds new to Computer Science, like how I was just a few years ago. Good luck coding!
              </p>
            </div>
          </div>
        </div>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
      <div className={styles.contactContainer}>
        <Contact />
      </div>
    </div>
  );
};
