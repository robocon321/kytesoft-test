import styles from "./DemoPageCard.module.scss";

type DemoPageCardProps = {
  image: string;
  text: string;
};

const DemoPageCard: React.FC<DemoPageCardProps> = (props) => {
  return (
    <div className={styles["container"]}>
      <img src={props.image} alt="Not found" />
      <div className={styles["content"]}>
        <h6>{props.text}</h6>
        <button>Launch</button>
      </div>
    </div>
  );
};

export default DemoPageCard;
