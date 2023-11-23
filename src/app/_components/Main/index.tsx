import styles from "./index.module.scss";
import SearchSection from "./SearchSection";
import DestinationSection from "./DestinationSection";
import TripSection from "./TripSection";
import ReasonSection from "./ReasonSection";
import ArticleSection from "./ArticleSection";

export default function Main() {
  return (
    <main>
      <SearchSection />
      <DestinationSection />
      <TripSection />
      <ReasonSection />
      <div className={styles["banner"]}></div>
      <ArticleSection />
    </main>
  );
}