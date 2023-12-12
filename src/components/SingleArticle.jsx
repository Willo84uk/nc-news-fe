import { useEffect, useState } from "react";
import { getArticle, patchVote } from "../../utils";
import { useParams } from "react-router-dom";

function SingleArticle({ isLoading, setIsLoading }) {
  const [article, setArticle] = useState({});
  const [voted, setVoted] = useState(false);
  const [error, setError] = useState(null)
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
    setError(null)
    const updatedArticle = { ...article };
    updatedArticle.votes += +voteAdj;
    setArticle(updatedArticle);
    patchVote({ voteValue: voteAdj, articleId: articleId }).then((res) => {
    }).catch((err) => {
      updatedArticle.votes += -voteAdj
        setArticle(updatedArticle)
        setVoted(false)
        setError({err:err.response.data.msg, status:err.response.status})
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
      {error ? <p className="error">Error processing vote: {error.status} {error.err}</p> : <></>}
      <p>Comments {article.comment_count} </p>
    </div>
  );
}

export default SingleArticle;
