import s from './FilmDescription.module.css'
import Poster from "./Poster/Poster";
import Description from "./Description/Description";
import Cast from "./Cast/Cast";

const FilmDescription = () => {
    return (
        <div className={s.description}>
            <Poster />
            <Description />
            <Cast />
        </div>
    )
}

export default FilmDescription;