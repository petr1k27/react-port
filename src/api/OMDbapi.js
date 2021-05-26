import * as axios from "axios"


const instance = axios.create({
    baseURL: 'http://www.omdbapi.com/?apikey=98128e08&/',
})

export const OMDBApi = {
    getFilmInfo(title = "interstellar") {
        return instance.get(`?apikey=98128e08&t=${title}`).then(response => {
            return response.data;
        })
    }
}

