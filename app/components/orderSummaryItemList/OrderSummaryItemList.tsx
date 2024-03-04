import OrderSummaryItem from "../orderSummaryItem/OrderSummaryItem";

function OrderSummaryItemList() {
  const list = [1];
  return (
    <div>
      {list.map((item) => {
        return (
          <div key={item}>
            <OrderSummaryItem />
          </div>
        );
      })}
    </div>
  );
}

export default OrderSummaryItemList;
