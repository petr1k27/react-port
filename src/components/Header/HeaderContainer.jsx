import React from "react";
import GitHub from "../../assets/github.png"
import LinkedIn from "../../assets/linkedIn.png"
import CodeWars from "../../assets/codewars.png"
import {connect} from "react-redux";
import {getFilmInfo} from "../../redux/search-reducer";
import SearchFormComponent from "./SearchForm/SearchFormComponent";
import s from './Header.module.css'
import {Link} from "react-router-dom";

const HeaderContainer = () => {
    return(
        <div className={s.header}>
            <div className={s.headerContent}>
                <div>Logo</div>
                <div className={s.menu}>
                    <ul>
                        <li><Link to={'/'}>CV</Link></li>
                        <li><Link to={'/portfolio'}>Portfolio</Link></li>
                    </ul>
                </div>
                <div className={s.socialLogos}>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/piotr-shumski-993b5a1a1/}"><img className={s.socialLogo} src={LinkedIn}></img></a></li>
                        <li><a href="https://github.com/petr1k27"><img className={s.socialLogo} src={GitHub}></img></a></li>
                        <li><a href="https://www.codewars.com/users/petr1k27"><img className={s.socialLogo} src={CodeWars}></img></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderContainer;

// class HeaderContainer extends React.Component {
//
//
//     render() {
//         return (
//             <div className={s.header}>
//                 <SearchFormComponent {...this.props}/>
//             </div>
//         )
//     }
// }
//
// let mapStateToProps = (state) => (
//     {
//
//     }
// )
//
// export default connect(mapStateToProps, {getFilmInfo} )(HeaderContainer);
