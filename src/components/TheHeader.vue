<script>
import SearchBar from './SearchBar.vue';
export default {
    components: {
        SearchBar
    }
}

</script>

<template>
    <div class="d-flex p-3 bg-black justify-content-between">
        <h1 class="logo align-self-center text-danger  mb-0">BOOLFLIX</h1>
        <ul class="d-flex flex-row align-self-center justify-content-between navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item text-white">
                <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item text-white">
                <a class="nav-link" href="#">Film</a>
            </li>
            <li class="nav-item text-white">
                <a class="nav-link" href="#">Serie TV</a>
            </li>
            <li class="nav-item text-white">
                <a class="nav-link" href="#">Originali</a>
            </li>
            <li class="nav-item text-white">
                <a class="nav-link" href="#">Aggiunti di recente</a>
            </li>
            <li class="nav-item text-white">
                <a class="nav-link" href="#">La mia lista</a>
            </li>
        </ul>
        <nav class="navbar bg-body-black">
            <div class="container-fluid">
                <SearchBar @search = "">

                </SearchBar>
            </div>
        </nav>
    </div>
</template>

<style scoped lang="scss">
.form-control.placeholder {
    color: #fff;
}

a.nav-link {
    padding-left: 1rem;
    padding-right: 1rem;
    color: #fff;
}
</style>