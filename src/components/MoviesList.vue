<script>
import axios from "axios";
import { store, fetchMovies } from "../store";

export default {
    data() {
        return {
            movies: [],
            store
        };
    },
    methods: {

        getMovieImageUrl(poster_path) {
            if (poster_path) {
                const baseUrl = "https://image.tmdb.org/t/p/";
                const imageSize = "w300";
                return `${baseUrl}${imageSize}${poster_path}`;
            } else {
                return "@/assets/img/default_poster.jpg";
            }
        },

        showDetails(index) {
            store.movies[index].showDetails = true;
        },
        hideDetails(index) {
            store.movies[index].showDetails = false;
        }
    },
};
</script>

<template>
    <div class="row row-cols-5">
        <div class="col" v-for="(movie, i) in store.movies" :key="movie.id">

            <div class="card border-0 rounded-0 h-100 bg-transparent text-white">
                <img :src="getMovieImageUrl(movie.poster_path)" alt="Movie Poster" class="card-img-top">
                <div class="movie-details">
                    <p>Language: {{ movie.original_language }}</p>
                    <p>Popularity: {{ movie.popularity }}</p>
                    <p>original title: {{ movie.original_title }}</p>
                    <p>release date: {{ movie.release_date }}</p>
                    <p>average vote: {{ movie.vote_average }}</p>
                </div>
                <h5 class="card-title">{{ movie.title }}</h5>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.row.row-cols-5 {
    min-height: 100vh;
    background-color: #212529;
    padding: 2rem;
}

.card {
    height: 200px; 
}

.card-title {
    padding: .5rem;
    text-align: center;
    color: #fff;
    font-size: .8rem;
}

.card-text {
    font-size: .6rem;
}

.col {
    padding-left: .5rem;
    padding-right: .5rem;
    padding-bottom: .5rem;
}

.card-img-top {
    height: 100%;
    width: 100%;
}

.movie-details {
    display: none;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    transition: opacity 0.3s;
}

.card:hover .movie-details {
    display: block;
}
</style>