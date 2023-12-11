import { useEffect, useState } from "react";
import { getArticle, patchVote } from "../../utils";
import { useParams } from "react-router-dom";

function SingleArticle({ isLoading, setIsLoading }) {
  const [article, setArticle] = useState({});
  const [voted, setVoted] = useState(false);
  const [error, setError] = useState(false)
  const createdAt = new Date(article.created_at);
  const articleId = useParams().article_id;

  useEffect(() => {
    getArticle(articleId).then((res) => {
      setArticle(res);
      setIsLoading.setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  const castVote = (event) => {
    const voteAdj = event.target.id;
    setVoted(true);
    setError(false)
    const updatedArticle = { ...article };
    updatedArticle.votes += +voteAdj;
    setArticle(updatedArticle);
    patchVote({ voteValue: voteAdj, articleId: articleId }).then((res) => {
      if(res.status !== 200){
        updatedArticle.votes += -voteAdj
        setArticle(updatedArticle)
        setVoted(false)
        setError(true)
      }
    })
  };

  return (
    <div id="singlearticlebody">
      <h3>{article.title}</h3>
      <img className="singlearticleimg" src={article.article_img_url}></img>
      <article>{article.body}</article>
      <p>
        Written by {article.author} {createdAt.toGMTString()}
      </p>
      <button id="1" onClick={castVote} disabled={voted}>
        Vote Up!
      </button>
      <p> Votes {article.votes} </p>
      <button id="-1" onClick={castVote} disabled={voted}>
        Vote Down!
      </button>
      {error ? <p className="error">Error processing vote</p> : <></>}
      <p>Comments {article.comment_count} </p>
    </div>
  );
}

export default SingleArticle;
