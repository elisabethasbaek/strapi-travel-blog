import Icon from "./Icon";
import Burger from "./Burger";
import "./Menu.scss";

export default function Menu({text}){
    return(
        <nav className="menu">
            <ul className="menu__ul">
                <li className="menu__li--icon"><Icon /></li>
                <p className="menu__li--text">{text}</p>
                <li className="menu__li--burger"><Burger /></li>
            </ul>
        </nav>
    )
}