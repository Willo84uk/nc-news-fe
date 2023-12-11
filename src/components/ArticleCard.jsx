function ArticleCard({ article }) {
  if (article) {
    const createdAt = new Date(article.created_at);
    return (
      <div className="articlecard">
        <p>Votes {article.votes}</p>
        <img className="articlelistimg" src={article.article_img_url}></img>
        <h3> {article.title}</h3>
        <p>Article created {createdAt.toGMTString()}</p>
      </div>
    );
  }
}

export default ArticleCard;
