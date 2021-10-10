import Image from "next/image";
import { ICard } from "../../interfaces";
import styles from "./../../styles/Global.module.scss";

const Card = ({ thumbnail }: ICard) => {
  return (
    <div className={styles["card"]}>
      <Image
        src={thumbnail.url}
        height={200}
        width={300}
        layout="responsive"
        alt={thumbnail.url}
      />
    </div>
  );
};

export default Card;
