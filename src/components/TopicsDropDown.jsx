import Dropdown from "react-bootstrap/Dropdown";
import { Link, useParams } from "react-router-dom";
import { getAllTopics } from "../../utils";
import { useEffect, useState } from "react";


function TopicsDropdown({setSelectedTopic}) {
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState([]);
  const topic = useParams().topic;

  useEffect(() => {
    getAllTopics().then((res) => {
      setTopics(res);
      setIsLoading(false);
      if(setSelectedTopic !== undefined){
      setSelectedTopic(topic)
      }
    });
  }, []);

  const changeTopic = (event) => {
    setSelectedTopic(event.target.id);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Topics
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
        <Dropdown.Item as={Link} className="item" to="/articles" id="" onClick={changeTopic}>
            All
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default TopicsDropdown;
