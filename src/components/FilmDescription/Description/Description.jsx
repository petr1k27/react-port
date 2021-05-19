const Description = (props) => {
    return (
        <div>
            <div>Title: {props.filmInfo.Title}</div>
            <div>Year: {props.filmInfo.Year}</div>
            <div>Rated: {props.filmInfo.Rated}</div>
            <div>Released: {props.filmInfo.Released}</div>
            <div>Runtime: {props.filmInfo.Runtime}</div>
            <div>Genre: {props.filmInfo.Genre}</div>
            <div>Director: {props.filmInfo.Director},</div>
            <div>Writer: {props.filmInfo.Writer}</div>
            <div>Language: {props.filmInfo.Language}</div>
            <div>Country: {props.filmInfo.Country}</div>
            <div>Awards: {props.filmInfo.Awards}</div>
            {/*<ul>Ratings:*/}
            {/*    <li>Source: {props.filmInfo.Ratings[0].Source},*/}
            {/*        Value: {props.filmInfo.Ratings[0].Value}*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        Source: {props.filmInfo.Ratings[1].Source},*/}
            {/*        Value: {props.filmInfo.Ratings[1].Value}*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        Source: {props.filmInfo.Ratings[2].Source},*/}
            {/*        Value: {props.filmInfo.Ratings[2].Value}*/}
            {/*    </li>*/}
            {/*</ul>*/}
            <div>Metascore: {props.filmInfo.Metascore}</div>
            <div>imdbRating: {props.filmInfo.imdbRating}</div>
            <div>imdbVotes: {props.filmInfo.imdbVotes}</div>
            <div>imdbID: {props.filmInfo.imdbID}</div>
            <div>Type: {props.filmInfo.Type}</div>
            <div>DVD: {props.filmInfo.DVD}</div>
            <div>BoxOffice: {props.filmInfo.BoxOffice}</div>
            <div>Production: {props.filmInfo.Production}</div>
            <div>Website: {props.filmInfo.Website}</div>
            <div>Plot: {props.filmInfo.Plot}</div>
        </div>
    )
}

export default Description;