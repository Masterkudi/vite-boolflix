import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    searchText: "",
    movies: [],
    paginationInfo: {},
    currentPage: 1,
    isLoading: false,
})

export function filterMovies() {

}

export function fetchMovies(nextUrl) {

}