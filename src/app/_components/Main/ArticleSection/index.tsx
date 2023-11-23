import ArticleCard from "@/components/cards/ArticleCard/ArticleCard";
import GeneralTemplate from "../GeneralTemplate";
import { Grid } from "@mui/material";

const articles = [
  {
    id: 0,
    title: "Memorial Day to Someone Told Me to Travel",
    image: "/images/article-1.jpg",
    description: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko tempor duis single-origin coffee. Banksy, elit small batch freegan sed",
    createAt: "DECEMBER 10, 2016"
  },
  {
    id: 1,
    title: "7 Tips For Nomads On A Budget Trips",
    image: "/images/article-2.jpeg",
    description: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko tempor duis single-origin coffee. Banksy, elit small batch freegan sed",
    createAt: "DECEMBER 10, 2016"
  },
  {
    id: 2,
    title: "Taking A Travel Blog Victory Lap",
    image: "/images/article-3.jpg",
    description: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko tempor duis single-origin coffee. Banksy, elit small batch freegan sed",
    createAt: "DECEMBER 10, 2016"
  },
];

const ArticleList = () => {
  return (
    <Grid container spacing={4} columns={12}>
      {articles.map((item) => (
        <Grid item xs={12} sm={4} md={4} key={item.title}>
          <ArticleCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default function ArticleSection() {
  return (
    <GeneralTemplate
      title="Articles & Tips"
      description="Explore some of the best tips from around the world"
      Body={<ArticleList />}
    />
  );
}
