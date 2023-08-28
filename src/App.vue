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
    <div class="gallery">
      <div class="row row-cols-6">
        <div class="col" v-for="(movie, i) in moviesList" :key="`movie_id`">
          <div class="card border-0 rounded-0 h-100 bg-transparent text-white">
            <img :src="movie.title" alt="" />
            <div class="card-body p-0 pb-5 pt-2">
              {{ movie.series }}
            </div>
          </div>
        </div>
      </div>
      <MoviesList></MoviesList>
    </div>
  </main>
  <TheFooter></TheFooter>
</template>

<style lang="scss"></style>
