import React from "react";

const SocialNetworkItem = (props) => {
    return (
        <a href={props.href}><img src={props.src} alt={props.alt}/></a>
    )
}

export default SocialNetworkItem;