<script>
import { store, filterMovies } from "../store";

export default {
    data() {
        return {
            store,
        };
    },
    methods: {
        filterMovies
    }
};
</script>

<template>
    <div class="d-flex text-align-center text-danger p-3 bg-black justify-content-between">
        <h1 class="logo mb-0">BOOLFLIX</h1>
        <nav class="navbar bg-body-black">
            <div class="container-fluid">
                <a class="navbar-brand"></a>
                <form class="d-flex" role="search">
                    <input type="text" class="form-control me-2 text-white bg-dark border-0" placeholder="Search" v-model="store.searchText">
                    <button class="btn text-white bg-primary" type="button" @click="filterMovies">Search</button>
                </form>
            </div>
        </nav>
    </div>
</template>

<style scoped lang="scss"></style>