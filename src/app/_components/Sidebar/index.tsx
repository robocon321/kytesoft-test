import SummaryTripCard from "@/components/cards/SummaryTripCard/SummaryTripCard";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterest,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { HomeContext, HomeContextType } from "@/app/_provider/HomeProvider";

const trips = [
  {
    id: 0,
    title: "French Autumn",
    image: "/images/french-autumn.jpeg",
    current_price: 5000,
    real_price: 5000,
    location: "City Tours, Urban",
    star: 4,
    reviews: 4,
    createAt: "5 days",
  },
  {
    id: 1,
    title: "Grand Switzerland",
    image: "/images/grand-switherland.jpeg",
    current_price: 6000,
    real_price: 6000,
    location: "Shopping, Mountain, Snow & Ice",
    star: 4,
    reviews: 4,
    createAt: "6 days",
  },
];
export default function Sidebar(props: any) {
  const { showSidebar, setShowSidebar } = useContext(HomeContext) as HomeContextType;

  return (
    <div className={styles.container}>
      <div className={styles["wrap-sidebar"] + " " + (showSidebar && styles["active"])}>
        <div onClick={() => setShowSidebar(false)} className={styles["close-icon"]}></div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Tours</a>
          </li>
          <li>
            <a href="#">Booking</a>
          </li>
          <li>
            <a href="#">Destinations</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Shortcodes</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>
        <div className={styles["cards"]}>
          {trips.map((item) => (
            <SummaryTripCard key={item.id} {...item} />
          ))}
        </div>
        <ul className={styles["icons"]}>
          <li className={styles["facebook"]}>
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li className={styles["twitter"]}>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className={styles["youtube"]}>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li className={styles["pinterest"]}>
            <a href="#">
              <FontAwesomeIcon icon={faPinterest} />
            </a>
          </li>
          <li className={styles["instagram"]}>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
      {showSidebar && <a href="#" onClick={() => setShowSidebar(false)} className={styles["overlay"]}></a>}
    </div>
  );
}
