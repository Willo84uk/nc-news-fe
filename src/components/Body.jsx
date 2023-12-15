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
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const sortCriteria = searchParams.get("sort_by")
    const ascOrDesc = searchParams.get("order")
    
    const pathTopic = location.pathname.split("/")[3]
    if(pathTopic !== selectedTopic ){
      setSelectedTopic(pathTopic)
    } else {
    getArticles(selectedTopic, sortCriteria, ascOrDesc).then((res) => {
      setArticles(res);
      setIsLoading(false);
    }).catch((err)=> {
      setIsLoading(false)
      setError({err: err.response.data.msg, status: err.response.status})
    });
}}, [selectedTopic, sortOrder, sortBy, searchParams]);

  if (isLoading) {
    return (<p>"Loading...this could take a few moments whilst the server wakes up";</p>)
  }

  return (
    <div id="body">
      <div className="error">{error.err?`Error: ${error.err}`:""}</div>
      <Routes>
        <Route path="/"  element={<ArticlesList articles={articles} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} setSortOrder={setSortOrder} setSortBy={setSortBy} sortBy={sortBy} sortOrder={sortOrder} setSearchParams={setSearchParams} searchParams={searchParams}/>}/>
        <Route path="/*" element={<FourOhFour />} />
        <Route path="/articles/"  element={<ArticlesList articles={articles} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} setSortOrder={setSortOrder} setSortBy={setSortBy} sortBy={sortBy} sortOrder={sortOrder} setSearchParams={setSearchParams} searchParams={searchParams}/>} />
        <Route path="/articles/:article_id"  element={<SingleArticleBody isLoading={isLoading} setIsLoading={setIsLoading}/>} />
        <Route path="/articles/topics/:topic" element={<ArticlesList articles={articles} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} setSortOrder={setSortOrder} setSortBy={setSortBy} sortBy={sortBy} sortOrder={sortOrder} setSearchParams={setSearchParams} searchParams={searchParams}/>} />
      </Routes>
    </div>
  );
}

export default Body;
