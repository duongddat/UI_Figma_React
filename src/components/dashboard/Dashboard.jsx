import classNames from "classnames/bind";

import { ReactComponent as ProfitIcon } from "../../assets/img/icon/summary/profit.svg";
import { ReactComponent as OrderIcon } from "../../assets/img/icon/summary/orders.svg";
import { ReactComponent as NextIcon } from "../../assets/img/icon/next.svg";
import styles from "./Dashboard.module.css";
import Dropdown from "../../utils/Dropdown/Dropdown";
import SaleChart from "../chart/SaleChart";
import { Link } from "react-router-dom";
import ListProduct from "../product/ListProduct";
import VistorChart from "../chart/VistorChart";

const cx = classNames.bind(styles);
const FILTER_DATA = ["Weekly", "Monthy", "Year"];

function Dashboard() {
  return (
    <div className="row py-4 px-4 justify-content-between">
      <div className="col-lg-7 col-md-6 col-12">
        <div className="d-flex flex-column mt-2 row-gap-45">
          <div className={cx("summary-stats")}>
            <div className={cx("summary-order", "summary-content")}>
              <div className={cx("summary-icon")}>
                <OrderIcon />
              </div>
              <div className={cx("summary-detail")}>
                <div className={cx("summary-top")}>
                  <div className={cx("summary-amount")}>23789</div>
                  <div className={cx("summary-badge")}>+20</div>
                </div>
                <div className={cx("summary-bottom")}>
                  <span>Orders</span>
                </div>
              </div>
            </div>
            <div className={cx("summary-content", "summary-profit")}>
              <div className={cx("summary-icon")}>
                <ProfitIcon />
              </div>
              <div className={cx("summary-detail")}>
                <div className={cx("summary-top")}>
                  <div className={cx("summary-amount")}>$12890,89</div>
                  <div className={cx("summary-badge")}>+$840,00</div>
                </div>
                <div className={cx("summary-bottom")}>
                  <span>Profit</span>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("sale-statistics")}>
            <div className={cx("sale-statistics__header")}>
              <div className={cx("title")}>
                <h3>Sales statistics</h3>
              </div>
              <Dropdown options={FILTER_DATA} />
            </div>
            <div className={cx("sale-chart")}>
              <SaleChart />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="d-flex flex-column mt-2 row-gap-45">
          <div className={cx("sale-statistics")}>
            <div className={cx("sale-statistics__header")}>
              <div className={cx("title")}>
                <h3>Top selling products</h3>
              </div>
              <Link to="/" className={cx("see-more")}>
                <h5>See all</h5>
                <NextIcon />
              </Link>
            </div>
            <div className={cx("top-product")}>
              <ListProduct />
            </div>
          </div>
          <div className={cx("sale-statistics")}>
            <div className={cx("sale-statistics__header")}>
              <div className={cx("title")}>
                <h3>Unique visitors</h3>
              </div>
              <Dropdown options={FILTER_DATA} />
            </div>
            <div className={cx("visitor-chart")}>
              <VistorChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
