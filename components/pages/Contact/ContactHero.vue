<template>
  <section
    class="bg_img hero-section-2 left-bottom-lg-max"
    data-background="assets/images/about/hero-bg5.png"
    :style="`background-image: url('${bg_img}')`"
  >
    <div class="container">
      <div class="hero-content text-white">
        <h1 class="title">Contact</h1>
        <ul class="breadcrumb">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import bg from '~/assets/images/about/hero-bg5.png';
export default {
    data(){
        return {
            bg_img: bg
        }
    }
}
</script>

<style></style>
