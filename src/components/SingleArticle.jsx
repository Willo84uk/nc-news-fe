import { useEffect, useState } from "react";
import { getArticle } from "../../utils";
import {  useParams } from "react-router-dom";

function SingleArticle({isLoading, setIsLoading}) {
  const [article, setArticle] = useState ({})
  const createdAt = new Date(article.created_at);
  const articleId = useParams().article_id


  useEffect(() => {
    getArticle(articleId).then((res) => {
      setArticle(res)
      setIsLoading.setIsLoading(false)
    })
  },[])

  if(isLoading){
    return <>Loading...</>
  }

    return (
      <div id="singlearticlebody">
        <h3>{article.title}</h3>
        <img className="singlearticleimg" src={article.article_img_url}></img>
        <article>{article.body}</article>
        <p>Written by {article.author} {createdAt.toGMTString()}</p>
        <p>Votes {article.votes}</p>
      </div>
    );
  }
  
  export default SingleArticle;