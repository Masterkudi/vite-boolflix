import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    searchText: "",
    movies: [],
    showDetails: {},
    paginationInfo: {},
    currentPage: 2,
    isLoading: false,
})

export function filterMovies() {

}

export function fetchMovies() {
    const apiKey = "12eb07f498add0bf766c500177706cec";
    const query = store.searchText;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    axios.get(url)
        .then((response) => {
            store.movies = response.data.results;
        })
        .catch((error) => {
            console.log(error);
        });
    }
