import Icon from "./Icon";
import Burger from "./Burger";
import "./Menu.scss";

export default function Menu(){
    return(
        <nav className="menu">
            <ul className="menu__ul">
                <li className="menu__li--icon"><Icon /></li>
                <li className="menu__li--burger"><Burger /></li>
            </ul>
        </nav>
    )
}