import axios from "axios";
//import "regenerator-runtime";
    
const BASE_URL = "https://api.themoviedb.org/3/";
axios.defaults.baseURL = BASE_URL;
const API_KEY = "27c4b211807350ab60580c41abf1bb8c";

//значение переменной queryParams надо указывать в функции, которая будет отвечать
//в слушателе событий за нужный поиск
let queryParams = `trending/all/week?api_key=${API_KEY}`;

//функция запроса - асинхронный код
async function getFilms(queryParams) {
    let url = BASE_URL + queryParams;
        
    try {
        const response = await axios.get(url);
        const data = response.data;
        console.log("результат запроса:",data);
        //массив объектов - популярные фильмы
        const film = data.results;
        console.log("массив объектов: популярные фильмы", film);
        const totalResults = data.total_results;
        console.log("всего найдено фильмов:", totalResults);
        return data, film, totalResults;
        } catch(error) {
                throw(error)
            }
}
getFilms(queryParams);
export default { getFilms };

//ЗАПРОСЫ
//поиск по ключевому слову
//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

//популярные фильмы за неделю
//https://api.themoviedb.org/3/trending/all/week?api_key=<<api_key>>

//полное описание фильма
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US



//СТАРЫЙ КОД

// async function getPopularFilms() {
//     const QUERY_PARAMS = `trending/all/week?api_key=${API_KEY}`;
//     let url = BASE_URL + QUERY_PARAMS;
        
//     try {
//         const response = await axios.get(url);
//         const data = response.data;
//         console.log("результат запроса:",data);
//         //массив объектов - популярные фильмы
//         const film = data.results;
//         console.log("массив объектов: популярные фильмы", film);
//         const totalResults = data.total_results;
//         console.log("всего найдено фильмов:", totalResults);
//         return data, film, totalResults;
//         } catch(error) {
//                 throw(error)
//             }
// }
// getPopularFilms();
// export default { getPopularFilms };


// function onGetPopularFilms() {
//     let QUERY_PARAMS = `trending/all/week?api_key=${API_KEY}`;
//     getFilms(QUERY_PARAMS);
// }

// function onGetSearchFilms() {
//     let QUERY_PARAMS = `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
//     getFilms(QUERY_PARAMS);
// }


