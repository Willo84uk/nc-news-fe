import { useContext, useEffect, useState } from "react";
import { getArticle, patchVote } from "../../utils";
import { useParams } from "react-router-dom";
import { UserContext } from "./UserContext";

function SingleArticle({ isLoading, setIsLoading }) {
  const [article, setArticle] = useState({});
  const [voted, setVoted] = useState(false);
  const [error, setError] = useState({err:"", status:""})
  const [lastVote, setLastVote] = useState(0)
  const createdAt = new Date(article.created_at);
  const articleId = useParams().article_id;
  const {user} = useContext(UserContext)
  

  useEffect(() => {
    getArticle(articleId).then((res) => {
      setArticle(res);
      setIsLoading.setIsLoading(false);
    }).catch((err) => {
      setError({err:err.response.data.msg, status:err.response.status})
      setIsLoading.setIsLoading(false)
    });
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

if(error.err && error.err==="article not found with this article id" || error.err==="bad request"){
  return <>{error.err ? <p className="error">Error: {error.status} {error.err}</p> : <></>}</>
}

  const castVote = (event) => {
    const voteAdj = event.target.id;
    setVoted(true);
    setError({err:"", status:""})
    const updatedArticle = { ...article };
    if(event.target.innerText === "Undo Vote!"){
      setVoted(false)
    }
    updatedArticle.votes += +voteAdj;
    setArticle(updatedArticle);
    setLastVote(+voteAdj)
    patchVote({ voteValue: voteAdj, articleId: articleId }).then((res) => {
    }).catch((err) => {
      updatedArticle.votes += -voteAdj
        setArticle(updatedArticle)
        setVoted(false)
        setLastVote(0)
        setError({err:err.response.data.msg, status:err.response.status})
  })
  };

  return (
    <div id="singlearticlebody">
      <h3>{article.title}</h3>
      <img className="singlearticleimg" src={article.article_img_url}></img>
      <article>{article.body}</article>
      <p className="stamp">
        Written by {article.author} {createdAt.toGMTString()}
      </p>
      <p className="votes">
      Votes {article.votes} <br></br>
      <i className="fa-regular fa-thumbs-up votes up" id="1" onClick={castVote} hidden={voted || article.author === user}></i>
      <i className="fa-regular fa-thumbs-down votes down" id="-1" onClick={castVote} hidden={voted || article.votes === 0 || article.author === user}></i>
      <button id={lastVote>0? "-1" : "1"} className="votes undo" onClick={castVote} hidden={!voted}>
        Undo Vote!
      </button>
      </p>
      {error.err ? <p className="error">Error: {error.status} {error.err}</p> : <></>}
     <p className="votes"> Comments {article.comment_count} </p>
    </div>
  );
}

export default SingleArticle;
