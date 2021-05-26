import React from "react";
import FilmDescription from "./FilmDescription";
import {connect} from "react-redux";
import {getFilmInfo} from "../../redux/search-reducer";

class FilmDescriptionContainer extends React.Component {

    componentDidMount() {
        this.props.getFilmInfo();
    }

    render() {
        return (
            <FilmDescription {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => (
    {
        filmInfo: state.search.filmInfo,
    }
)

export default connect(mapStateToProps, {getFilmInfo} )(FilmDescriptionContainer);