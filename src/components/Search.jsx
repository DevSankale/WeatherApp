import { useEffect, useState } from "react";
import styles from "./search.module.css";

export default function Search({city,setCity}) {
 
  
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Type city name..."
      />
    </div>
  );
}
