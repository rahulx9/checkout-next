import ExpressCheckout from "../expressCheckout";
import MainContent from "../mainContent";
import MainHeader from "../mainHeader";
import styles from "./mainContainer.module.scss";

export default function MainContainer() {
  return (
    <div className={styles.main} role="main">
      <MainHeader />
      <ExpressCheckout />
      <div
        className={styles.alternativePaymentSeparator}
        data-alternative-payment-separator=""
      >
        <span className={styles.alternativePaymentSeparatorContent}>OR</span>
      </div>
      <MainContent />
    </div>
  );
}
