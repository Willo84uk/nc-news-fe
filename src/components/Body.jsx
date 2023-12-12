import { useState } from "react";
import ArticlesList from "./ArticlesList";
import { useEffect } from "react";
import { getArticles } from "../../utils";
import { Route, Routes } from "react-router-dom";
import SingleArticleBody from "./SingleArticleBody";

function Body({selectedTopic, setSelectedTopic}) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [selectedTopic, setSelectedTopic] = useState("")

  useEffect(() => {
    getArticles(selectedTopic).then((res) => {
      setArticles(res);
      setIsLoading(false);
    });
  }, [selectedTopic]);

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div id="body">
      <Routes>
        <Route path="/" element={<ArticlesList articles={articles} />} />
        <Route path="/articles/" element={<ArticlesList articles={articles} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>} />
        <Route path="/articles/:article_id" element={<SingleArticleBody isLoading={isLoading} setIsLoading={setIsLoading}/>} />
        <Route path="/articles/topics/:topic" element={<ArticlesList articles={articles} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>} />
      </Routes>
    </div>
  );
}

export default Body;
