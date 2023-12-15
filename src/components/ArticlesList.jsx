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
  sortOrder,
  setSearchParams,
  searchParams
}) 

{
  return (
    <div id="articlescontainer">
      <div id="dropdowncontainer">
        <TopicsDropdown
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
          setSearchParams={setSearchParams} 
          searchParams={searchParams}
        />
        <SortByDropdown selectedTopic={selectedTopic} setSearchParams={setSearchParams} searchParams={searchParams}/>
        <AscDescRadio selectedTopic={selectedTopic} setSearchParams={setSearchParams} searchParams={searchParams} sortOrder={sortOrder} setSortOrder={setSortOrder} />
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
