<script>
import { store, fetchMovies } from "../store";

export default {
    data() {
        return {
            store,
        };
    },
    methods: {
        fetchMovies,
    }
};
</script>

<template>
    <form class="d-flex" role="search">
        <input class="form-control me-2 text-white bg-dark border-0" v-model="store.searchText" @keyup.enter="fetchMovies"
            type="search" placeholder="Search">
        <button class="btn text-white bg-primary" type="submit">Search</button>
    </form>
</template>

<style scoped lang="scss"></style>