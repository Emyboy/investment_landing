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
                        <h2 class="inner-banner-title">Create your account</h2>
                        <ul class="breadcums">
                            <li>
                                <nuxt-link to="/">Home</nuxt-link>
                            </li>
                            <li>
                                <span>Registration</span>
                            </li>
                        </ul>
                    </div>
                    <div class="inner-banner-thumb about d-none d-md-block">
                        <img
                            src="~/assets/images/account/thumb.png"
                            alt="account"
                        />
                    </div>
                </div>
            </div>
            <div class="shape1">
                <img src="~/assets/images/about/balls.png" alt="about" />
            </div>
        </section>

        <section class="account-section padding-top padding-bottom">
            <div class="container">
                <div class="row align-items-center gy-5">
                    <div class="col-lg-7 d-none d-lg-block">
                        <div class="account-thumb">
                            <img
                                src="~/assets/images/account/login-thumb.png"
                                alt="account"
                            />
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="account-wrapper">
                            <h2 class="title">Create Your Account</h2>
                            <form class="account-form" @submit="registerUser">
                                <div class="form--group">
                                    <i class="las la-user"></i>
                                    <input
                                        required
                                        type="text"
                                        name="fist-name"
                                        class="form--control"
                                        placeholder="First Name"
                                        v-model="first_name"
                                    />
                                </div>
                                <div class="form--group">
                                    <i class="las la-user"></i>
                                    <input
                                        required
                                        type="text"
                                        name="last-name"
                                        class="form--control"
                                        placeholder="Last Name"
                                        v-model="last_name"
                                    />
                                </div>
                                <div class="form--group">
                                    <i class="las la-user"></i>
                                    <input
                                        required
                                        type="email"
                                        class="form--control"
                                        placeholder="Email or User Name"
                                        v-model="email"
                                    />
                                </div>
                                <div class="form--group">
                                    <i class="las la-phone"></i>
                                    <input
                                        required
                                        type="text"
                                        name="phone-number"
                                        class="form--control"
                                        placeholder="Phone Number"
                                        v-model="phone_number"
                                    />
                                </div>
                                <div class="form--group">
                                    <i class="las la-lock"></i>
                                    <input
                                        required
                                        type="password"
                                        class="form--control"
                                        placeholder="Password"
                                        v-model="password"
                                    />
                                </div>
                                <!-- <div class="form--group">
                                    <i class="las la-lock"></i>
                                    <input
                                        required
                                        type="password"
                                        class="form--control"
                                        placeholder="Re - Password"
                                    />
                                </div> -->
                                <div class="d-flex">
                                    <div class="form--group custom--checkbox">
                                        <input type="checkbox" id="check01" />
                                        <label for="check01"
                                            >I agree with all
                                            <nuxt-link
                                                class="text--primary"
                                                to="terms"
                                                >Terms &amp;
                                                Conditions</nuxt-link
                                            ></label
                                        >
                                    </div>
                                </div>
                                <div class="form--group">
                                    <button class="custom-button">
                                        Register
                                    </button>
                                </div>
                            </form>
                            <span class="subtitle"
                                >Already you have an account here?</span
                            >
                            <nuxt-link
                                to="/login"
                                class="create-account theme-four"
                                >Sign in</nuxt-link
                            >
                            <div class="shape">
                                <img
                                    src="~/assets/images/account/shape.png"
                                    alt="account"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
import AuthServices from '../services/AuthService'
import Cookies from 'js-cookie'
import Navbar from '~/components/Navbar.vue'
import img from '../assets/images/about/bg.png'
import Footer from '~/components/Footer.vue'

export default {
    data() {
        return {
            showPTD: false,
            first_name: '',
            last_name: '',
            phone_number: null,
            email: '',
            password: '',
            img,
        }
    },
    methods: {
        togglePWD() {
            this.showPTD = !this.showPTD
        },

        async registerUser(e) {
            console.log(this.first_name)
            e.preventDefault()
            try {
                const data = {
                    first_name: this.first_name.split(' ')[0],
                    last_name: this.last_name.split(' ')[0],
                    email: this.email,
                    username: String(Date.now()),
                    phone_number: this.phone_number,
                    password: this.password,
                }
                console.log('SENDING ---', data)
                const res = await AuthServices.register(data)
                console.log('REGISTERED --', res.data)
                Cookies.set('auth_token', res.data.jwt, { expires: 7 })
                console.log('DASHBOARD URL --', process.env.DASHBOARD_URL)
                document.location.href =
                    process.env.DASHBOARD_URL + `/login/${res.data.jwt}`
                console.log('THE ENV ---', process.env)
            } catch (error) {
                console.log('ERROR --', { ...error })
                if (error.response?.data?.error?.message) {
                    alert(error.response.data.error.message)
                }
                return Promise.reject(error)
            }
        },
    },
    components: { VuePhoneNumberInput, Navbar, Footer },
}
</script>

<style></style>
