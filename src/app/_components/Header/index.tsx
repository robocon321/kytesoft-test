import { Container, Grid } from "@mui/material";
import Navbar from "./Navbar";
import styles from "./index.module.scss";
import Logo from "./Logo";
import { useEffect, useState } from "react";

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if(window.innerWidth < 1220) {
      setShow(true);
      return;
    }
    if (window.scrollY > lastScrollY) {
      setShow(false); 
    } else {
      setShow(true);  
    }
    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header className={styles["wrap-container"] + " " + (show && styles["active"]) + " " + (lastScrollY != 0 && styles["non-top"])}>
      <Container  className={styles["container"]}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Logo isNonTop={lastScrollY != 0} />
          <Navbar />
        </Grid>
      </Container>
    </header>
  );
}
