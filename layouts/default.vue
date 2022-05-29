<template>
  <div class="default h-screen overflow-hidden" :class="themeDark ? 'bg-dark' : 'bg-light'">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  computed: {
    ...mapState('ui', ['themeDark'])
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700&display=swap');
.default {
  font-family: 'Abel', sans-serif;
}
</style>
