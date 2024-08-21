export const RestorauntTab = ({ id, name, isActive, onClick }) => {
  const classValue = isActive ? "tab-active" : "tab";
  return (
    <div className={classValue} onClick={onClick}>
      {name}
    </div>
  );
};
