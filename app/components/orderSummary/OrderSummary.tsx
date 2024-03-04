import DiscountCodeInput from "../discountCodeInput";
import OrderSummaryItemList from "../orderSummaryItemList";
import StoreCreditMsg from "../storeCreditMsg";
import SubtotalSection from "../subtotalSection";
import styles from "./orderSummary.module.scss";

export default function OrderSummary() {
  return (
    <div className={styles.orderSummaryWrapper}>
      <OrderSummaryItemList />
      <DiscountCodeInput />
      <StoreCreditMsg />
      <SubtotalSection />
    </div>
  );
}
