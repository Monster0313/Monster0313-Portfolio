<template>
  <div class="experience h-full pb-28 flex flex-col justify-center items-start" :class="themeDark ? 'text-light' : 'text-dark'">
    <p class="text-3xl mb-6">
      About Me｜關於我
    </p>
    <p class="text-lg mb-4">
      我是邱旻鋒，在網路上與朋友間的暱稱叫小怪物。
    </p>
    <p class="text-lg mb-4">
      2017年以前就讀社會心理學系的我，認知到自己只喜歡社會學並不適合心理學因此有了轉系的念頭，因緣際會下認識了一位在接前端案子的朋友。
      一直以來很好奇網頁這項專業，而那位朋友也很熱心地指導我入門後轉到相關科系，於是從2017年開始了漫長的自學之路。
    </p>
    <p class="text-lg mb-4">
      從最基礎的HTML、CSS、Javascript，一路學習到Jquery、API原理、資料結構、ES6等，前後花了兩年打了基礎，前端的世界剛好在這段時間百花齊放，
      React、Vue、Angular等框架也開始出現在台灣的前端社群中，因為朋友推薦的緣故也學習了Vue框架，也因此使用到現在。
    </p>
    <p class="text-lg mb-4">
      很幸運地在就學時期能夠在兒童教育機構教導程式，也因此更加深觀念以及更清晰地梳理了自己的邏輯，
      最有成就感的時刻在於看見孩子們因為我的引導而解開問題的笑容，從那時候就確定了自己走在了正確的路上。
    </p>
    <p class="text-lg mb-4">
      或許，你對我還有更多想了解的問題，有機會的話很期待能夠面對面聊聊你的疑問。
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('ui', ['themeDark', 'currentPart'])
  }
}
</script>

<style scoped>

</style>
