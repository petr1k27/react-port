import s from './Description.module.css'

const Description = (props) => {
    return (
        <div className={s.descriptionWrapper}>
            <ul><strong>About film:</strong>
                <li><strong>Title:    </strong>{props.filmInfo.Title}</li>
                <li><strong>Year:     </strong>{props.filmInfo.Year}</li>
                <li><strong>Rated:    </strong>{props.filmInfo.Rated}</li>
                <li><strong>Released: </strong>{props.filmInfo.Released}</li>
                <li><strong>Runtime:  </strong>{props.filmInfo.Runtime}</li>
                <li><strong>Genre:    </strong>{props.filmInfo.Genre}</li>
                <li><strong>Director: </strong>{props.filmInfo.Director}</li>
                <li><strong>Writer: </strong>{props.filmInfo.Writer}</li>
                <li><strong>Language: </strong>{props.filmInfo.Language}</li>
                <li><strong>Country: </strong>{props.filmInfo.Country}</li>
                <li><strong>Awards: </strong>{props.filmInfo.Awards}</li>
                <li><strong>Metascore: </strong>{props.filmInfo.Metascore}</li>
                <li><strong>imdbRating: </strong>{props.filmInfo.imdbRating}</li>
                <li><strong>imdbVotes: </strong>{props.filmInfo.imdbVotes}</li>
                <li><strong>imdbID: </strong>{props.filmInfo.imdbID}</li>
                <li><strong>BoxOffice: </strong>{props.filmInfo.BoxOffice}</li>
                <li><strong>Production: </strong>{props.filmInfo.Production}</li>
                <li><strong>Website: </strong>{props.filmInfo.Website}</li>
                <li><strong>Plot: </strong>{props.filmInfo.Plot}</li>
            </ul>
        </div>
    )
}

export default Description;