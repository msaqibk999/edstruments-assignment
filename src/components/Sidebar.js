import styles from "./Sidebar.module.css";
import Navbar from "./Navbar";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const handleCloseSidebarClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className={`${styles.mainContainer} ${isSidebarOpen && styles.open}`}>
      <strong className={styles.cross} onClick={handleCloseSidebarClick}>
        ×
      </strong>
      <div className={styles.sideNav}>
        <Navbar />
      </div>
    </div>
  );
};

export default Sidebar;
