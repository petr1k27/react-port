
let initialState =  {
    filmInfo: {
        Title: "xyz",
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
        Ratings: [
            {
                Source: null,
                Value: null
            },
            {
                Source: null,
                Value: null
            },
            {
                Source: null,
                Value: null
            }
        ],
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
        default:
            return state;
    }
}

export default searchReducer;
