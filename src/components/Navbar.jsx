import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
function Navbar({setSelectedTopic}) {

const handleClick = () => {
    setSelectedTopic("")
}
    return (
    <nav><Button as={Link} onClick={handleClick} to="/" size="lg">Home</Button></nav>
    )
}

export default Navbar