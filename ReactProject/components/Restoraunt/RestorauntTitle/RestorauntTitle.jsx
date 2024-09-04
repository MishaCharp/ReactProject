import styles from "./RestorauntTitle.module.css";

export const RestorauntTitle = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};
