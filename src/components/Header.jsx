import { useContext } from "react"
import { UserContext } from "./UserContext"

function Header() {
    const {user} = useContext(UserContext)
    return (
    <>       
    <h1 id="mainheader">NC News</h1>
    <div id="greeting">Welcome {user ? `back ${user}` : "Guest"}</div>
    </>
    )
}

export default Header