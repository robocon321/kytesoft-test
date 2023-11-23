import React from "react"
import styles from "./TextInput.module.scss";

type TextInputProps = {
    placeholder: string,
    name: string,
    Icon: React.ReactNode
}

const TextInput : React.FC<TextInputProps> =  (props) => {
  return (
    <div className={styles["container"]}>
        <input className={styles["input"]} type="text" name={props.name} placeholder={props.placeholder}  />
        {props.Icon}
    </div>
  )
}

export default TextInput;