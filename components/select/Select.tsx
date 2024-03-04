import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Select(props: Props) {
  const { children } = props;
  return (
    <div>
      <label
        className="field__label field__label--visible"
        htmlFor="checkout_shipping_address_country"
      >
        Country/region
      </label>
      <select>{children}</select>
    </div>
  );
}

export default Select;
