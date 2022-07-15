<template>
  <div>
    <main-header />
    <contact-hero />
    <contact-form />
    <Footer />
  </div>
</template>

<script>
import MainHeader from '~/components/Header/MainHeader.vue'
import ContactForm from '~/components/pages/Contact/ContactForm.vue'
import ContactHero from '~/components/pages/Contact/ContactHero.vue'
export default {
  components: { ContactHero, ContactForm, MainHeader },

}
</script>

<style>

</style>