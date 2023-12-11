function ArticleCard({ article }) {

    
    if(article){
      const createdAt = new Date (article.created_at)
  return (
    <div className="articlecard"> 
    <img className="articlelistimg" src={article.article_img_url}></img>
      <h3> {article.title} Article Card</h3>
      <div>Votes {article.votes}</div>
      <div>Article created {createdAt.toGMTString()}</div>
    </div>
  );
}
}

export default ArticleCard;
