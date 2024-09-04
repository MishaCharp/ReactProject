import styles from "./RestarauntTab.module.css";

export const RestorauntTab = ({ id, name, isActive, onClick }) => {
  const classValue = isActive ? styles.tabActive : styles.tab;
  return (
    <div className={classValue} onClick={onClick}>
      {name}
    </div>
  );
};