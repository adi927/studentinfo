import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import styles from "./Background.module.css";

const Background = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Background;
