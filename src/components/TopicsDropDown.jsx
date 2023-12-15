import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { getAllTopics } from "../../utils";
import { useEffect, useState } from "react";


function TopicsDropdown({setSelectedTopic, selectedTopic, searchParams, setSearchParams}) {
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState([]);

  

  window.addEventListener("popstate", () => {
    const pathTopic = location.pathname.split("/")[3]
    setSelectedTopic(pathTopic)
  })

  useEffect(() => {
    getAllTopics().then((res) => {
      setTopics(res);
      setIsLoading(false);
    });
  }, []);

  const changeTopic = (event) => {
    setSelectedTopic(event.target.id);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Dropdown id="dropdown">
      <Dropdown.Toggle size="lg" variant="primary" id="dropdown-basic">
        Topics {">"}{selectedTopic?null:" All"} {selectedTopic}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {topics.map((topic) => {
          return (
            <div key={topic.slug}>
              <Dropdown.Item as={Link} className="item"
                  id={topic.slug}
                  onClick={changeTopic}
                  key={topic.slug}
                  to={`/articles/topics/${topic.slug}`}
                >
                  {topic.slug}: {topic.description}
              </Dropdown.Item>
            </div>
          );
        })}
        <Dropdown.Divider />
        <Dropdown.Item as={Link} className="item" to="/articles" id="" onClick={changeTopic}>
            All
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default TopicsDropdown;
