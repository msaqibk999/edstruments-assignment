import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = ({ setIsSidebarOpen }) => {
  const handleSideBarClick = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className={styles.mainContainer}>
      <Link to="/">
        <h1>Application</h1>
      </Link>
      <div className={styles.headerNav}>
        <Navbar />
      </div>
      <div className={styles.hamMenu} onClick={handleSideBarClick}>
        ☰
      </div>
    </div>
  );
};

export default Header;
