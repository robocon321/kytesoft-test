import { Box } from "@mui/material";
import styles from "./TripCard.module.scss";

type TripCardProps = {
  id: number,
  title: string,
  image: string,
  current_price: number,
  real_price: number,
  location: string,
  star: number,
  reviews: number,
  createAt: string
}

const TripCard: React.FC<TripCardProps> = (props) => {
  return (
    <a href="#" className={styles["container"]} suppressHydrationWarning>
        <div className={styles["image"]}>
          <img src={props.image} alt="Not found" />
        </div>
        <div className={styles["body"]}>
          <h3>{props.title}</h3>
          <p>{props.location}</p>
          <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
            <div className={styles["review"]}>
              {
                Array.from({ length: 5}, (_, index) => (
                  <span key={index} className={index < props.star ? styles['star'] + " " + styles["active"] : styles['star']}></span>
                ))            
              }
              <a href="#">{props.reviews + " reviews"}</a>
            </div>
            <div className={styles["createAt"]}>
              {props.createAt}
            </div>
          </Box>
        </div>
        {props.current_price != props.real_price && <div className={styles["sale"]}>Sale</div>}        
        <div className={styles["price"]}>
          {props.current_price != props.real_price && <div className={styles["real-price"]}>${props.real_price}</div>}
          <div className={styles["current-price"]}>${props.current_price}</div>
        </div>
    </a>
  )
}

export default TripCard;