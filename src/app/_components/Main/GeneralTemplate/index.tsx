import { Container } from "@mui/material";
import React from "react";
import styles from "./index.module.scss";

type GeneralTemplateProps = {
    title: string,
    description: string,
    Body: React.ReactNode
}


const GeneralTemplate: React.FC<GeneralTemplateProps> = (props) => {
  return (
    <section className={styles["general-template"]}>
      <Container>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <div>
              {props.Body}
          </div>
      </Container>
    </section>
  )
}

export default GeneralTemplate;