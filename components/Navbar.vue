<template>
  <div class="navbar w-screen fixed top-0 p-4 flex flex-row justify-between">
    <div class="logo w-fit cursor-pointer">
      <div
        class="flex flex-col justify-start min-h-fit max-h-20"
        @click="handlePart"
      >
        <span class="text-base" :class="themeDark ? 'text-light' : 'text-dark'">Monster0313</span>
        <span class="text-base" :class="themeDark ? 'text-light' : 'text-dark'">Minfeng</span>
        <span class="text-base" :class="themeDark ? 'text-light' : 'text-dark'">The Portfolio</span>
      </div>
    </div>
    <div class="theme flex flex-row items-center ">
      <div class="light mr-2">
        <img class="w-5" :src="themeDark ? sunWhite : sun" alt="">
      </div>
      <div @click="updateTheme">
        <Switch
          v-model="themeDark"
          :class="themeDark ? 'bg-light' : 'bg-dark'"
          class="relative inline-flex h-[20px] w-9 shrink-0 cursor-pointer
            rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out
            focus:outline-none focus-visible:ring-2 focus-visible:ring-white
            focus-visible:ring-opacity-75"
        >
          <span
            :class="themeDark ? 'translate-x-4 bg-dark' : 'translate-x-0 bg-light'"
            class="inline-block h-4 w-4 transform rounded-full transition-transform"
          />
        </Switch>
      </div>
      <div class="dark ml-2">
        <img class="w-4" :src="themeDark ? moonWhite : moon" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Moon from '~/assets/image/moon.png'
import MoonWhite from '~/assets/image/moon-white.png'
import Sun from '~/assets/image/sun.png'
import SunWhite from '~/assets/image/sun-white.png'
import Cv from '~/assets/image/cv.png'
import CvWhite from '~/assets/image/cv-white.png'
// brightness <a href="https://www.flaticon.com/free-icons/brightness" title="brightness icons">Brightness icons created by Tempo_doloe - Flaticon</a>
// moon <a href="https://www.flaticon.com/free-icons/moon" title="moon icons">Moon icons created by iconixar - Flaticon</a>
// cv <a href="https://www.flaticon.com/free-icons/profile" title="profile icons">Profile icons created by Prosymbols Premium - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/stack-overflow" title="stack overflow icons">Stack overflow icons created by Pixel perfect - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/discord" title="discord icons">Discord icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Uniconlabs - Flaticon</a>
export default {
  name: 'Navbar',
  data () {
    return {
      isDark: Boolean
    }
  },
  computed: {
    ...mapState('ui', ['themeDark']),
    cv: () => Cv,
    sun: () => Sun,
    moon: () => Moon,
    cvWhite: () => CvWhite,
    sunWhite: () => SunWhite,
    moonWhite: () => MoonWhite
  },
  created () {
    this.isDark = this.themeDark
  },
  methods: {
    ...mapMutations('ui', ['SET_UI']),
    updateTheme () {
      this.isDark = !this.isDark
      this.SET_UI({ key: 'themeDark', value: this.isDark })
    },
    handlePart () {
      this.SET_UI({ key: 'currentPart', value: 0 })
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
