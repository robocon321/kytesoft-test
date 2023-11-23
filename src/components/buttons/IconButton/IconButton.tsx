import React from "react";
import styles from "./IconButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

type IconButtonProps = {
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <button onClick={() => props.onClick()} className={styles["button"]}>
        <FontAwesomeIcon icon={faChevronUp} />
    </button>
  )
}

export default IconButton;