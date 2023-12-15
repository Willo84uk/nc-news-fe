import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";


function SortByDropdown({sortBy, setSortBy, selectedTopic}) {
  const[currentSB, setCurrentSB] = useState("Votes")
  const sortByLookup = {comment_count:"Comment Count", created_at: "Date Created", votes:"Votes"}


  const setSortByCriteria = (event) => {
    setSortBy(event.target.id)
    setCurrentSB(sortByLookup[event.target.id])
  }

  useEffect(() => {
    if(sortBy){
      setCurrentSB(sortByLookup[sortBy])
    }
  },[selectedTopic])


  return (
    <Dropdown id="dropdown">
      <Dropdown.Toggle size="lg" variant="primary" id="dropdown-basic">
        Sort results {">"} {currentSB}
      </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item onClick={setSortByCriteria} as={Link} id="comment_count" to="?sort_by=comment_count">Comment Count</Dropdown.Item>
        <Dropdown.Item onClick={setSortByCriteria} as={Link} id="created_at" to="?sort_by=created_at">Date Created</Dropdown.Item>
        <Dropdown.Item onClick={setSortByCriteria} as={Link} id="votes" to="?sort_by=votes">Votes</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SortByDropdown;
