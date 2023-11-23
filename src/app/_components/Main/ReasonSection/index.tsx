import ReasonCard from "@/components/cards/ReasonCard/ReasonCard";
import GeneralTemplate from "../GeneralTemplate";
import { Grid } from "@mui/material";

const reasons = [
  {
    id: 0,
    title: "Handpicked Hotels",
    image: "/images/handpicked-hotels.png",
    description:
      "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
  {
    id: 1,
    title: "World Class Service",
    image: "/images/world-service.png",
    description:
      "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
  {
    id: 2,
    title: "Best Price Guarantee",
    image: "/images/best-price.png",
    description:
      "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
];

const ReasonList = () => {
  return (
    <Grid container spacing={4} columns={12}>
      {reasons.map((item) => (
        <Grid item xs={12} sm={4} md={4} key={item.id}>
          <ReasonCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default function ReasonSection() {
  return (
    <GeneralTemplate
      title="Why Choose Us"
      description="Here are reasons you should plan trip with us"
      Body={<ReasonList />}
    />
  );
}
