"use client";

import { ThemeProvider, createTheme } from "@mui/material";
import Header from "./_components/Header";
import Main from "./_components/Main";
import Footer from "./_components/Footer";
import Sidebar from "./_components/Sidebar";
import styles from "./page.module.scss";
import { useContext, useEffect, useState } from "react";
import { HomeContext, HomeContextType } from "./_provider/HomeProvider";
import Setting from "./_components/Setting/Setting";
import IconButton from "@/components/buttons/IconButton/IconButton";

export default function Home() {
  const { showSidebar } = useContext(HomeContext) as HomeContextType;

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling behavior
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={"" + (showSidebar && "overflow-hidden blur h-full")}>
      <ThemeProvider theme={theme}>
        <Sidebar />
        <Header />
        <Main />
        <Footer />
        <Setting />
        {isVisible && <IconButton onClick={scrollToTop} /> }
      </ThemeProvider>
    </div>
  );
}
