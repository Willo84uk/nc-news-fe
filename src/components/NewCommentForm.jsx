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
  
  return (
      <>
        <form id="newcommentform"></form>
        <label htmlFor="comment">New comment (min 25 Char.):</label>
        <input className="input-field"
        onChange={handleChange}
        type ="text"
        placeholder="Comment here"
        id="comment"
        name="comment"
        autoComplete="off"
        required={true}
        value={commentInput}
        />
        <button disabled={commentInput.length > 25 ? false: true} onClick={handleSubmit}>Submit</button>
        {error ? <p className="error">Error: {error.status} {error.err}</p> : null}
      </>
    );
  }
  
  export default NewCommentForm;