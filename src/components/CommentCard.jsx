function CommentCard({comment}) {
  const createdAt = new Date(comment.created_at);

    return (
      <div id="commentcard">
        <p>{comment.body}</p>
        <p>Written by {comment.author} {createdAt.toGMTString()}</p>
        <p>Votes {comment.votes}</p>
      </div>
    );
  }
  
  export default CommentCard;