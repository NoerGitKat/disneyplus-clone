import Link from "next/link";
import Image from "next/image";
import styles from "./../../styles/Navbar.module.scss";
import logo from "../../public/disney-plus.svg";

const Navbar = () => {
  return (
    <nav className={styles["navbar"]}>
      <Link href="/">
        <a>
          <Image src={logo} width={150} height={80} alt="Disney Logo" />
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
