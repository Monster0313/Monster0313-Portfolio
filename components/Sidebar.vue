<template>
  <div
    v-show="currentPart > PART.intro"
    class="sidebar h-full pb-60 pr-14 flex flex-col justify-center items-end text-xl"
    :class="themeDark ? 'text-light' : 'text-dark'"
  >
    <div
      v-for="(i, index) in sidebarList"
      :key="index"
      class="relative w-32 mb-8 pl-2"
      :class="currentPart === i.part && themeDark ? 'border-l-2 border-light' :
        currentPart === i.part && !themeDark ? 'border-1-2 border-dark' : ''"
      @click="handlePart(i.part)"
    >
      <span class="cursor-pointer">{{ i.text }}</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
// intro (不做)
// about 關於我
// experience 學歷經歷
// portfolio 作品集
// Tutoring 橘蘋時期
// picsee 透視時期
// future 未來目標
const PART = {
  intro: 0,
  about: 1,
  experience: 2,
  portfolio: 3,
  tutoring: 4,
  picsee: 5,
  future: 6,
  credit: 7
}

export default {
  data () {
    return {
      PART
    }
  },
  computed: {
    ...mapState('ui', ['currentPart', 'themeDark']),
    sidebarList () {
      return [
        {
          part: PART.about,
          text: 'About Me'
        },
        {
          part: PART.experience,
          text: 'Experience'
        },
        {
          part: PART.portfolio,
          text: 'Portfolio'
        },
        {
          part: PART.tutoring,
          text: 'Tutoring'
        },
        {
          part: PART.picsee,
          text: 'At PicSee'
        },
        {
          part: PART.future,
          text: 'Future'
        },
        {
          part: PART.credit,
          text: 'Credit'
        }
      ]
    }
  },
  methods: {
    ...mapMutations('ui', ['SET_UI']),
    handlePart (part) {
      this.SET_UI({ key: 'currentPart', value: part })
    }
  }
}
</script>

<style scoped>
.sidebar {
  font-family: 'Abel', sans-serif;
}
</style>
