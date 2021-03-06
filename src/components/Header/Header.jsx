import React from "react";
import s from './Header.module.css'
import SocialNetworks from "./SocialNetworks/SocialNetworks";
import Menu from "./Menu/Menu";

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.headerContent}>
                <div></div>
                <Menu/>
                <SocialNetworks/>
            </div>
        </div>
    )
}

export default Header;

