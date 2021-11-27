import LinkedIn from "../../../assets/linkedIn.png";
import GitHub from "../../../assets/github.png";
import CodeWars from "../../../assets/codewars.png";
import s from "./SocialNetwork.module.css"
import React from "react";
import SocialNetworkItem from "./SocialNetworkItem/SocialNetworkItem";

const SocialNetworks = () => {
    return (
        <ul className={s.snList}>
            <li><SocialNetworkItem href={"https://www.linkedin.com/in/piotr-shumski-993b5a1a1"} src={LinkedIn} alt={"LinkedIn"} /></li>
            <li><SocialNetworkItem href={"https://github.com/petr1k27"} src={GitHub} alt={"GitHub"} /></li>
            <li><SocialNetworkItem href={"https://www.codewars.com/users/petr1k27"} src={CodeWars} alt={"CodeWars"} /></li>
        </ul>
    )
}

export default SocialNetworks;
