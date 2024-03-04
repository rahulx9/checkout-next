import styles from "./orderSummaryItem.module.scss";

function OrderSummaryItem() {
  return (
    <div className={styles.orderSummaryItemWrapper}>
      <div
        style={{ height: "64px", width: "64px", border: "1px solid black" }}
      />
      <div className={styles.itemDetails}>
        <p className={styles.itemName}>14K Gold Diamond Orbit Ring</p>
        <div>
          <p className={styles.itemVarient}>8 / Rose Gold</p>
          {/* TODO: Add store credit msg here */}
        </div>
      </div>
      <div className={styles.itemPrice}>
        <span>$399.90</span>
      </div>
    </div>
  );
}

export default OrderSummaryItem;
