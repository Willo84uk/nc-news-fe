function ArticleCard({ article }) {
  if (article) {
    const createdAt = new Date(article.created_at);
    return (
      <div className="articlecard">
        <div>Votes {article.votes}</div>
        <img className="articlelistimg" src={article.article_img_url}></img>
        <h3> {article.title}</h3>
        <div>Article created {createdAt.toGMTString()}</div>
      </div>
    );
  }
}

export default ArticleCard;
