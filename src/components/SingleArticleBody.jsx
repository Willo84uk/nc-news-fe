import CommentList from "./CommentsList";
import SingleArticle from "./SingleArticle";

function SingleArticleBody() {
  return (
    <>
      <div id="singlearticlebody"></div>
      <SingleArticle />
      <CommentList />
    </>
  );
}

export default SingleArticleBody;
