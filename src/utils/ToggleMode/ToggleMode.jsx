import { useContext } from "react";
import classNames from "classnames/bind";

import styles from "./ToggleMode.module.css";
import { ModeContext } from "../../store/mode-store";

const cx = classNames.bind(styles);

function ToggleMode() {
  const { isDark, toggleMode } = useContext(ModeContext);

  return (
    <label className={cx("switch")}>
      <input type="checkbox" onChange={toggleMode} checked={isDark} />
      <span className={cx("slider", "round")}></span>
    </label>
  );
}

export default ToggleMode;
