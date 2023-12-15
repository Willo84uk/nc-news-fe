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
  const [sortBy, setSortBy] = useState ("votes")
  const[sortOrder, setSortOrder] = useState("desc")
  const [error, setError] = useState({err:"", status:""})
  const [searchParams, setSearchparams] = useSearchParams()

  
  
  
  useEffect(() => {
    const searchCriteria = searchParams.get("sort_by")
    const pathTopic = location.pathname.split("/")[3]
    if(pathTopic !== selectedTopic ){
      setSelectedTopic(pathTopic)
      setSortBy(searchCriteria)
    } else {
    getArticles(selectedTopic, sortBy, sortOrder).then((res) => {
      setArticles(res);
      setIsLoading(false);
    }).catch((err)=> {
      setIsLoading(false)
      setError({err: err.response.data.msg, status: err.response.status})
    });
}}, [selectedTopic, sortOrder, sortBy]);

  if (isLoading) {
    return (<p>"Loading...this could take a few moments whilst the server wakes up";</p>)
  }

  return (
    <div id="body">
      <div className="error">{error.err?`Error: ${error.err}`:""}</div>
      <Routes>
        <Route path="/"  element={<ArticlesList articles={articles} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} setSortOrder={setSortOrder} setSortBy={setSortBy} sortBy={sortBy} sortOrder={sortOrder}/>}/>
        <Route path="/*" element={<FourOhFour />} />
        <Route path="/articles/"  element={<ArticlesList articles={articles} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} setSortOrder={setSortOrder} setSortBy={setSortBy} sortBy={sortBy} sortOrder={sortOrder}/>} />
        <Route path="/articles/:article_id"  element={<SingleArticleBody isLoading={isLoading} setIsLoading={setIsLoading}/>} />
        <Route path="/articles/topics/:topic" element={<ArticlesList articles={articles} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} setSortOrder={setSortOrder} setSortBy={setSortBy} sortBy={sortBy} sortOrder={sortOrder}/>} />
      </Routes>
    </div>
  );
}

export default Body;
