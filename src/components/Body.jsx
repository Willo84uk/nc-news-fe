import { useState } from "react"
import ArticlesList from "./ArticlesList"
import { useEffect } from "react"
import { getArticles } from "../../utils"

function Body() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then((res) => {
            setArticles(res)
        })
    }, [])

    return (
    <div id="body">
    <ArticlesList articles={articles} />
    </div>
    )
}

export default Body