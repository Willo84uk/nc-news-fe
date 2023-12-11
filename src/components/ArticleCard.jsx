function ArticleCard({ article }) {
  
  if(article){
  return (
    <div className="articlecard"> 
    <img className="articlelistimg" src={article.article_img_url}></img>
      <h3> {article.title} Article Card</h3>
    </div>
  );
}
}

export default ArticleCard;
