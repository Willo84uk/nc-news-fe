import { useSearchParams } from "react-router-dom";
import ArticleCard from "./ArticleCard"
import NewArticleButton from "./NewArticleButton"
import SortByDropdown from "./SortByDropdown.jsx"
import TopicsDropdown from "./TopicsDropDown"
import AscDescRadio from "./AscDescRadio.jsx";

function ArticlesList({setSortOrder, sortBy, setSortBy, articles, selectedTopic, setSelectedTopic}) {

    return ( 
    <div id="articleslist">
    <TopicsDropdown  selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
    <SortByDropdown setSortBy={setSortBy} sortBy={sortBy}/>
    <AscDescRadio setSortOrder={setSortOrder}/>
    {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article}/>
    })}
    {/* <NewArticleButton /> */}
    </div>
    )
}

export default ArticlesList