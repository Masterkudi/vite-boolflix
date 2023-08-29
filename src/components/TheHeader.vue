<script>
export default {

}

</script>

<template>
    <div class="d-flex text-align-center text-danger p-3 bg-black justify-content-between">
        <h1 class="logo mb-0">BOOLFLIX</h1>
        <nav class="navbar bg-body-black">
            <div class="container-fluid">
                <a class="navbar-brand"></a>
                <ul class="d-flex flex-row justify-content-start navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item text-white">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item text-white">
                        <a class="nav-link" href="#">Film</a>
                    </li>
                    <li class="nav-item text-white">
                        <a class="nav-link" href="#">Serie TV</a>
                    </li>
                </ul>

                <form class="d-flex" role="search">
                    <input class="form-control me-2 text-white bg-dark border-0" type="search" placeholder="Search"
                        aria-label="Search">
                    <button class="btn text-white bg-primary" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
</template>

<style scoped lang="scss"></style>