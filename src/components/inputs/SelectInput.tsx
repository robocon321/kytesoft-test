import React from "react"
import styles from "./SelectInput.module.scss";

type SelectInputProps = {
    placeholder?: string,
    name: string,
    Icon: React.ReactNode,
    data: Map[]
}

type Map = {
    key: string,
    value: string
}

const SelectInput : React.FC<SelectInputProps> =  (props) => {
  return (
    <div className={styles["container"]}>
        <select name={props.name} defaultValue={0}>
            {props.placeholder && <option value={0}>{props.placeholder}</option>}
            {
                props.data.map(item => (
                    <option key={item.value} value={item.value}>{item.key}</option>
                ))
            }
        </select>
        {props.Icon}
    </div>
  )
}

export default SelectInput;