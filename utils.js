import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-5sxy.onrender.com/api",
});

export const getArticles = (topic, sortByCriteria, sortOrder) => {
  if(topic === undefined){
    topic = ""
  }
  if(sortByCriteria === null){
    sortByCriteria = "votes"
  }
  return newsApi.get(`/articles/?limit=999${topic?`&topic=${topic}`:""}&sort_by=${sortByCriteria}&order=${sortOrder}`).then((res) => {
    return res.data.articles;
  });
};

export const getArticle = (articleId) => {
  return newsApi.get(`/articles/${articleId}`).then((res) => {
    return res.data.article;
  });
};

export const patchVote = ({ voteValue, articleId }) => {
  const voteBody = {
    inc_votes: voteValue,
  };
  return newsApi.patch(`/articles/${articleId}`, voteBody).then((res) => {
    return res;
  });
};

export const getComments = (articleId) => {
  return newsApi.get(`/articles/${articleId}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const postNewComment = ({commentInput, articleId, user}) => {
    const newPost = {
        "username": user,
        "body": commentInput
      }
    return newsApi.post(`/articles/${articleId}/comments`, newPost).then((res) => {
        return res.data.comment
    })
}


export const deleteComment = ((commentId) => {
  return newsApi.delete(`/comments/${commentId}`).then((res) => {
    return res
  })
})

export const getAllTopics = () => {
  return newsApi.get(`/topics`).then((res) => {
    return res.data.topics;
  });
};

