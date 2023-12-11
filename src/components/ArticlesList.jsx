import ArticleCard from "./ArticleCard"
import NewArticleButton from "./NewArticleButton"
import TopicsDropdown from "./TopicsDropDown"

function ArticlesList() {
    return ( 
    <div id="articleslist">
    <h3>Articles List</h3>
    <TopicsDropdown />
    <ArticleCard />
    <NewArticleButton />
    </div>
    )
}

export default ArticlesList