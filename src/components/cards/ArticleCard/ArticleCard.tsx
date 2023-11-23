import styles from "./ArticleCard.module.scss";

type ArticleCardProps = {
    image: string,
    title: string,
    description: string,
    createAt: string
}

const ArticleCard: React.FC<ArticleCardProps> = (props) => {
    return (
      <a href="#" className={styles["container"]} suppressHydrationWarning>
          <div className={styles["image"]}>
            <img src={props.image} alt="Not found" />
          </div>
          <div className={styles["body"]}>
            <div className={styles["createAt"]}>{props.createAt}</div>
            <h3>{props.title}</h3>
            <p>{props.description.substring(0, 85) + "..."}</p>
            <a href="#">Read More</a>
          </div>
      </a>
    )
  }
  
  export default ArticleCard;