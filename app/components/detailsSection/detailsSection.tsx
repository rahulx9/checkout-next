import Input from "@/components/input";
import styles from "./detailsSection.module.scss";
import CheckboxWithLabel from "@/components/checkboxWithLabel";
import ShippingAddressSection from "../shippingAddressSection";

function DetailsSection() {
  return (
    <div className={styles.stepSections}>
      <div className={styles.contactInformation}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.mainHeader} id="main-header" tabIndex={-1}>
            Contact
          </h2>
          {/* <p>
            <span aria-hidden="true">Have an account?</span>
            <a
              className={styles.loginLink}
              href="https://www.quince.com/log-in?redirecturi=https://checkout.quince.com/5644320879/checkouts/17096dabce6436539839f1e986d0e97d"
            >
              <span className="visually-hidden">Have an account?</span> Log in
            </a>
          </p> */}
        </div>
        <div className={styles.sectionContent}>
          <div data-shopify-pay-email-flow="true">
            <Input placeholder="Email or phone number" />
          </div>
          <div>
            <CheckboxWithLabel label="Email me with news and offers" />
          </div>
        </div>
      </div>
      <ShippingAddressSection />
    </div>
  );
}

export default DetailsSection;
