<template>
    <div>
        <Navbar />
        <section
            class="inner-banner bg_img overflow-initial"
            :style="`background: url(${img}) no-repeat center bottom;`"
        >
            <div class="container">
                <div class="inner-banner-wrapper d-flex contact">
                    <div class="inner-banner-content contact-banner">
                        <h2 class="inner-banner-title">
                            get in touch <br />
                            with us
                        </h2>
                        <ul class="breadcums">
                            <li>
                                <nuxt-link to="/">Home</nuxt-link>
                            </li>
                            <li>
                                <span>Contact</span>
                            </li>
                        </ul>
                    </div>
                    <div class="contact-wrapper fadeInUp">
                        <h4 class="title">Send Us a Message</h4>
                        <form class="contact-form">
                            <div class="form--group">
                                <input
                                    type="text"
                                    class="form--control"
                                    placeholder="Name"
                                />
                            </div>
                            <div class="form--group">
                                <input
                                    type="email"
                                    class="form--control"
                                    placeholder="Email"
                                />
                            </div>
                            <div class="form--group">
                                <input
                                    type="tel"
                                    class="form--control"
                                    placeholder="Phone"
                                />
                            </div>
                            <span>Preffered method of communication</span>
                            <div class="choose-method">
                                <div class="form--group custom--radio">
                                    <input
                                        type="radio"
                                        id="choose-method"
                                        name="communication-method"
                                        checked=""
                                    />
                                    <label for="choose-method">Email</label>
                                </div>
                                <div class="form--group custom--radio">
                                    <input
                                        type="radio"
                                        id="choose-method-2"
                                        name="communication-method"
                                    />
                                    <label for="choose-method-2">Phone</label>
                                </div>
                            </div>
                            <div class="form--group">
                                <textarea
                                    class="form--control"
                                    cols="30"
                                    rows="10"
                                    placeholder="Message"
                                ></textarea>
                            </div>
                            <div class="form--group">
                                <button class="custom-button" type="submit">
                                    SUBMIT NOW
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="shape1 paroller" data-paroller-factor=".2">
                <img src="~assets/images/about/balls.png" alt="about" />
            </div>
        </section>

        <section class="contact-info padding-top padding-bottom">
            <div class="container">
                <div class="row gy-5 flex-column-reverse flex-lg-row">
                    <div class="col-lg-6 col-xl-7">
                        <div class="row g-4 justify-content-center mb-4">
                            <div class="col-md-6 col-lg-10 col-xl-6 fadeInLeft">
                                <div class="contact-info-item">
                                    <div class="contact-item-thumb">
                                        <img
                                            src="~assets/images/contact/location.png"
                                            alt="contact"
                                        />
                                    </div>
                                    <div class="contact-item-content">
                                        <h4 class="title">Office Address</h4>
                                        <p>
                                            USA, Callifornia 20, Firs Avenue,
                                            Callifornia
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row g-4 justify-content-center">
                            <div class="col-md-6 col-lg-10 col-xl-6 fadeInLeft">
                                <div class="contact-info-item">
                                    <div class="contact-item-thumb">
                                        <img
                                            src="~assets/images/contact/email.png"
                                            alt="contact"
                                        />
                                    </div>
                                    <div class="contact-item-content">
                                        <h4 class="title">Email Address</h4>
                                        <a href="Mailto:mdudnfsddf@gmal.com"
                                            >contact@example.com</a
                                        >
                                        <a href="Mailto:mdudnfsddf@gmal.com"
                                            >info@example.com</a
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-10 col-xl-6 fadeInLeft">
                                <div class="contact-info-item">
                                    <div class="contact-item-thumb">
                                        <img
                                            src="~assets/images/contact/phone.png"
                                            alt="contact"
                                        />
                                    </div>
                                    <div class="contact-item-content">
                                        <h4 class="title">Contact Number</h4>
                                        <a href="Tel:90172834"
                                            >(123) 456-7890 - 00521</a
                                        >
                                        <a href="Tel:90172834"
                                            >(123) 456-7891 - 00626</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="col-lg-6 col-xl-5 fadeInRight d-none d-lg-block"
                    >
                        <div class="contact-info-thumb">
                            <img
                                src="~assets/images/contact/thumb.png"
                                alt="contact"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="padding-bottom">
            <div class="container">
                <div class="row gy-5">
                    <div class="col-lg-6 fadeInLeft">
                        <div class="subscription-wrapper">
                            <h2 class="title">Subscribe Newslatter</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Accusantium itaque at placeat
                                in dolorum eligendi consectetur soluta nesciunt
                                sequi
                            </p>
                            <form class="subscription-form">
                                <div class="form--group">
                                    <input
                                        type="email"
                                        class="form--control"
                                        placeholder="Enter email Address"
                                    />
                                    <button type="submit" class="custom-button">
                                        <i class="lab la-telegram-plane"></i>
                                    </button>
                                </div>
                            </form>
                            <h2 class="contact-num">
                                Call Us : <a href="tel:0709">+0123-456-789</a>
                            </h2>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="payment-gateway-two-wrapper">
                            <div class="section-header">
                                <h2 class="title fadeInUp">Payment Gateway</h2>
                                <p class="fadeInUp">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Tempora, in, minus tempore
                                    iusto error molestias.
                                </p>
                            </div>
                            <div class="row g-3">
                                <div
                                    class="col-6 col-md-4 col-lg-6 col-xl-5 fadeInUp"
                                    data--delay=".2s"
                                >
                                    <div class="payment-item-two">
                                        <div class="thumb">
                                            <img
                                                src="~assets/images/gateway/icon5.png"
                                                alt="gateway"
                                            />
                                        </div>
                                        <h6 class="title">Bitcoin</h6>
                                    </div>
                                </div>
                                <div
                                    class="col-6 col-md-4 col-lg-6 col-xl-5 fadeInUp"
                                    data--delay=".3s"
                                >
                                    <div class="payment-item-two">
                                        <div class="thumb">
                                            <img
                                                src="~assets/images/gateway/icon6.png"
                                                alt="gateway"
                                            />
                                        </div>
                                        <h6 class="title">Ripple</h6>
                                    </div>
                                </div>
                                <div
                                    class="col-6 col-md-4 col-lg-6 col-xl-5 fadeInUp"
                                    data--delay=".4s"
                                >
                                    <div class="payment-item-two">
                                        <div class="thumb">
                                            <img
                                                src="~assets/images/gateway/icon7.png"
                                                alt="gateway"
                                            />
                                        </div>
                                        <h6 class="title">Litecoin</h6>
                                    </div>
                                </div>
                                <div
                                    class="col-6 col-md-4 col-lg-6 col-xl-5 fadeInUp"
                                    data--delay=".5s"
                                >
                                    <div class="payment-item-two">
                                        <div class="thumb">
                                            <img
                                                src="~assets/images/gateway/icon8.png"
                                                alt="gateway"
                                            />
                                        </div>
                                        <h6 class="title">Zcash Coin</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import img from '../assets/images/contact/bg.png'
import Navbar from '~/components/Navbar.vue';
export default {
    data() {
        return {
            img,
        };
    },
    components: { Navbar }
}
</script>

<style></style>
