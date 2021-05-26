import React from "react";
import {connect} from "react-redux";
import {getFilmInfo} from "../redux/search-reducer";
import SearchFormComponent from "./SearchForm/SearchFormComponent";
import s from './Header.module.css'

class HeaderContainer extends React.Component {

    render() {
        return (
            <div className={s.header}>
                <SearchFormComponent {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => (
    {

    }
)

export default connect(mapStateToProps, {getFilmInfo} )(HeaderContainer);
