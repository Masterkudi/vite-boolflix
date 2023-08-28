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
          <div class="col" v-for="(character, i) in charactersList" :key="`character_id`">
            <div class="card border-0 rounded-0 h-100 bg-transparent text-white">
              <img :src="character.thumb" alt="" />
              <div class="card-body p-0 pb-5 pt-2">
                {{ character.series }}
              </div>
            </div>
          </div>
        </div>
      </div>
</main>
<TheFooter></TheFooter>
</template>

<style lang="scss"></style>
