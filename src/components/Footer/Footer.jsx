import s from './Footer.module.css'
import React from "../../assets/react.png"

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.react}>
                <div className={s.basedOn}>
                    <strong>Based on React.JS</strong></div>
                <div>
                    <img src={React} alt={"React"} />
                </div>
            </div>
        </div>
    )
}

export default Footer;