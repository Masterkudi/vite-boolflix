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
    <MoviesList></MoviesList>
  </main>
  <TheFooter></TheFooter>
</template>

<style lang="scss">

</style>
