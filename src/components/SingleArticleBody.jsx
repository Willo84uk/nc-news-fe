import CommentList from "./CommentsList";
import SingleArticle from "./SingleArticle";

function SingleArticleBody({isLoading, setIsLoading}) {
  return (
    <>
      <SingleArticle isLoading={isLoading} setIsLoading={{setIsLoading}} />
      <CommentList />
    </>
  );
}

export default SingleArticleBody;
