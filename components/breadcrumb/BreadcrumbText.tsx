import styles from "./breadcrumb.module.scss";
import cn from "classnames";
import Link from "next/link";

type Item = {
  name: string;
  href?: string;
};

type BreadcrumbTextProp = {
  index: number;
  item: Item;
};

function BreadcrumbText({ index, item }: BreadcrumbTextProp) {
  if (item.href) {
    return (
      <Link
        className={cn(styles.breadcrumbText, styles.breadcrumbLink)}
        href={item.href}
      />
    );
  }

  return (
    <span className={styles.breadcrumbText}>
      {index + 1}. {item.name}
    </span>
  );
}

export default BreadcrumbText;
