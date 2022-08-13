<template>
    <header class="header sticky">
        <div class="header-bottom">
            <div class="container">
                <div class="header-area">
                    <div class="logo">
                        <nuxt-link to="/">
                            <img src="~assets/logos/logo_white_landscape.png" alt="logo"  />
                        </nuxt-link>
                    </div>
                    <div class="header-trigger d-block d-lg-none">
                        <span></span>
                    </div>
                    <ul class="menu">
                        <li>
                            <nuxt-link to="/">Home</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/about">About</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/contact">Contact</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/register" class="cmn--btn"
                                >Invest Now</nuxt-link
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {}
</script>

<style></style>
