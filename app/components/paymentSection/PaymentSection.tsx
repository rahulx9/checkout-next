import styles from "./paymentSection.module.scss";

function PaymentSection() {
  return (
    <div className={styles.paymentSectionWrapper}>
      <div>
        <h2 className={styles.paymentHeading}>Payment</h2>
        <p className={styles.paymentDescInfo}>
          All transactions are secure and encrypted.
        </p>
      </div>
      <div>
        <a
          className={styles.loginLink}
          href="https://checkout-integ.onequince.com/redirectToLogin?redirecturi=https://checkout-integ.onequince.com/checkouts/co/65ffb9653a79b026b4faffb3f01f31bc"
        >
          Login
        </a>
        <span> to see your store credit</span>
      </div>
      {/* TODO */}
      <div style={{ height: "362px", border: '1px solid black' }}>Payment section</div>
      <button className={styles.payNowBtn}>Pay now</button>
    </div>
  );
}

export default PaymentSection;
