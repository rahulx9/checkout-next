"use client";
import { useState } from "react";
import styles from "./breadcrumb.module.scss";
import cn from "classnames";
import BreadcrumbText from "./BreadcrumbText";

function Breadcrumb() {
  const [active, setActive] = useState(1);
  const itemList = [
    { name: "Details" },
    { name: "SHIPPING" },
    { name: "PAYMENT" },
  ];

  return (
    <nav aria-label="Breadcrumb">
      <ol className={styles.breadcrumbList} role="list">
        {itemList.map((item, index) => {
          const isActive = index === active;
          return (
            <li
              key={item.name}
              className={cn(styles.breadcrumbItem, {
                [styles.completed]: index < active,
                [styles.current]: isActive,
              })}
              aria-current={isActive ? "step" : undefined}
            >
              <BreadcrumbText index={index} item={item} />
              <img
                className={styles.chevronRight}
                src="/icons/chevronRight.svg"
                alt="Chevron Right Icon"
              />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
