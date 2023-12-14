import { useState } from "react";
import ArticlesList from "./ArticlesList";
import { useEffect } from "react";
import { getArticles } from "../../utils";
import { Route, Routes, redirectDocument, useNavigate } from "react-router-dom";
import SingleArticleBody from "./SingleArticleBody";
import FourOhFour from "./FourOhFour";

function Body({selectedTopic, setSelectedTopic}) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState ("votes")
  const[sortOrder, setSortOrder] = useState("desc")
  const [error, setError] = useState({err:"", status:""})

 
  useEffect(() => {
    getArticles(selectedTopic, sortBy, sortOrder).then((res) => {
      setArticles(res);
      setIsLoading(false);
    }).catch((err)=> {
      setError({err: err.response.data.msg, status: err.response.status})
    });
  }, [selectedTopic, sortOrder, sortBy]);

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div id="body">
      <div className="error">{error.err?`Error: ${error.err}`:""}</div>
      <Routes>
        <Route path="/"  element={<ArticlesList articles={articles} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} setSortOrder={setSortOrder} setSortBy={setSortBy}/>}/>
        <Route path="/*" element={<FourOhFour />} />
        <Route path="/articles/" element={<ArticlesList articles={articles} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} setSortOrder={setSortOrder} setSortBy={setSortBy}/>} />
        <Route path="/articles/:article_id" element={<SingleArticleBody isLoading={isLoading} setIsLoading={setIsLoading}/>} />
        <Route path="/articles/topics/:topic" element={<ArticlesList articles={articles} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} setSortOrder={setSortOrder} setSortBy={setSortBy}/>} />
      </Routes>
    </div>
  );
}

export default Body;
