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
                return ("@/assets/default_movie_poster.jpg");
            }
        },



    },
};
</script>

<template>
    <div class="row row-cols-5">
        <div class="col" v-for="(movie, i) in store.movies" :key="`movie_id`">
            <div class="card border-0 rounded-0 h-100 bg-transparent text-white">
                <img :src="getMovieImageUrl(movie.poster_path)" alt="Movie Poster" class="card-img-top">
                
                <h5 class="card-title">{{ movie.title }}</h5>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.row.row-cols-5 {
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
    width: 100%;
}
</style>