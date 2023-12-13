import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  if (article) {
    const articleID = article.article_id.toString()
    const createdAt = new Date(article.created_at);
    return (
      <div className="articlecard">
        <img className="articlelistimg" src={article.article_img_url}></img>
        <p><Link to={`/articles/${articleID}`}>{article.title}</Link></p>
        <p>Votes {article.votes}</p>
        <p>Comment Count {article.comment_count}</p>
        <p>Article created {createdAt.toGMTString()}</p>
      </div>
    );
  }
}

export default ArticleCard;
