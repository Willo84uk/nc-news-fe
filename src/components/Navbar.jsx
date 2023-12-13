import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
function Navbar({setSelectedTopic}) {

const handleClick = () => {
    setSelectedTopic("")
}
    return <Button as={Link} onClick={handleClick} to="/" size="lg">Home</Button>
}

export default Navbar