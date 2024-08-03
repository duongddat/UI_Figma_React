import classNames from "classnames/bind";

import ToggleMode from "../ToggleMode/ToggleMode";
import { ReactComponent as SearchIcon } from "../../assets/img/icon/search.svg";
import { ReactComponent as NotificationIcon } from "../../assets/img/icon/notifications.svg";
import UserImg from "../../assets/img/user.jpg";
import styles from "./Header.module.css";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className="row justify-content-between px-4">
      <div className="col-lg-7 col-md-6 col-12">
        <div className={cx("header-group")}>
          <h1 className={cx("header-user")}>
            Welcome, <strong>Damain</strong>
          </h1>
          <ToggleMode />
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-12">
        <div className={cx("header-group")}>
          <div className={cx("header-box", "header-search__box")}>
            <input
              className={cx("header-search__input")}
              placeholder="Search for products..."
            />
            <SearchIcon className={cx("header-icon")} />
          </div>
          <div className={cx("header-box", "header-notification")}>
            <NotificationIcon className={cx("header-icon")} />
          </div>
          <div className={cx("header-box__user")}>
            <img src={UserImg} alt="User Avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
