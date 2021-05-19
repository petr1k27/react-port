import React from "react";
import FilmDescription from "./FilmDescription";
import {connect} from "react-redux";

class FilmDescriptionContainer extends React.Component {
    render() {
        debugger;
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

export default connect(mapStateToProps, {})(FilmDescriptionContainer);