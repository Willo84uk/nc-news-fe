import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  if (article) {
    const articleID = article.article_id.toString();
    const createdAt = new Date(article.created_at);
    return (
      <Card id="articlecard"style={{ width: "45vw" }}>
        <Card.Img variant="top" src={article.article_img_url} />
        <Card.Body >
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>
          Votes {article.votes} <br></br>
         Comment Count {article.votes}<br></br>
         Article created {createdAt.toGMTString()}
         </Card.Text>
        </Card.Body>
         <Card.Footer>
          <Button as={Link} to={`/articles/${articleID}`} variant="primary">View Article</Button>
          </Card.Footer>
      </Card>
    );
  }
}

export default ArticleCard;
