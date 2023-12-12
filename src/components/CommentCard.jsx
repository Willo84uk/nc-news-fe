import { useContext, useState } from "react";
import { UserContext } from "./UserContext"
import { deleteComment } from "../../utils";

function CommentCard({comment}) {
  const createdAt = new Date(comment.created_at);
  const {user} = useContext(UserContext)
  const [error, setError] = useState(null)

  const handleClick = (event) => {
    const commentId = event.target.id
    event.currentTarget.disabled = true 
    setError(null)
    deleteComment(commentId)
    .catch((err) => {
      setError({err:err.response.data.msg, status:err.response.status})
      event.target.disabled = false
    })
  }

  return (
      <div id="commentcard">
        <p>{comment.body}</p>
        <p>Written by {comment.author} {createdAt.toGMTString()}</p>
        <p>Votes {comment.votes}</p>
        {user===comment.author? <button id={comment.comment_id} onClick={handleClick}>Delete Comment</button>:null}
        {error? <p className="error">Error: {error.status} {error.err}</p>:null}
      </div>
    );
  }
  
  export default CommentCard;