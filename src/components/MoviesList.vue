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
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=batman`;

            axios.get(url)
                .then((response) => {
                    this.movies = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        
    },
    
    mounted() {
        this.fetchMovies();
    },
};
</script>

<template>
    <div class="row row-cols-5">
        <div class="col p-1" v-for="movie in movies" :key="movie.id">
            <div class="card rounded-0"></div>
            <h5 class="card-title text-center p-2">{{ movie.title }}</h5>
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
    width: 50%;
}
</style>