import Icon from "./Icon";
import Burger from "./Burger";
import "./Menu.scss";

export default function Menu(){
    return(
        <nav className="menu">
            <ul>
                <li><Icon /></li>
                <li><Burger /></li>
            </ul>
        </nav>
    )
}