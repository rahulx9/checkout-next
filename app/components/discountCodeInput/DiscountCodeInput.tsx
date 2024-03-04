import Input from "@/components/input";
import styles from "./discountCodeInput.module.scss";

function DiscountCodeInput() {
  return (
    <div className={styles.discountCodeInputWrapper}>
      <Input wrapperClassName={styles.discountCodeInput} placeholder="Discount code or gift card" />
      <button>Apply</button>
    </div>
  );
}

export default DiscountCodeInput;
