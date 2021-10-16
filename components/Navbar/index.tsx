import Link from "next/link";
import Image from "next/image";
import styles from "./../../styles/Navbar.module.scss";
import logo from "../../public/disney-plus.svg";
import { INavProps } from "../../interfaces";

const Navbar = ({ account }: INavProps) => {
  return (
    <nav className={styles["navbar"]}>
      <ul>
        <li>
          <Link href="/">
            <a>
              <Image src={logo} width={150} height={80} alt="Disney Logo" />
            </a>
          </Link>
        </li>
        <li className={styles["avatar"]}>
          <Image
            src={account.avatar.url}
            alt={`${account.username} Avatar`}
            height={50}
            width={50}
          />
        </li>
        <li>{account.username}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
