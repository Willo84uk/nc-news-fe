import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";


function SortByDropdown({sortBy, setSortBy}) {

  const setSortByCriteria = (event) => {
    const updatedSortBy = {sortBy: event.target.id, order:sortBy.order}
    setSortBy(updatedSortBy)
  }


  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Sort results by...
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={setSortByCriteria} as={Link} id="comment_count" to="?sort_by=comment_count">Comment Count</Dropdown.Item>
        <Dropdown.Item onClick={setSortByCriteria} as={Link} id="created_at" to="?sort_by=created_at">Date Created</Dropdown.Item>
        <Dropdown.Item onClick={setSortByCriteria} as={Link} id="votes" to="?sort_by=votes">Votes (default)</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SortByDropdown;