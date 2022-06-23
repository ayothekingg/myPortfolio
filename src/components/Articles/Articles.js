/** @format */
import article from "./Articles.module.css";

const Articles = () => {
  return (
    <div>
      <h3 className={article.articleError}>
        Oops! None available right now. Please check back later.{" "}
      </h3>
    </div>
  );
};

export default Articles;
