import { useState, useEffect} from "react";
import CommentCard from "./CommentCard";
import DeleteArticleButton from "./DeleteArticleButton.jsx";
import NewCommentForm from "./NewCommentForm";
import {  useParams } from "react-router-dom";
import { getComments } from "../../utils.js";

function CommentList() {
const [comments, setComments] = useState ([])
const articleId = useParams().article_id

useEffect(() => {
  getComments(articleId).then((comments) => {
    setComments(comments)
  })
}, [])

    return (
      <>
        <div id="commentlist"></div>
        <NewCommentForm />
        {comments.map((comment) => {
          return <CommentCard comment={comment}/>
        })}
        <DeleteArticleButton />
      </>
    );
  }
  
  export default CommentList;