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
            const url = "https://developer.themoviedb.org/reference/search-movie?api_key=12eb07f498add0bf766c500177706cec";

            axios.get(url).then((response) => {
                this.movies = response.data.data;
                console.log(this.movies)
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
       
        <div class="col" v-for="movie in movies" :key="movie.id">
            <div class="card rounded-0">
                <img :src="movie.card_images[0].image_url" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ movie.name }}</h5>
                    <p class="card-text">
                        {{ movie.archetype }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

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