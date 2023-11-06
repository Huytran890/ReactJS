import styles from "./Basic5.module.css";
import { FaHeart } from "react-icons/fa";
type Basic5 = {
  thumb: string;
  title: string;
  desc: string;
};
export const Basic5 = ({ thumb, title, desc }: Basic5) => {
  return (
    <li className={styles.video_item}>
      <div className={styles.thumb}>
        <img src={thumb} alt={title} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className={styles.like}>
        <FaHeart />
      </div>
    </li>
  );
};
