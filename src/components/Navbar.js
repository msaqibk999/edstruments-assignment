import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/one">
        <strong>One</strong>
      </Link>
      <Link to="/two">
        <strong>Two</strong>
      </Link>
      <Link to="/three">
        <strong>Three</strong>
      </Link>
    </nav>
  );
};

export default Navbar;
