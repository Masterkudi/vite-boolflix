<script>
import axios from "axios";

export default {
    data() {
        return {
            movies: [],
        };
    },
    methods: {
        fetchMovies() {
            const apiKey = "12eb07f498add0bf766c500177706cec";
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=the+batman+the+dark+knight`;

            axios.get(url)
                .then((response) => {
                    this.movies = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        getMovieImageUrl(poster_path) {
            if (poster_path) {
                const baseUrl = "https://image.tmdb.org/t/p/";
                const imageSize = "w300";
                return `${baseUrl}${imageSize}${poster_path}`;
            } /*else {
                return ("@/assets/default_movie_poster.jpg");
            }*/
        },

    },

    mounted() {
        this.fetchMovies();
    },
};
</script>

<template>
    <div class="row row-cols-5">
        <div class="col" v-for="(movie, i) in movies" :key="`movie_id`">
            <div class="card border-0 rounded-0 h-100 bg-transparent text-white">
                <img :src="getMovieImageUrl(movie.poster_path)" alt="Movie Poster" class="card-img-top">
                <h5 class="card-title">{{ movie.title }}</h5>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.gallery {

    background-color: lightgray;
}

.card {
    background-color: #18181A;
    height: 200px;
}

.card-title {

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