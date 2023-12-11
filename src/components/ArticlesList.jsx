import ArticleCard from "./ArticleCard"
import NewArticleButton from "./NewArticleButton"
import TopicsDropdown from "./TopicsDropDown"

function ArticlesList({articles}) {
    return ( 
    <div id="articleslist">
    <TopicsDropdown />
    {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article}/>
    })}
    <NewArticleButton />
    </div>
    )
}

export default ArticlesList