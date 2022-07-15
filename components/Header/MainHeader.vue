<template>
  <header class="header-section bg-white shadow-sm">
    <div class="header-top">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-6">
            <ul class="support-area">
              <li>
                <nuxt-link to="#0"><i class="flaticon-support"></i>Support</nuxt-link>
              </li>
              <li>
                <nuxt-link to="Mailto:info@hyipland.com"
                  ><i class="flaticon-email"></i>info@hyipland.com
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="col-6">
            <ul class="cart-area">
              <li>
                <i class="flaticon-globe"></i>
                <div class="select-area">
                  <select class="select-bar" style="display: none">
                    <option value="en">English</option>
                    <option value="bn">Bangla</option>
                    <option value="sp">Spanish</option>
                  </select>
                  <div class="nice-select select-bar" tabindex="0">
                    <span class="current">English</span>
                    <ul class="list">
                      <li data-value="en" class="option selected">English</li>
                      <li data-value="bn" class="option">Bangla</li>
                      <li data-value="sp" class="option">Spanish</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <nuxt-link to="sign-in.html">Sign In</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/register">Register</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="container">
        <div class="header-area">
          <div class="logo">
            <nuxt-link to="/">
              <img src="~assets/images/logo/logo.png" alt="logo" />
            </nuxt-link>
          </div>
          <ul class="menu" :class="`${showNav && 'active'}`">
            <li>
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact">Contact</nuxt-link>
            </li>
            <li class="pr-0">
              <nuxt-link to="/register" class="custom-button">Join Us</nuxt-link>
            </li>
          </ul>
          <div class="header-bar d-lg-none" @click="toggleShowNav">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
    data(){
        return {
            showNav: false
        }
    },
    methods: {
        toggleShowNav(){
            alert("hi")
            this.showNav = !this.showNav
        }
    }

}
</script>

<style></style>
