import TripCard from "@/components/cards/TripCard/TripCard";
import GeneralTemplate from "../GeneralTemplate";
import { Grid } from "@mui/material";

const trips = [
  {
    id: 0,
    title: "French Autumn",
    image: "/images/french-autumn.jpeg",
    current_price: 5000,
    real_price: 5000,
    location: "City Tours, Urban",
    star: 4,
    reviews: 4,
    createAt: "5 days",
  },
  {
    id: 1,
    title: "Grand Switzerland",
    image: "/images/grand-switherland.jpeg",
    current_price: 6000,
    real_price: 6000,
    location: "Shopping, Mountain, Snow & Ice",
    star: 4,
    reviews: 4,
    createAt: "6 days",
  },
  {
    id: 2,
    title: "Discover Japan",
    image: "/images/discovery-japan.jpeg",
    current_price: 2500,
    real_price: 3000,
    location: "City Tours, Iconic",
    star: 4,
    reviews: 4,
    createAt: "5 days",
  },
];

const TripList = () => {
  return (
    <Grid container spacing={4} columns={12}>
      {trips.map((item) => (
        <Grid item xs={12} sm={4} md={4} key={item.title}>
          <TripCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default function TripSection() {
  return (
    <GeneralTemplate
      title="Best Value Trips"
      description="Best offers trips from us"
      Body={<TripList />}
    />
  );
}
