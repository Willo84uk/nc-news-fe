import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  if (article) {
    const articleID = article.article_id.toString()
    const createdAt = new Date(article.created_at);
    return (
      <div className="articlecard">
        <p>Votes {article.votes}</p>
        <img className="articlelistimg" src={article.article_img_url}></img>
        <Link to={articleID}>{article.title}</Link>
        <p>Article created {createdAt.toGMTString()}</p>
      </div>
    );
  }
}

export default ArticleCard;
