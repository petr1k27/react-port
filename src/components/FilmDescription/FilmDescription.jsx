import s from './FilmDescription.module.css'
import Poster from "./Poster/Poster";
import Description from "./Description/Description";
import Cast from "./Cast/Cast";

const FilmDescription = (props) => {
    return (
        <div className={s.description}>
            <Poster />
            <Description {...props}/>
            <Cast actors={props.filmInfo.Actors}/>
        </div>
    )
}

export default FilmDescription;