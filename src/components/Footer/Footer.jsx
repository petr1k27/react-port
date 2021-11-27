import s from './Footer.module.css'
import React from "../../assets/react.png"

const Footer = () => {
    return (
        <div className={s.footer}>
            <strong>Based on REACT</strong>
                <img src={React} alt={"React"} />
        </div>
    )
}

export default Footer;