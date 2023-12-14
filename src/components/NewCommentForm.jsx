import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { postNewComment } from "../../utils";
import { UserContext } from "./UserContext";

function NewCommentForm({comments, setComments}) {
  const [commentInput, setCommentInput] = useState("")
  const articleId = useParams().article_id
  const {user} = useContext(UserContext)
  const [error, setError] = useState(null)
    
  const handleChange = (event) => {
  setCommentInput(event.target.value)
  }

  const handleSubmit = () => {
    postNewComment({commentInput, articleId, user}).then((newComment) => {  
      setComments([...comments, newComment])
      setError(null)
    })
    .catch((err) => {
      setError({err:err.response.data.msg, status:err.response.status})
    })
    setCommentInput("")
  }

  if(!user){
    return <p className="error">You must be logged in to post a new comment</p>
  }
  
  return (
    
        <form id="newcommentform">
        <label htmlFor="comment">New comment (min 25 Char.):</label><br></br>
        <textarea value={commentInput} autoComplete="off" name="comment" id="comment" placeholder="Comment here" className="input-field" rows="4" cols="50" onChange={handleChange}></textarea><br></br>
        <button className={commentInput.length > 25 ? "submitbutton": "submitbuttoninactive"} disabled={commentInput.length > 25 ? false: true} onClick={handleSubmit}>Submit</button>
        {error ? <p className="error">Error: {error.status} {error.err}</p> : null}
        </form>
    );
  }
  
  export default NewCommentForm;