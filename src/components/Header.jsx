import { useContext } from "react"
import { UserContext } from "./UserContext"

function Header() {
    const {user} = useContext(UserContext)
    return (
    <>       
    <h1 id="mainheader">NC News</h1>
    <p id="greeting">Welcome {user ? `back ${user}` : "Guest"}</p>
    </>
    )
}

export default Header