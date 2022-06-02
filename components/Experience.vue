<template>
  <div class="experience h-full pb-28 flex flex-col justify-center items-start" :class="themeDark ? 'text-light' : 'text-dark'">
    <p class="text-3xl mb-6">
      Experience｜經歷
    </p>
    <ul>
      <li class="text-xl mb-4">
        台灣廢除死刑推動聯盟 - 實習生（2016）
      </li>
      <li class="text-xl mb-4">
        婚姻平權小蜜蜂 - 志工（2017）
      </li>
      <li class="text-xl mb-4">
        g0v Summit 零時政府高峰會 - 參與者（2018）
      </li>
      <li class="text-xl mb-4">
        橘子蘋果兒童程式學苑 - 講師 & 助教（2018 - 2019）
      </li>
      <li class="text-xl mb-4">
        世新大學資訊傳播學系 畢業專題 - 前端工程師（2019）
      </li>
      <li class="text-xl mb-4">
        透視數據有限公司 PicSee Inc. - 前端工程師（2020 - 2021）
      </li>
    </ul>
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
