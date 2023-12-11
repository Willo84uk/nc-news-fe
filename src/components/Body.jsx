import { useState } from "react"
import ArticlesList from "./ArticlesList"
import { useEffect } from "react"
import { getArticles } from "../../utils"

function Body() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticles().then((res) => {
            setArticles(res)
            setIsLoading(false)
        })
    }, [])

    if(isLoading){
        return "Loading..."
    }

    return (
    <div id="body">
    <ArticlesList articles={articles} />
    </div>
    )
}

export default Body