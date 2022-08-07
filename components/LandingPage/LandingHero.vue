<template>
  <section class="banner-section bg_img" :style="`background: url(${img}) center bottom;`">
        <div class="container">
            <div class="row">
                <div class="col-lg-4  d-none d-lg-block">
                    <div class="banner-thumb">
                        <img src="~assets/images/banner/thumb.png" alt="banner">
                        <div class="shapes ">
                            <div class="shape2">
                                <img src="~assets/images/banner/shape1.png" alt="banner">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="banner-content">
                        <h1 class="banner-title">hyip <span class="text--base">Investment </span><span> Solutions</span></h1>
                        <span class="subtitle">Sodales integer. Eleifend elit hendrerit cras duilum uconsectetuera hymenaeos tempor facilisi </span>
                        <div class="button-group d-flex flex-wrap align-items-center">
                            <a href="sign-up.html" class="cmn--btn btn--secondary">get started</a>
                            <a href="https://www.youtube.com/watch?v=WOb4cj7izpE" class="video-button"><i class="las la-play"></i></a>
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
    data(){
        return {
            img
        }
    }
}
</script>

<style>

</style>