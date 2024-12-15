import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css"; // App-specific styles
import { About } from "./components/About/About"; // About component
import { Contact } from "./components/Contact/Contact"; // Contact component
import { Hero } from "./components/Hero/Hero"; // Hero component
import { Navbar } from "./components/Navbar/Navbar"; // Navbar componen
import Read from "./components/Read/read"; // Read page
import { Authors } from "./components/Authors/Authors"; // Authors page

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar /> {/* Navbar at the top */}
        <Routes>
          {/* Main Page Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
             
              
                <Contact />
              </>
            }
          />
          {/* Read Page Route */}
          <Route path="/read" element={<Read />} />
          <Route path="/authors" element={<Authors />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
