import styles from "./shippingAddressSection.module.scss";
import DeliveryForm from "../deliveryForm";
import ShippingMethodSelector from "../shippingMethodSelector";

function ShippingAddressSection() {
  return (
    <div className={styles.shippingAddressSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle} id="section-delivery-title">
          Delivery
        </h2>
      </div>
      <div className={styles.shippingAddressSectionContent}>
        <DeliveryForm />
        <ShippingMethodSelector />
      </div>
    </div>
  );
}

export default ShippingAddressSection;
