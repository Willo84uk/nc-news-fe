import { useState, useEffect} from "react";
import CommentCard from "./CommentCard";
import DeleteArticleButton from "./DeleteArticleButton.jsx";
import NewCommentForm from "./NewCommentForm";
import {  useParams } from "react-router-dom";
import { getComments } from "../../utils.js";

function CommentList() {
const [comments, setComments] = useState ([])
const [isLoading, setIsLoading] = useState(true)
const articleId = useParams().article_id
const [error, setError] = useState(false)

useEffect(() => {
  getComments(articleId).then((comments) => {
    setComments(comments)
    setIsLoading(false)
    setError(false)
  }).catch((err) => {
    setIsLoading(false)
    setError(true)
  })
}, [comments])

if(isLoading){
  return <p>Loading...</p>
}

    return (
      <>
        <div id="commentlist"></div>
        {!error?<NewCommentForm comments={comments} setComments={setComments}/>:null}
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment}/>
        })}
        {/* <DeleteArticleButton /> */}
      </>
    );
  }
  
  export default CommentList;