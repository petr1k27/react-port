const axios = require("axios");
const instance = axios.create({
    baseURL: 'http://www.omdbapi.com/?apikey=98128e08&',
})