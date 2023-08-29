<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import MoviesList from "./components/MoviesList.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    MoviesList
  }
}
</script>

<template>
  <TheHeader></TheHeader>
  <main>
    <div class="gallery p-4 bg-dark">
      <div class="row row-cols-6">
        <div class="col" v-for="(movie, i) in movies" :key="`movie_id`">
          <div class="card border-0 rounded-0 h-100 bg-transparent text-white">
            <img :src="getMovieImageUrl(movie.poster_path)" alt="Movie Poster" class="card-img-top">
                <h5 class="card-title">{{ movie.title }}</h5>
          </div>
        </div>
      </div>
      <MoviesList></MoviesList>
    </div>
  </main>
  <TheFooter></TheFooter>
</template>

<style lang="scss"></style>
