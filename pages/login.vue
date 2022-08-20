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
                        <h2 class="inner-banner-title">Account Login</h2>
                        <ul class="breadcums">
                            <li>
                                <nuxt-link to="/">Home</nuxt-link>
                            </li>
                            <li>
                                <span>Login</span>
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
                                        type="email"
                                        class="form--control"
                                        placeholder="Email"
                                        v-model="identifier"
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

                                <div class="form--group">
                                    <button class="custom-button">Login</button>
                                </div>
                            </form>
                            <span class="subtitle"
                                >Don't have an account here?</span
                            >
                            <nuxt-link
                                to="/register"
                                class="create-account theme-four"
                                >Register</nuxt-link
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
import img from '../assets/images/about/bg.png'

export default {
    data() {
        return {
            showPTD: false,
            identifier: null,
            password: null,

            img,
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
                    identifier: this.identifier,
                    password: this.password,
                }
                console.log('SENDING ---', data)
                const res = await AuthServices.login(data)
                Cookies.set('auth_token', res.data.jwt, { expires: 7 })
                window.open(
                    process.env.DASHBOARD_URL + `/login/${res.data.jwt}`,
                    '_self'
                )
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
