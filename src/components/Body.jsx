import { useState } from "react";
import ArticlesList from "./ArticlesList";
import { useEffect } from "react";
import { getArticles } from "../../utils";
import { Route, Routes, useSearchParams } from "react-router-dom";
import SingleArticleBody from "./SingleArticleBody";
import FourOhFour from "./FourOhFour";

function Body({selectedTopic, setSelectedTopic}) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  let sortByTest = (searchParams.get("sort_by"))
  const[sortOrder, setSortOrder] = useState("desc")
  const [error, setError] = useState({err:"", status:""})


  useEffect(() => {
    if(sortByTest === null){
      sortByTest = "votes"
    }
    getArticles(selectedTopic, sortByTest, sortOrder).then((res) => {
      setArticles(res);
      setIsLoading(false);
    }).catch((err)=> {
      setError({err: err.response.data.msg, status: err.response.status})
    });
  }, [selectedTopic, sortOrder]);

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div id="body">
      <div className="error">{error.err?`Error: ${error.err}`:""}</div>
      <Routes>
        <Route path="/"  element={<ArticlesList articles={articles} setSortOrder={setSortOrder}/>} />
        <Route path="/*" element={<FourOhFour />} />
        <Route path="/articles/" element={<ArticlesList articles={articles} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} setSortOrder={setSortOrder}/>} />
        <Route path="/articles/:article_id" element={<SingleArticleBody isLoading={isLoading} setIsLoading={setIsLoading}/>} />
        <Route path="/articles/topics/:topic" element={<ArticlesList articles={articles} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} setSortOrder={setSortOrder}/>} />
      </Routes>
    </div>
  );
}

export default Body;
