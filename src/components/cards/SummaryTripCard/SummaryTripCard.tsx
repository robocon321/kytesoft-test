import { Box } from "@mui/material";
import styles from "./SummaryTripCard.module.scss";
import { Diversity2Outlined } from "@mui/icons-material";

type SummaryTripCardProps = {
  id: number;
  title: string;
  image: string;
  current_price: number;
  real_price: number;
  location: string;
  star: number;
  reviews: number;
  createAt: string;
};

const SummaryTripCard: React.FC<SummaryTripCardProps> = (props) => {
  return (
    <a href="#" className={styles["container"]} suppressHydrationWarning>
      <div className={styles["image"]}>
        <img src={props.image} alt="Not found" />
      </div>
      <div className={styles["body"]}>
        {props.current_price != props.real_price && (
          <div className={styles["sale"]}>Sale</div>
        )}
        <div className={styles["price"]}>
          {props.current_price != props.real_price && (
            <div className={styles["real-price"]}>${props.real_price}</div>
          )}
          <div className={styles["current-price"]}>${props.current_price}</div>
        </div>
        <h3>{props.title}</h3>
        <div className={styles["review"]}>
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={
                index < props.star
                  ? styles["star"] + " " + styles["active"]
                  : styles["star"]
              }
            ></span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default SummaryTripCard;
