<template>
  <div>
    <main-header />
    <hero />
    <milestones />
    <about-us />
    <why-invest />
    <how-it-works />
    <our-investment />
    <Footer1 />
  </div>
</template>

<script>
import Footer from '~/components/Footer/Footer.vue'
import MainHeader from '~/components/Header/MainHeader.vue'
import AboutUs from '~/components/pages/Landing/AboutUs.vue'
import Hero from '~/components/pages/Landing/Hero.vue'
import HowItWorks from '~/components/pages/Landing/HowItWorks.vue'
import Milestones from '~/components/pages/Landing/Milestones.vue'
import OurInvestment from '~/components/pages/Landing/OurInvestment.vue'
import WhyInvest from '~/components/pages/Landing/WhyInvest.vue'
import Footer1 from '../components/Footer/Footer.vue'
export default {
  components: {
    Hero,
    Milestones,
    AboutUs,
    WhyInvest,
    HowItWorks,
    OurInvestment,
    Footer,
    Footer1,
    MainHeader,
  },
  name: 'IndexPage',
}
</script>
