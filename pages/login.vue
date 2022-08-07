<template>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi eligendi mollitia hic sed quia molestias fuga ipsum, cum distinctio earum ullam quis perspiciatis velit deleniti saepe. Sequi dicta enim rem!</p>
</template>

<script>

import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
import AuthServices from '../services/AuthService'
import Cookies from 'js-cookie'

export default {
  data() {
    return {
      showPTD: false,
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
          identifier: this.email,
          password: this.password
        }
        console.log('SENDING ---', data)
        const res = await AuthServices.login(data)
        Cookies.set("auth_token", res.data.jwt, { expires: 7 });
        window.open(process.env.DASHBOARD_URL + `/login/${res.data.jwt}`, "_self")
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
