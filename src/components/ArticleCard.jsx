import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  if (article) {
    const articleID = article.article_id.toString();
    const createdAt = new Date(article.created_at);
    return (
      <Card id="articlecard"style={{ width: "45vw" }}>
        <Card.Img variant="top" src={article.article_img_url} style={{ height: '210px' }} />
        <Card.Header style={{ height: '110px' }}>
          <Card.Title style={{fontSize: "14pt", fontWeight: "bold"}} as={Link} to={`/articles/${articleID}`}>{article.title}</Card.Title>
        </Card.Header>
        <Card.Body >
          <Card.Text>
         Votes {article.votes} <br></br>
         Comment Count {article.votes}
         </Card.Text>
         <p className="stamp">Article created {createdAt.toGMTString()} by {article.author}</p>
        </Card.Body>
      </Card>
    );
  }
}

export default ArticleCard;
