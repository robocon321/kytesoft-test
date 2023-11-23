import DestinationCard from "@/components/cards/DestinationCard/DestinationCard";
import GeneralTemplate from "../GeneralTemplate";
import { Grid } from "@mui/material";

const destinations = [
  {
    title: "Tokyo",
    image: "/images/tokyo.jpg",
  },
  {
    title: "Seoul",
    image: "/images/seoul.jpg",
  },
  {
    title: "Paris",
    image: "/images/paris.jpg",
  },
  {
    title: "London",
    image: "/images/london.jpg",
  },
];

const DestinationList = () => {
  return (
    <Grid container spacing={4} columns={12}>
      {destinations.map((item) => (
        <Grid item xs={12} sm={3} md={3} key={item.title}>
          <DestinationCard image={item.image} title={item.title} />
        </Grid>
      ))}
    </Grid>
  );
};

export default function DestinationSection() {
  return (
    <GeneralTemplate
      title="Popular Destinations"
      description="World's best tourist destinations"
      Body={<DestinationList />}
    />
  );
}
