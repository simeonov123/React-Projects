import { useContext } from "react"
import { NavContext } from "../store/NavBarContextProvider"

export default function NavBar(){
    const navCtx = useContext(NavContext);

    return <div><h1 className = {navCtx.navText}>Nav Bar H1</h1>
    <button onClick = {navCtx.handleNavText}>change size</button></div>
}