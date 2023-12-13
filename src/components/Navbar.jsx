import { Button } from "react-bootstrap"
function Navbar({setSelectedTopic}) {

const handleClick = () => {
    setSelectedTopic("")
}
    return <Button onClick={handleClick} to="/" size="lg">Home</Button>
}

export default Navbar