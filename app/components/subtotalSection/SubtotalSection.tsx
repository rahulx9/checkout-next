import cn from "classnames";
import styles from "./subtotalSection.module.scss";

function SubtotalSection() {
  return (
    <div>
      <div className={styles.row} role="row">
        <div className={styles.rowheader} role="rowheader">
          Subtotal
        </div>
        <div className={cn(styles.cell, styles.subtotalPrice)} role="cell">
          $399.90
        </div>
      </div>
      <div className={styles.row} role="row">
        <div className={styles.rowheader} role="rowheader">
          Shipping
        </div>
        <div className={cn(styles.cell, styles.shippingText)} role="cell">
          Free shipping available
        </div>
      </div>
      <div className={styles.row} role="row">
        <div
          className={cn(styles.rowheader, styles.totalHeading)}
          role="rowheader"
        >
          Total
        </div>
        <div className={styles.cell} role="cell">
          <abbr className={styles.currency}>USD</abbr> <strong className={styles.totalValue}>$399.90</strong>
        </div>
      </div>
    </div>
  );
}

export default SubtotalSection;
