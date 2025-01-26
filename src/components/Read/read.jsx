import React from "react";
import downloadIcon from "./downloads.png"; // Import the download icon image
import styles from "../Read/read.css";
import { Contact } from "../Contact/Contact.jsx"; // Hero component

function PDFViewer() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "30px",
       
       
      }}
    >
      {/* Download Button */}
      <a
        href='https://drive.google.com/uc?export=download&id=19c2YoEdrKnZo1H9C5n8FtWsFAhIDD1iO'
        download
        style={{
          textDecoration: "none",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#ff9900",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          fontSize: "16px",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src={downloadIcon}
          alt="Download"
          style={{
            width: "20px",
            height: "20px",
            marginRight: "10px",
          }}
        />
        Download
      </a>

      {/* Embedded PDF */}
      <iframe
        src="https://drive.google.com/file/d/1e0KKkJkN7BU1E50PRopt_wskyy2iaImJ/preview"
        width="40%"
        height="750px"
        
        style={{ border: "1px solid #ddd", borderRadius: "10px" }}
        title="Google Drive PDF"
      ></iframe>
      <div className={styles.contactSection}>
        <Contact />
      </div>
    </div>
  );
}

export default PDFViewer;
