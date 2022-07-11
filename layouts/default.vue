<template>
  <div>
    <main-header />
    <Nuxt />
  </div>
</template>

<script>
import MainHeader from '~/components/Header/MainHeader.vue'
export default {
  components: { MainHeader },
  mounted() {
    document
      .querySelector('html').className = 
        ' sizes customelements history pointerevents postmessage webgl websockets cssanimations csscolumns csscolumns-width csscolumns-span csscolumns-fill csscolumns-gap csscolumns-rule csscolumns-rulecolor csscolumns-rulestyle csscolumns-rulewidth csscolumns-breakbefore csscolumns-breakafter csscolumns-breakinside flexbox picture srcset webworkers'
      
  },
}
</script>

<style></style>
