import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Java in 50 pages
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li >
            <a  href="/">
              <p className = {styles.pageref}>
              About
            </p>
            </a>
          </li>
          <li >
            <Link  to="/read">
              <p className = {styles.pageref}>
                Read
             </p></Link> {/* Link to the /read route */}
          </li>
          <li >
            <Link  to="/authors">
              <p className = {styles.pageref}>
              Authors 
              </p>
            </Link> {/* Link to the /authors route */}
          </li>
        </ul>
      </div>
    </nav>
  );
};
