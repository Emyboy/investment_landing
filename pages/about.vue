<template>
    <div>
        <Navbar />
        <section
            class="inner-banner bg_img padding-bottom"
            :style="`background: url(${img}) no-repeat right bottom`"
        >
            <div class="container">
                <div class="inner-banner-wrapper">
                    <div class="inner-banner-content">
                        <h2 class="inner-banner-title">About our company</h2>
                        <ul class="breadcums">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <span>About</span>
                            </li>
                        </ul>
                    </div>
                    <div class="inner-banner-thumb about d-none d-md-block">
                        <img
                            src="~/assets/images/about/thumb2.png"
                            alt="about"
                        />
                    </div>
                </div>
            </div>
            <div class="shape1">
                <img src="~/assets/images/about/balls.png" alt="about" />
            </div>
        </section>
        <OurFeatures />
        <hr />
        <TopInvestors />
        <HowCanWeHelp />
        <Footer />
    </div>
</template>

<script>
import img from '../assets/images/about/bg.png'
import Navbar from '~/components/Navbar.vue'
import OurFeatures from '~/components/LandingPage/OurFeatures.vue';
import TopInvestors from '~/components/About/TopInvestors.vue';
import HowCanWeHelp from '~/components/LandingPage/HowCanWeHelp.vue';
import Footer from '~/components/Footer.vue';
export default {
    components: { Navbar, OurFeatures, TopInvestors, HowCanWeHelp, Footer },
    data() {
        return {
            img,
        }
    },
}
</script>

<style></style>
