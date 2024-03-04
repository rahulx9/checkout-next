import OrderSummary from "../orderSummary";
import styles from "./sidebarContainer.module.scss";

function SidebarContainer() {
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebar}>
        <OrderSummary />
      </div>
    </div>
  );
}

export default SidebarContainer;
