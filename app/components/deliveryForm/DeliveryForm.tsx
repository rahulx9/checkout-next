import Input from "@/components/input";
import Select from "@/components/select";
import ApartmentSuiteInput from "../apartmentSuiteInput/ApartmentSuiteInput";
import styles from './deliveryForm.module.scss'

function DeliveryForm() {
  return (
    <div className={styles.shippingAddressFrom}>
      {/* <div className={styles.sectionContent}> */}
      <Select>
        <option
          data-code="US"
          data-pure-numeric-postal-code="false"
          value="United States"
        >
          United States
        </option>
      </Select>
      {/* </div> */}
      <div className={styles.nameWrapper}>
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
      </div>
      <Input placeholder="Address 1" />
      <ApartmentSuiteInput />
      {/* <Input placeholder="Apartment, suite, etc. (optional)" /> */}
      <div className={styles.cityWrapper}>
        <Input placeholder="City" />
        <Input placeholder="State" />
        <Input placeholder="ZIP Code" />
      </div>
    </div>
  );
}

export default DeliveryForm;
