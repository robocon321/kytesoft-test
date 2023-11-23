import React from "react";
import styles from "./CommonButton.module.scss";

type CommonButtonProps = {
    content: string
}

const CommonButton: React.FC<CommonButtonProps> = (props) => {
  return (
    <button className={styles["button"]}>{props.content}</button>
  )
}

export default CommonButton;