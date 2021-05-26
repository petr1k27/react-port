import s from './Description.module.css'

const Description = (props) => {
    return (
        <div className={s.descriptionWrapper}>
            <div>
                <span className={s.item}>Title: </span>
                <span>{props.filmInfo.Title}</span>
            </div>
            <div>
                <span className={s.item}>Year: </span>
                <span>{props.filmInfo.Year}</span>
            </div>
            <div>
                <span className={s.item}>Rated: </span>
                <span>{props.filmInfo.Rated}</span>
            </div>
            <div>
                <span className={s.item}>Released: </span>
                <span>{props.filmInfo.Released}</span>
            </div>
            <div>
                <span className={s.item}>Runtime: </span>
                <span>{props.filmInfo.Runtime}</span>
            </div>
            <div>
                <span className={s.item}>Genre: </span>
                <span>{props.filmInfo.Genre}</span>
            </div>
            <div>
                <span className={s.item}>Director: </span>
                <span>{props.filmInfo.Director},</span>
            </div>
            <div>
                <span className={s.item}>Writer: </span>
                <span>{props.filmInfo.Writer}</span>
            </div>
            <div>
                <span className={s.item}>Language: </span>
                <span>{props.filmInfo.Language}</span>
            </div>
            <div>
                <span className={s.item}>Country: </span>
                <span>{props.filmInfo.Country}</span><
                /div>
            <div>
                <span className={s.item}>Awards: </span>
                <span>{props.filmInfo.Awards}</span>
            </div>
            <div>
                <span className={s.item}>Metascore: </span>
                <span>{props.filmInfo.Metascore}</span>
            </div>
            <div>
                <span className={s.item}>imdbRating: </span>
                <span>{props.filmInfo.imdbRating}</span>
            </div>
            <div>
                <span className={s.item}>imdbVotes: </span>
                <span>{props.filmInfo.imdbVotes}</span>
            </div>
            <div>
                <span className={s.item}>imdbID: </span>
                <span>{props.filmInfo.imdbID}</span>
            </div>
            <div>
                <span className={s.item}>Type: </span>
                <span>{props.filmInfo.Type}</span>
            </div>
            <div>
                <span className={s.item}>DVD: </span>
                <span>{props.filmInfo.DVD}</span>
            </div>
            <div>
                <span className={s.item}>BoxOffice: </span>
                <span>{props.filmInfo.BoxOffice}</span>
            </div>
            <div>
                <span className={s.item}>Production: </span>
                <span>{props.filmInfo.Production}</span>
            </div>
            <div>
                <span className={s.item}>Website: </span>
                <span>{props.filmInfo.Website}</span>
            </div>
            <div>
                <span className={s.item}>Plot: </span>
                <span>{props.filmInfo.Plot}</span>
            </div>
        </div>
    )
}

export default Description;