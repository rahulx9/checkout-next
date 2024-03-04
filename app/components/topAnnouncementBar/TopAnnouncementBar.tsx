import Image from "next/image";
import styles from "./topAnnouncementBar.module.scss";

export default function TopAnnouncementBar() {
  return (
    <div className={styles.topAnnouncementBar}>
      <div className={styles.topAnnouncementBarItemLeft}>
        <Image
          alt="secure checkout"
          src="/secure_checkout_desktop.svg"
          width={14}
          height={14}
        />
        <span style={{ marginLeft: "5px" }}>SECURE CHECKOUT</span>
      </div>
      <div
        className={styles.rotatingBannerWrapper}
        id="discount_applied_top_announcement_bar"
      >
        <div className={styles.rotatingBanner}>
          <p>FREE STANDARD SHIPPING | 365 DAY EASY RETURNS</p>
        </div>
      </div>
      <div className={styles.topAnnouncementBarItemRight}>
        <a
          style={{ color: "#FFFFFF", textDecoration: "underline" }}
          href="https://www.quince.com/contact-us"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
