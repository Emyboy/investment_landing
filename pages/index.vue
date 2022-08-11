<template>
  <div>
    <Navbar />
    <LandingHero />
    <HowItWorks />
    <OurFeatures />
    <LandingInvestmentPlan />
    <OurNumbers />
    <WhyStayWithUs />
    <!-- <Reviews /> -->
    <HowCanWeHelp />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import LandingHero from '../components/LandingPage/LandingHero.vue';
import HowItWorks from '~/components/LandingPage/HowItWorks.vue';
import OurFeatures from '../components/LandingPage/OurFeatures.vue';
import LandingInvestmentPlan from '../components/LandingPage/LandingInvestmentPlan.vue';
import OurNumbers from '../components/LandingPage/OurNumbers.vue';
import WhyStayWithUs from '../components/LandingPage/WhyStayWithUs.vue';
import Reviews from '../components/LandingPage/Reviews.vue';
import HowCanWeHelp from '../components/LandingPage/HowCanWeHelp.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Navbar,
    LandingHero,
    HowItWorks,
    OurFeatures,
    LandingInvestmentPlan,
    OurNumbers,
    WhyStayWithUs,
    Reviews,
    HowCanWeHelp,
    Footer
},
  name: 'IndexPage',
}
</script>
