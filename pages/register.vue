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
          ><span>
            <span class="d-none d-sm-inline-block">Back Home</span></span
          ></nuxt-link
        >
        <nuxt-link to="/" class="logo">
          <img src="~/assets/images/logo/footer-logo.png" alt="logo" />
        </nuxt-link>
      </div>
      <div class="account-wrapper">
        <!-- <div class="account-header">
          <h4 class="title">Let's get started</h4>
          <a href="#0" class="sign-in-with"
            ><img src="~/assets/images/icon/google.png" alt="icon" /><span
              >Sign Up with Google</span
            ></a
          >
        </div> -->
        <!-- <div class="or">
          <span>OR</span>
        </div> -->
        <div class="account-body">
          <h3 class="d-block mb-5">Register</h3>
          <form class="account-form" @submit="registerUser">
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label for="sign-up">First Name</label>
                  <input
                    required
                    autofocus
                    type="text"
                    placeholder="Enter First Name "
                    id="sign-up"
                    v-model="first_name"
                  />
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label for="sign-up">Last Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter Last Name"
                    id="sign-up"
                    v-model="last_name"
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="sign-up">Your Email </label>
              <input
                required
                type="email"
                placeholder="Enter Your Email "
                id="sign-up"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <label for="sign-up">Phone Number </label>
              <!-- <input
                required type="text" placeholder="Enter Your Email " id="sign-up" /> -->
              <VuePhoneNumberInput id="sign-up" v-model="phone_number" />
            </div>
            <div class="form-group mt-4">
              <label for="sign-up">Password</label>
              <div class="input-group mb-3">
                <input
                  required
                  :type="`${showPTD ? 'text' : 'password'}`"
                  class="form-control"
                  placeholder="* * * * * * *"
                  v-model="password"
                />
                <div class="input-group-append" @click="togglePWD">
                  <span class="input-group-text" id="basic-addon2"
                    ><i :class="`${`fa fa-eye${showPTD ? '' : '-slash'}`}`"></i
                  ></span>
                </div>
              </div>
            </div>

            <div class="form-group text-center">
              <button
                type="submit"
                class="btn mt-4 bg-accent text-white custom-button"
              >
                Register
              </button>
              <span class="d-block mt-15"
                >Already have an account?
                <nuxt-link to="/login"><a>Sign In</a></nuxt-link></span
              >
            </div>
          </form>
        </div>
      </div>
      <div class="sponsor-slider-wrapper cl-white text-center mt-40">
        <h5 class="slider-heading mb-3">
          Used by over 678,000 people worldwide
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import img from '~/assets/images/account-bg.jpg'
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
import AuthServices from '../services/AuthService'
import Cookies from 'js-cookie'

export default {
  data() {
    return {
      bg_img: img,
      showPTD: false,
      first_name: '',
      last_name: null,
      phone_number: null,
      email: null,
      password: null,
    }
  },
  methods: {
    togglePWD() {
      this.showPTD = !this.showPTD
    },

    async registerUser(e) {
      e.preventDefault()
      try {
        const data = {
          first_name: this.first_name.split(' ')[0],
          last_name: this.last_name.split(' ')[0],
          email: this.email,
          username: String(Date.now()),
          phone_number: this.phone_number,
          password: this.password
        }
        console.log('SENDING ---', data)
        const res = await AuthServices.register(data)
        console.log('REGISTERED --', res.data)
        Cookies.set("auth_token", res.data.jwt, { expires: 7 });
        console.log('DASHBOARD URL --', process.env.DASHBOARD_URL)
        document.location.href = process.env.DASHBOARD_URL + `/login/${res.data.jwt}`
        console.log('THE ENV ---', process.env)

      } catch (error) {
        console.log('ERROR --', error)
        return Promise.reject(error)
      }
    },
  },
  components: { VuePhoneNumberInput },
}
</script>

<style></style>
