import { useState } from "react";
import ArticlesList from "./ArticlesList";
import { useEffect } from "react";
import { getArticles } from "../../utils";
import { Route, Routes } from "react-router-dom";
import SingleArticleBody from "./SingleArticleBody";

function Body() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div id="body">
      <Routes>
        <Route path="/" element={<ArticlesList articles={articles} />} />
        <Route path="/articles/" element={<ArticlesList articles={articles} />} />
        <Route path="/articles/:article_id" element={<SingleArticleBody />} />
      </Routes>
    </div>
  );
}

export default Body;
