import { FC } from "react";
import classes from "./BlogCards.module.css";
import BlogCard from "./BlogCard";

interface BlogCardsProps {}

const BlogCards: FC<BlogCardsProps> = ({}) => {
  return (
    <div className={classes.container}>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default BlogCards;
