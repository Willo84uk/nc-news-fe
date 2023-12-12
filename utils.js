import axios from "axios";

const newsApi = axios.create({baseURL: 'https://nc-news-5sxy.onrender.com/api' })

export const getArticles = () => {
    return newsApi.get ('/articles?limit=999').then((res) => {
        return res.data.articles
    })
}

export const getArticle = (articleId) => {
    return newsApi.get (`/articles/${articleId}`).then((res) => {
        return res.data.article
    })
}

export const patchVote = ({voteValue, articleId}) => {
    const voteBody = {
        "inc_votes": voteValue
      }
   return newsApi.patch (`/articles/${articleId}`, voteBody).then((res) => {
        return res
    })
}

        export const getComments = (articleId) => {
            return newsApi.get (`/articles/${articleId}/comments`).then((res) => {
                return res.data.comments
                
            })
        }