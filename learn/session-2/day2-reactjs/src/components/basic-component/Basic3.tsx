import styles from "./Basic3.module.css";
import React from "react";
type Basic3 = {
  icon: React.ReactNode;
  label: string;
  type?: string;
};
export const Basic3 = ({ icon, label, type }: Basic3) => {
  let class_button = styles.button;
  if (type && type === "dark") {
    class_button = `${styles.button} ${styles.button_dark}`;
  }
  return (
    <button className={class_button}>
      <span
        style={{
          marginRight: "5px",
        }}
      >
        {icon}
      </span>
      {label}
    </button>
  );
};
