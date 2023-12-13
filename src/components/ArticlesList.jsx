import { useSearchParams } from "react-router-dom";
import ArticleCard from "./ArticleCard"
import NewArticleButton from "./NewArticleButton"
import SortByDropdown from "./SortByDropdown.jsx"
import TopicsDropdown from "./TopicsDropDown"
import AscDescRadio from "./AscDescRadio.jsx";

function ArticlesList({setSortOrder, sortBy, setSortBy, articles, selectedTopic, setSelectedTopic}) {

    return ( 
    <div id="articlescontainer">
    <TopicsDropdown  selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
    <SortByDropdown setSortBy={setSortBy} sortBy={sortBy}/>
    <AscDescRadio setSortOrder={setSortOrder}/>
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