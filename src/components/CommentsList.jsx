import CommentCard from "./CommentCard";
import DeleteArticleButton from "./DeleteArticleButton.jsx";
import NewCommentForm from "./NewCommentForm";

function CommentList() {
    return (
      <>
        <div id="commentlist"></div>
        <NewCommentForm />
        <CommentCard />
        <DeleteArticleButton />
      </>
    );
  }
  
  export default CommentList;