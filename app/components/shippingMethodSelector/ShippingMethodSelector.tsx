import styles from "./shippingMethodSelector.module.scss";

function ShippingMethodSelector() {
  return (
    <div>
      <h3 className={styles.shippingMethodHeading}>Shipping method</h3>
      <div className={styles.selectAddressMsg}>
        Enter your shipping address to view available shipping methods.
      </div>
    </div>
  );
}

export default ShippingMethodSelector;
