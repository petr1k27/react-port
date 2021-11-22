import s from './FilmDescription.module.css'
import Description from "./Description/Description";
import Cast from "./Cast/Cast";
import History from "./History/History";

const FilmDescription = (props) => {
    return (
        <div className={s.description}>
            <div className={s.content}>
                <Description {...props}/>
                <Cast actors={props.filmInfo.Actors}/>
                <History history={props.history}/>
            </div>
        </div>

    )
}

export default FilmDescription;