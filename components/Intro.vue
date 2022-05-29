<template>
  <div class="h-full pb-28 flex flex-col justify-center items-start font-light" :class="themeDark ? 'text-light' : 'text-dark'">
    <p class="text-4xl mb-5 font-normal">
      歡迎！這裡是邱旻鋒的個人網站👋
    </p>
    <p class="text-lg mb-5">
      自 2017 年起自學到現在約 5 年的前端，有過一段時間的兒童程式講師經驗，包含運用拖拉方式帶著小孩子寫出互動程式的 Sketch、APP Inventor，
      到基本的網頁前端技術（包含 HTML、CSS、Javascript）以及基礎的 SQL 與較進階的 Javascript 使用方式，在這段過程中也漸漸加深了自己的觀念。
    </p>
    <p class="text-lg mb-5">
      一直到役畢後進到了新創公司投入開發新產品，學習到了完整的產品設計流程、與 UI/UX 設計師、PM、前後端工程師進行多方討論與溝通，
      也於 2021 年經歷了疫情所帶來的遠距工作模式。
    </p>
    <p class="text-lg mb-20">
      期待著 2022 下半年能為我帶來什麼樣的人生經歷
    </p>
    <div class="w-14 h-14 flex justify-center items-center cursor-pointer self-center" @click="handlePage">
      <div class="relative w-px h-12 overflow-hidden" :class="themeDark ? 'bg-white' : 'bg-black'">
        <div class="scroll-intro absolute w-px h-12 top-0 animate-scrollDown" :class="themeDark ? 'bg-black' : 'bg-white'" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('ui', ['themeDark', 'currentPart'])
  },
  created () {
    if (process.client) {
      this.SET_UI({ key: 'currentPart', value: 0 })
    }
  },
  methods: {
    ...mapMutations('ui', ['SET_UI']),
    handlePage () {
      this.SET_UI({ key: 'currentPart', value: 1 })
    }
  }
}
</script>

<style scoped>
.scroll-intro {
  animation: scrollDown 1.2s ease-out infinite;
}

@keyframes scrollDown {
  0% {
    transform: translateY(-48px);
  }
  100% {
    transform: translateY(48px);
  }
}
</style>
