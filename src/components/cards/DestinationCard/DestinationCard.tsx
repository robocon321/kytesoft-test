import styles from "./DestinationCard.module.scss";

type DestinationCardProps = {
    image: string,
    title: string
}

const DestinationCard: React.FC<DestinationCardProps> = (props) => {
  return (
    <div className={styles["container"]}>
        <div className={styles["image"]} style={{
          backgroundImage: `url(${props.image})`
        }}>
        </div>
        <h3>{props.title}</h3>
        <a href="#"></a>
    </div>
  )
}

export default DestinationCard;