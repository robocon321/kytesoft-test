import { Grid } from "@mui/material";
import styles from "./Setting.module.scss";
import DemoPageCard from "@/components/cards/DemoPageCard/DemoPageCard";
import { useContext } from "react";
import { HomeContext, HomeContextType } from "@/app/_provider/HomeProvider";

export default function Setting(props: any) {
    const { showSetting, setShowSetting } = useContext(HomeContext) as HomeContextType;

    return (
      <div className={styles["container"] + " " + (showSetting && styles["active"])}>
        <div className={styles["nav"]}>
            <span onClick={() => setShowSetting(!showSetting)}></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={styles["sidebar"]}>
            <h3>Created With Grand Tour</h3>
            <p>We designed Grand Tour theme to make it works especially for tour & travel site. Here are a few included examples that you can import with one click.</p>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={6}>
                    <DemoPageCard text="Demo 1" image="/images/demo1.jpg" />
                </Grid>
                <Grid item xs={6}>
                    <DemoPageCard text="Demo 1" image="/images/demo2.jpg" />
                </Grid>
            </Grid>
            <h3>Predefined Colors</h3>
            <div className={styles["colors"]}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h3>Predefined Stylings</h3>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={6}>
                    <DemoPageCard text="Left Align Menu" image="/images/demo1.jpg" />
                </Grid>
                <Grid item xs={6}>
                    <DemoPageCard text="Center Align" image="/images/demo1.jpg" />
                </Grid>
                <Grid item xs={6}>
                    <DemoPageCard text="Center Align + 2 Menu" image="/images/demo1.jpg" />
                </Grid>
                <Grid item xs={6}>
                    <DemoPageCard text="Fullscreen Menu" image="/images/demo3.jpg" />
                </Grid>
                <Grid item xs={6}>
                    <DemoPageCard text="Side Menu" image="/images/demo4.jpg" />
                </Grid>
                <Grid item xs={6}>
                    <DemoPageCard text="With Frame" image="/images/demo1.jpg" />
                </Grid>
                <Grid item xs={6}>
                    <DemoPageCard text="Box Layout" image="/images/demo5.jpg" />
                </Grid>
                <Grid item xs={6}>
                    <DemoPageCard text="With Top Bar" image="/images/demo1.jpg" />
                </Grid>
            </Grid>
        </div>
      </div>
    )
  }
  