import { useState } from "react";
import ArticlesList from "./ArticlesList";
import { useEffect } from "react";
import { getArticles } from "../../utils";
import { Route, Routes, useSearchParams } from "react-router-dom";
import SingleArticleBody from "./SingleArticleBody";

function Body({selectedTopic, setSelectedTopic}) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  let sortByTest = (searchParams.get("sort_by"))
  const[sortOrder, setSortOrder] = useState("desc")


  useEffect(() => {
    if(sortByTest === null){
      sortByTest = "votes"
    }
    getArticles(selectedTopic, sortByTest, sortOrder).then((res) => {
      setArticles(res);
      setIsLoading(false);
    });
  }, [selectedTopic, sortOrder]);

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div id="body">
      <Routes>
        <Route path="/"  element={<ArticlesList articles={articles} setSortOrder={setSortOrder}/>} />
        <Route path="/articles/" element={<ArticlesList articles={articles} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} setSortOrder={setSortOrder}/>} />
        <Route path="/articles/:article_id" element={<SingleArticleBody isLoading={isLoading} setIsLoading={setIsLoading}/>} />
        <Route path="/articles/topics/:topic" element={<ArticlesList articles={articles} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} setSortOrder={setSortOrder}/>} />
      </Routes>
    </div>
  );
}

export default Body;
