<template>
    <section
        class="banner-section bg_img"
        :style="`background: url(${img}) center bottom;`"
    >
        <div class="container">
            <div class="row">
                <div class="col-lg-4 d-none d-lg-block">
                    <div class="banner-thumb">
                        <img
                            src="~assets/images/banner/thumb.png"
                            alt="banner"
                        />
                        <div class="shapes">
                            <div class="shape2">
                                <img
                                    src="~assets/images/banner/shape1.png"
                                    alt="banner"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="banner-content">
                        <h1 class="banner-title">
                            Best <span class="text--base">Investment </span
                            ><span> Platform For Your Profit</span>
                        </h1>
                        <span class="subtitle"
                            >We have simplified investing by combining traditional and alternative asset classes with structured portfolio plans to help our clients find the right opportunities in a rapidly changing investment world.
                        </span>
                        <div
                            class="button-group d-flex flex-wrap align-items-center"
                        >
                            <nuxt-link
                                to="/register"
                                class="cmn--btn btn--secondary"
                                >get started</nuxt-link
                            >
                            <!-- <a
                                href="https://www.youtube.com/watch?v=WOb4cj7izpE"
                                class="video-button"
                                ><i class="las la-play"></i
                            ></a> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import img from '../../assets/images/banner/bg.png'
export default {
    data() {
        return {
            img,
        }
    },
}
</script>

<style></style>
