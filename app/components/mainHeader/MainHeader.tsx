import Image from "next/image";
import styles from "./mainHeader.module.scss";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Timer from "../timer";
import EnjoyShippingAndReturn from "../enjoyShippingAndReturn";

export default function MainHeader() {
  return (
    <div className={styles.mainHeader}>
      <span className={styles.logo}>
        <a href="https://www.quince.com">
          <Image alt="Quince" src="/Quince-1.png" width={180} height={60} />
        </a>
      </span>
      <h1 className="visually-hidden">Information</h1>
      {/* <Breadcrumb /> */}
      <Timer />
      <EnjoyShippingAndReturn />
    </div>
  );
}
