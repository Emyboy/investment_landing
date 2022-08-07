<template>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, doloremque? Deleniti cum amet, sed fugit, suscipit possimus fuga odit aperiam laboriosam iure itaque obcaecati ut nam blanditiis. Facilis, doloremque laboriosam!</p>
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
