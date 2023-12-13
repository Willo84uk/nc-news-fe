import { Link } from "react-router-dom"

const handleClick = ({setSelectedTopic}) => {
    setSelectedTopic("")
}

function Navbar() {
    return <Link onClick={handleClick} to="/" id="navbar">Home</Link>
}

export default Navbar