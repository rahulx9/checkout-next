import styles from "./page.module.scss";
import MainContainer from "./components/mainContainer";
import SidebarContainer from "./components/sidebarContainer";

export default function Home() {
  return (
    <div className={styles.content}>
      <MainContainer />
      <SidebarContainer />
    </div>
  );
}
