import Link from "next/link";
import styles from "./index.module.scss";
import { useContext } from "react";
import { HomeContext, HomeContextType } from "@/app/_provider/HomeProvider";

export default function Navbar() {
  const { setShowSidebar } = useContext(HomeContext) as HomeContextType;
  return (
    <div>
      <ul className={styles["nav-items"]}>
        <li className={styles["nav-item"]}>
          <Link
            className={styles["nav-link"] + " " + styles["down-icon"]}
            href="#"
          >
            Home
          </Link>
          <ul className={styles["submenu-top"]}>
            <li>
              <a href="#">Home 1 - Background Image</a>
            </li>
            <li>
              <a href="#">Home 2 - Youtube Video</a>
            </li>
            <li>
              <a href="#">Home 3 - Google inspired</a>
            </li>
            <li>
              <a href="#">Home 4 - Travel Site</a>
            </li>
          </ul>
        </li>
        <li className={styles["nav-item"]}>
          <Link
            className={styles["nav-link"] + " " + styles["down-icon"]}
            href="#"
          >
            Tours
          </Link>
          <ul className={styles["submenu-top"]}>
            <li className={styles["right-arrow"]}>
              <a href="#">Tour Classic Fullwidth</a>
              <ul className={styles["submenu-right"]}>
                <li>
                  <a href="#">2 Columns</a>
                </li>
                <li>
                  <a href="#">3 Columns</a>
                </li>
                <li>
                  <a href="#">4 Columns</a>
                </li>
              </ul>
            </li>
            <li className={styles["right-arrow"]}>
              <a href="#">Tour Classic Sidebar</a>
              <ul className={styles["submenu-right"]}>
                <li>
                  <a href="#">Right Sidebar</a>
                </li>
                <li>
                  <a href="#">Left Sidebar</a>
                </li>
              </ul>
            </li>
            <li className={styles["right-arrow"]}>
              <a href="#">Tour Grid Fullwidth</a>
              <ul className={styles["submenu-right"]}>
                <li>
                  <a href="#">2 Columns</a>
                </li>
                <li>
                  <a href="#">3 Columns</a>
                </li>
                <li>
                  <a href="#">4 Columns</a>
                </li>
              </ul>
            </li>
            <li className={styles["right-arrow"]}>
              <a href="#">Tour Grid Sidebar</a>
              <ul className={styles["submenu-right"]}>
                <li>
                  <a href="#">Right Sidebar</a>
                </li>
                <li>
                  <a href="#">Left Sidebar</a>
                </li>
              </ul>
            </li>
            <li className={styles["right-arrow"]}>
              <a href="#">Tour List Sidebar</a>
              <ul className={styles["submenu-right"]}>
                <li>
                  <a href="#">Right Sidebar</a>
                </li>
                <li>
                  <a href="#">Left Sidebar</a>
                </li>
              </ul>
            </li>
            <li className={styles["right-arrow"]}>
              <a href="#">Tour Header Type</a>
              <ul className={styles["submenu-right"]}>
                <li>
                  <a href="#">Featured Image</a>
                </li>
                <li>
                  <a href="#">Video</a>
                </li>
              </ul>
            </li>
            <li className={styles["right-arrow"]}>
              <a href="#">Tour Categories</a>
              <ul className={styles["submenu-right"]}>
                <li>
                  <a href="#">Rural</a>
                </li>
                <li>
                  <a href="#">Snow & Ice</a>
                </li>
                <li>
                  <a href="#">Wildlife</a>
                </li>
                <li>
                  <a href="#">Mountain</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className={styles["nav-item"]}>
          <Link
            className={styles["nav-link"] + " " + styles["down-icon"]}
            href="#"
          >
            Booking
          </Link>
          <ul className={styles["submenu-top"]}>
            <li className={styles["right-arrow"]}>
              <a href="#">Online Payment for Booking</a>
              <ul className={styles["submenu-right"]}>
                <li>
                  <a href="#">Variable Tour Pricing</a>
                </li>
                <li>
                  <a href="#">Simple Tour Pricing</a>
                </li>
              </ul>
            </li>
            <li className={styles["right-arrow"]}>
              <a href="#">Custom Booking Form</a>
              <ul className={styles["submenu-right"]}>
                <li>
                  <a href="#">Booking Form + Sub Tour Date</a>
                </li>
                <li>
                  <a href="#">Booking Form + Custom Date</a>
                </li>
              </ul>
            </li>
            <li className={styles["right-arrow"]}>
              <a href="#">Tour Durations</a>
              <ul className={styles["submenu-right"]}>
                <li>
                  <a href="#">Single Day Tour</a>
                </li>
                <li>
                  <a href="#">Multiple Days Tour</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Tour Durations</a>
            </li>
            <li>
              <a href="#">Custom Booking URL for Affiliate Tour</a>
            </li>
            <li>
              <a href="#">Custom Booking using custom HTML & Shortcode</a>
            </li>
            <li className={styles["right-arrow"]}>
              <a href="#">Header Options</a>
              <ul className={styles["submenu-right"]}>
                <li>
                  <a href="#">Standard Background Header</a>
                </li>
                <li>
                  <a href="#">Video Background Header</a>
                </li>
              </ul>
            </li>
            <li className={styles["right-arrow"]}>
              <a href="#">Layout Options</a>
              <ul className={styles["submenu-right"]}>
                <li>
                  <a href="#">With Sidebar</a>
                </li>
                <li>
                  <a href="#">Fullwidth</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className={styles["nav-item"]}>
          <Link
            className={styles["nav-link"] + " " + styles["down-icon"]}
            href="#"
          >
            Destinations
          </Link>
          <ul className={styles["submenu-top"]}>
            <li>
              <a href="#">Destination Fullwidth</a>
            </li>
            <li>
              <a href="#">Destination + Video Header</a>
            </li>
            <li>
              <a href="#">Destination Left Sidebar</a>
            </li>
            <li>
              <a href="#">Single Destination</a>
            </li>
            <li>
              <a href="#">Single Destination + Video</a>
            </li>
          </ul>
        </li>
        <li className={styles["nav-item"]}>
          <Link
            className={styles["nav-link"] + " " + styles["down-icon"]}
            href="#"
          >
            Pages
          </Link>
          <ul className={styles["submenu-top"]}>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Page Fullwidth</a>
            </li>
            <li>
              <a href="#">Page + Video Background Header</a>
            </li>
            <li>
              <a href="#">Page Right Sidebar</a>
            </li>
            <li>
              <a href="#">Page Left Sidebar</a>
            </li>
          </ul>

        </li>
        <li className={styles["nav-item"]}>
          <Link
            className={styles["nav-link"] + " " + styles["down-icon"]}
            href="#"
          >
            Blog
          </Link>
          <ul className={styles["submenu-top"]}>
            <li>
              <a href="#">Blog Right Sidebar</a>
            </li>
            <li>
              <a href="#">Blog Left Sidebar</a>
            </li>
            <li>
              <a href="#">Blog Fullwidth</a>
            </li>
            <li>
              <a href="#">Blog Grid Right Sidebar</a>
            </li>
            <li>
              <a href="#">Blog Grid Left Sidebar</a>
            </li>
            <li>
              <a href="#">Blog Grid Fullwidth</a>
            </li>
            <li>
              <a href="#">Blog Full + Grid Right Sidebar</a>
            </li>
            <li>
              <a href="#">Blog Full + Grid Left Sidebar</a>
            </li>
            <li>
              <a href="#">Blog Full + Grid Fullwidth</a>
            </li>
          </ul>
        </li>
        <li className={styles["nav-item"]}>
          <Link
            className={styles["nav-link"] + " " + styles["down-icon"]}
            href="#"
          >
            Shortcodes
          </Link>
          <ul className={styles["submenu-top"]}>
            <li>
              <a href="#">Accordion & Toggles</a>
            </li>
            <li>
              <a href="#">Alert Boxes</a>
            </li>
            <li>
              <a href="#">Animated Content</a>
            </li>
            <li>
              <a href="#">Buttons & Social Icons</a>
            </li>
            <li>
              <a href="#">Columns</a>
            </li>
            <li>
              <a href="#">Google Maps</a>
            </li>
            <li>
              <a href="#">Image Frame & Animation</a>
            </li>
            <li>
              <a href="#">Image Teasers</a>
            </li>
            <li>
              <a href="#">Pricing Tables</a>
            </li>
            <li>
              <a href="#">Tabs</a>
            </li>
          </ul>
        </li>
        <li className={styles["nav-item"]}>
          <Link
            className={styles["nav-link"] + " " + styles["down-icon"]}
            href="#"
          >
            Shop
          </Link>
          <ul className={styles["submenu-top"]}>
            <li>
              <a href="#">Shop Fullwidth</a>
            </li>
            <li>
              <a href="#">Shop Sidebar</a>
            </li>
            <li>
              <a href="#">Single Product Fullwidth</a>
            </li>
            <li>
              <a href="#">Single Product With Sidebar</a>
            </li>
            </ul>
        </li>
        <li className={styles["nav-item"] + " " + styles["nav-icon"]} onClick={() => setShowSidebar(true)}>
          <Link className={styles["nav-link"]} href="#">
            <span className={styles["nav-icon"]}></span>
          </Link>
        </li>
        <li className={styles["nav-item"] + " " + styles["nav-icon"]}>
          <Link className={styles["nav-link"]} href="#">
            <span className={styles["cart-icon"]}></span>
            <span className={styles["cart-amount"]}>0</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
