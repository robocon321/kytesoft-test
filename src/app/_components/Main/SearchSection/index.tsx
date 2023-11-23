// import { Grid } from "@mui/material";
import { Grid } from "@mui/material";
import styles from "./index.module.scss";
import TextInput from "@/components/inputs/TextInput";
import SelectInput from "@/components/inputs/SelectInput";
import { useState } from "react";
import Button from "@/components/buttons/CommonButton/CommonButton";

const SearchIcon = () => {
  return <div className={styles["icon-search"]}></div>;
};

const CalendarIcon = () => {
  return <div className={styles["icon-calendar"]}></div>;
};

const SortIcon = () => {
  return <div className={styles["icon-sort"]}></div>;
};

const DownIcon = () => {
  return <div className={styles["icon-down"]}></div>;
};

const DollarIcon = () => {
  return <div className={styles["icon-dollar"]}></div>;
};

const months = [
  {
    key: "January",
    value: "1",
  },
  {
    key: "February",
    value: "2",
  },
  {
    key: "March",
    value: "3",
  },
  {
    key: "April",
    value: "4",
  },
  {
    key: "May",
    value: "5",
  },
  {
    key: "June",
    value: "6",
  },
  {
    key: "July",
    value: "7",
  },
  {
    key: "August",
    value: "8",
  },
  {
    key: "September",
    value: "9",
  },
  {
    key: "October",
    value: "10",
  },
  {
    key: "November",
    value: "11",
  },
  {
    key: "December",
    value: "12",
  },
];

const sorts = [
  {
    key: "Sort By Date",
    value: "date",
  },
  {
    key: "Price Low to High",
    value: "price_asc",
  },
  {
    key: "Price High to Low",
    value: "price_desc",
  },
  {
    key: "Sort By Name",
    value: "name",
  },
  {
    key: "Sort By Popularity",
    value: "popular",
  },
  {
    key: "Sort By Review Score",
    value: "score",
  },
];

const categories = [
  {
    key: "All Categories",
    value: "",
  },
  {
    key: "Mountain",
    value: "mountain",
  },
  {
    key: "Rural",
    value: "rural",
  },
  {
    key: "Snow & Ice",
    value: "snow-ice",
  },
  {
    key: "Wildlife",
    value: "wildlife",
  },
];

const destinations = [
  {
    key: "Tokyo",
    value: "277",
  },
  {
    key: "Seoul",
    value: "278",
  },
  {
    key: "Paris",
    value: "279",
  },
  {
    key: "London",
    value: "284",
  },
  {
    key: "Venice",
    value: "285",
  },
  {
    key: "Miami",
    value: "287",
  },
  {
    key: "Rome",
    value: "289",
  },
  {
    key: "Prague",
    value: "270",
  },
  {
    key: "California",
    value: "291",
  },
  {
    key: "Kyoto",
    value: "292",
  },
  {
    key: "Hong Kong",
    value: "293",
  },
  {
    key: "Santorini",
    value: "294",
  },
];

export default function SearchSection() {
  const [isSearchAdvance, setIsSetAdvance] = useState(false);
  return (
    <section>
      <div className={styles["jarallax-container"]}>
        <video className={styles["video-bg"]} autoPlay muted loop>
          <source src="/videos/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles["bg-overlay"]}></div>
        <div className={styles["content"]}>
          <h2>Where do you want to go?</h2>
          <p>Trips, experiences, and places. All in one service.</p>
          <Grid
            container
            spacing={{ xs: 1, md: 3 }}
            columns={12}
            className={styles["inputs"]}
          >
            <Grid item xs={12} md={3}>
              <TextInput
                name="location"
                placeholder="Destination, city"
                Icon={<SearchIcon />}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <SelectInput
                name="calendar"
                placeholder="Any Month"
                Icon={<CalendarIcon />}
                data={months}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <SelectInput
                name="sort"
                placeholder="Sort By Date"
                Icon={<SortIcon />}
                data={sorts}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Button content="Search" />
            </Grid>
            {isSearchAdvance && (
              <>
                <Grid item xs={12} md={3}>
                  <SelectInput
                    name="category"
                    placeholder="Sort By Date"
                    Icon={<DownIcon />}
                    data={categories}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <SelectInput
                    name="destination"
                    placeholder="Sort By Date"
                    Icon={<DownIcon />}
                    data={destinations}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextInput
                    name="budget"
                    placeholder="Max budget ex. 500"
                    Icon={<DollarIcon />}
                  />
                </Grid>
              </>
            )}
          </Grid>
          <div
            onClick={() => setIsSetAdvance(!isSearchAdvance)}
            className={styles["advanced-search"] + " " + (isSearchAdvance && styles["active"])}
          >
            Advanced Search
          </div>
        </div>
      </div>
    </section>
  );
}
