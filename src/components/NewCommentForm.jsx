function NewCommentForm() {
    return (
      <>
        <form id="newcommentform"></form>
        <label htmlFor="comment">Post a comment:</label>
        <input className="input-field"
        type ="text"
        placeholder="Comment here"
        id="comment"
        name="comment"
        autoComplete="off"
        required={true}
        />
        <button>Submit</button>
      </>
    );
  }
  
  export default NewCommentForm;