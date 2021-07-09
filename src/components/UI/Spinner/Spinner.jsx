import { useSelector } from "react-redux";
import styles from "./Spinner.module.css";

const Spinner = () => {
  const mode = useSelector((state) => state.mode.mode);

  let ldsRingDark;
  if (mode === "dark") {
    ldsRingDark = styles.ldsRingDark;
  }

  return (
    <div className={`${styles.ldsRing} ${ldsRingDark}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
