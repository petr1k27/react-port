import {OMDBApi as OMDbApi} from "../api/OMDbapi";
const SET_FILM_INFO = 'SET_FILM_INFO'
let initialState =  {
    filmInfo: {
        Title: null,
        Year: null,
        Rated: null,
        Released: null,
        Runtime: null,
        Genre: null,
        Director: null,
        Writer: null,
        Actors: null,
        Plot: null,
        Language: null,
        Country: null,
        Awards: null,
        Poster: null,
        Metascore: null,
        imdbRating: null,
        imdbVotes: null,
        imdbID: null,
        Type: null,
        DVD: null,
        BoxOffice: null,
        Production: null,
        Website: null,
        Response: null,
    }
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILM_INFO: {
            return {
                ...state,
                filmInfo: action.filmInfo
            }
        }
        default:
            return state;
    }
}

export default searchReducer;

export const setFilmInfo = (filmInfo) => ({type:SET_FILM_INFO, filmInfo})

export const getFilmInfo =  (title) => (dispatch) => {
    OMDbApi.getFilmInfo(title).then(response => {
            dispatch(setFilmInfo(response));
        }
    );
}