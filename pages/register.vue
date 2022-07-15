<template>
  <div
    class="account-section bg_img"
    data-background="assets/images/account-bg.jpg"
    :style="`background-image: url('${bg_img}')`"
  >
    <div class="container">
      <div class="account-title text-center">
        <nuxt-link to="/" class="back-home"
          ><i class="fas fa-angle-left"></i
          ><span
            >
            <span class="d-none d-sm-inline-block">Back Home</span></span
          ></nuxt-link
        >
        <a href="#0" class="logo">
          <img src="~/assets/images/logo/footer-logo.png" alt="logo" />
        </a>
      </div>
      <div class="account-wrapper">
        <div class="account-header">
          <h4 class="title">Let's get started</h4>
          <a href="#0" class="sign-in-with"
            ><img src="~/assets/images/icon/google.png" alt="icon" /><span
              >Sign Up with Google</span
            ></a
          >
        </div>
        <div class="or">
          <span>OR</span>
        </div>
        <div class="account-body">
          <span class="d-block mb-20">Sign up with your work email</span>
          <form class="account-form">
            <div class="form-group">
              <label for="sign-up">Your Email </label>
              <input type="text" placeholder="Enter Your Email " id="sign-up" />
            </div>
            <div class="form-group text-center">
              <button type="submit">Try It Now</button>
              <span class="d-block mt-15"
                >Already have an account?
                <a href="sign-in.html">Sign In</a></span
              >
            </div>
          </form>
        </div>
      </div>
      <div class="sponsor-slider-wrapper cl-white text-center mt-40">
        <h5 class="slider-heading mb-3">
          Used by over 1,000,000 people worldwide
        </h5>
        
      </div>
    </div>
  </div>
</template>

<script>
import img from '~/assets/images/account-bg.jpg'
export default {
    data(){
        return {
            bg_img: img
        }
    }
}
</script>

<style></style>
