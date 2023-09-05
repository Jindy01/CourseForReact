import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <h1>
        Cars catalog
      </h1>
      <div>
        <div className={styles.item} >
          <img src='' alt="" />
          <h2>Cars</h2>
          <p>Cost : $ 100к </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Home;