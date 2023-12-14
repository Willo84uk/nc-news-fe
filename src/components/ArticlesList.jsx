import { useSearchParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import NewArticleButton from "./NewArticleButton";
import SortByDropdown from "./SortByDropdown.jsx";
import TopicsDropdown from "./TopicsDropDown";
import AscDescRadio from "./AscDescRadio.jsx";

function ArticlesList({
  setSortOrder,
  articles,
  selectedTopic,
  setSelectedTopic,
  setSortBy
}) 

{
  return (
    <div id="articlescontainer">
      <div id="dropdowncontainer">
        <TopicsDropdown
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
        />
        <SortByDropdown  setSortBy={setSortBy}/>
        <AscDescRadio setSortOrder={setSortOrder} />
      </div>
      <div id="articleslist">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </div>
      {/* <NewArticleButton /> */}
    </div>
  );
}

export default ArticlesList;
