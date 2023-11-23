import { Box, Container, Grid } from "@mui/material";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faPinterest, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
        <Container>
            <Grid container spacing={4} columns={12}>
                <Grid item xs={12} md={4}>
                    <div className={styles["award"]}>
                        <h3>Our Awards</h3>
                        <p>London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.</p>
                        <div className={styles["image"]}>
                            <img src="/images/awards.png" alt="Not found" />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className={styles["contact"]}>
                        <h3>Contact Info</h3>
                        <p>
                            <span className={styles["icon"] + " " + styles["phone"]}></span>
                            <span className={styles["content"]}>1-567-124-44227</span>
                        </p>
                        <p>
                            <span className={styles["icon"] + " " + styles["locate"]}></span>
                            <span className={styles["content"]}>184 Main Street East Perl Habour 8007</span>
                        </p>
                        <p>
                            <span className={styles["icon"] + " " + styles["alarm"]}></span>
                            <span className={styles["content"]}>Mon - Sat 8.00 - 18.00 Sunday CLOSED</span>
                        </p>
                        <ul>
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
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className={styles["recent-trip"]}>
                        <h3>Recent Trips</h3>                        
                        <Grid container spacing={1} columns={12}>
                            <Grid item xs={4}>
                                <img src="/images/trip-1.jpg" alt="Not found" />
                            </Grid>
                            <Grid item xs={4}>
                                <img src="/images/trip-2.jpg" alt="Not found" />
                            </Grid>
                            <Grid item xs={4}>
                                <img src="/images/trip-3.jpg" alt="Not found" />
                            </Grid>
                            <Grid item xs={4}>
                                <img src="/images/trip-4.jpg" alt="Not found" />
                            </Grid>
                            <Grid item xs={4}>
                                <img src="/images/trip-5.jpg" alt="Not found" />
                            </Grid>
                            <Grid item xs={4}>
                                <img src="/images/trip-6.jpg" alt="Not found" />
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
            <hr />
            <Grid container sx={{ flexDirection: { xs: "column-reverse", md: "row"}, justifyContent: "space-between"}}>
                <div className={styles["copyright"]}>© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Tours</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Purchase Theme</a></li>
                </ul>
            </Grid>
        </Container>
    </footer>
  )
}
