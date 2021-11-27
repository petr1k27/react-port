import s from "./Menu.module.css"
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <ul className={s.menu}>
            <li><Link to="/">CV</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
        </ul>
    )
}

export default Menu;