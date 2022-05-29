<template>
  <div class="main h-screen flex flex-row justify-start items-center pt-32 pl-4 pr-4 pb-4">
    <div class="h-full w-4/12 flex flex-col justify-center items-center">
      <div class="profile pb-28 flex flex-col justify-center items-center">
        <div class="description text-base flex flex-col pb-3 w-60" :class="themeDark ? 'text-light' : 'text-dark'">
          <p>前端工程｜業餘攝影｜遊戲愛好者</p>
        </div>
        <div class="p-2 border-2" :class="themeDark ? 'border-light' : 'border-dark'">
          <img class="w-60" :src="profile">
        </div>
        <div class="description text-base flex flex-col justify-center items-center pt-3 w-60" :class="themeDark ? 'text-light' : 'text-dark'">
          <p>你好！我是 邱旻鋒 ヽ(●´∀`●)ﾉ</p>
          <p>前端工程師，主要使用 Vue 開發</p>
          <p>↙ 這是我的履歷</p>
          <Links />
        </div>
      </div>
    </div>
    <div class="h-full w-6/12">
      <Intro />
    </div>
    <div class="h-full w-2/12">
      <Sidebar />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Links from '~/components/Links.vue'
import Intro from '~/components/Intro.vue'
import Sidebar from '~/components/Sidebar.vue'
import Profile from '~/assets/image/Profile-Source.png'

export default {
  name: 'IndexPage',
  components: {
    Links,
    Intro,
    Sidebar
  },
  computed: {
    ...mapState('ui', ['themeDark', 'currentPart']),
    profile: () => Profile
  }
}
</script>

<style>
.main {
  font-family: 'Noto Sans TC', sans-serif;
}
</style>
