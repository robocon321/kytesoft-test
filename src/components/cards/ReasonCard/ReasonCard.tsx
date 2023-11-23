import styles from "./ReasonCard.module.scss";

type ReasonCardProps =   {
  id: number,
  title: string,
  image: string,
  description: string
}

const ReasonCard: React.FC<ReasonCardProps> = (props) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["image"]}>
        <img src={props.image} alt="Not found" />
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default ReasonCard;