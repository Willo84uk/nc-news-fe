import ArticleCard from "./ArticleCard"
import NewArticleButton from "./NewArticleButton"
import TopicsDropdown from "./TopicsDropDown"

function ArticlesList({articles, selectedTopic, setSelectedTopic}) {
   
    return ( 
    <div id="articlescontainer">
    <TopicsDropdown  selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
    <div id="articleslist">
    {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article}/>
    })}
    </div>
    {/* <NewArticleButton /> */}
    </div>
    )
}

export default ArticlesList