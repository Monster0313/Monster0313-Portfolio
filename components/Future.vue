<template>
  <div class="experience h-full pb-28 flex flex-col justify-center items-start" :class="themeDark ? 'text-light' : 'text-dark'">
    <p class="text-3xl mb-6">
      Future｜關於未來
    </p>
    <p class="text-lg mb-4">
      未來，對過去的我來說一直是個遙不可及的想像，尤其是還在隨波逐流的求學時光裡，所能看見的僅僅是眼前的短暫事物。
      這也是為什麼我雖然讀了台中一中卻沒有拿到畢業證書，升上大學以為找到自己熱愛的科系，然而現在卻成為了一名前端工程師的原因。
    </p>
    <p class="text-lg mb-4">
      過去的事情無法改變了，也是在開始工作之後，認知到唯有能力以後才有資格選擇自己的未來，因此疫情之下帶給我的不只是新的工作型態，
      更多的是對於未來的想像空間。我喜歡攝影、出遊、看海，也享受著與自己要好的朋友們一起在網路遊戲的世界互動，
      更喜歡開著車載著朋友到過去不曾見過的台灣角落。
    </p>
    <p class="text-lg mb-4">
      很幸運地認識了一群摯友，在台灣的最南點，我們發現到彼此都期待著未來有一天能夠到這南國的小鎮定居，於是訂定了這個目標。
    </p>
    <p class="text-lg mb-4">
      「十年以後，我們來這裡蓋一間民宿吧。」我們躺在星空的草皮下立下了這個誓約
    </p>
    <p class="text-lg mb-4">
      十年對我來說是個長期規劃，而在五年之內希望自己能夠成為一位有能力的資深工程師。
    </p>
    <p class="text-lg mb-4">
      不論是新的工作還是新的生活，我期待著。
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
