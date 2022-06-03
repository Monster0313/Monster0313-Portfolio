<template>
  <div class="h-full overflow-hidden pt-12 pb-28" :class="themeDark ? 'text-light' : 'text-dark'">
    <div class="h-full w-full flex flex-row flex-wrap justify-evenly items-start">
      <div
        v-for="(i, index) in projectList"
        :key="index"
        class="m-2 relative cursor-pointer"
        @click="handleProject(index)"
      >
        <img
          :src="i.images[0]"
          class="w-80 h-40"
        >
        <p
          class="w-80 mt-1 absolute"
          :class="themeDark ? 'text-light' : 'text-dark'"
        >
          【{{ i.title }}】
        </p>
      </div>
      <Card
        v-if="isProjectCard"
        :title="cardData.title"
        :description="cardData.description"
        :url="cardData.url"
        :images="cardData.images"
        :video="cardData.video"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Card from './Portfolio/Card.vue'

import Aqi1 from '~/assets/image/portfolio/aqi-1.png'
import Aqi2 from '~/assets/image/portfolio/aqi-2.png'
import Maple1 from '~/assets/image/portfolio/maple-1.png'
import Maple2 from '~/assets/image/portfolio/maple-2.png'
import Maple3 from '~/assets/image/portfolio/maple-3.png'
import Maple4 from '~/assets/image/portfolio/maple-4.png'
import Maple5 from '~/assets/image/portfolio/maple-5.png'
import Maple6 from '~/assets/image/portfolio/maple-6.png'
import Profile1 from '~/assets/image/portfolio/profile-1.png'
import Profile2 from '~/assets/image/portfolio/profile-2.png'
import Repos1 from '~/assets/image/portfolio/repos-1.png'
import Repos2 from '~/assets/image/portfolio/repos-2.png'
import Repos3 from '~/assets/image/portfolio/repos-3.png'
import Repos4 from '~/assets/image/portfolio/repos-4.png'
import Ultimo1 from '~/assets/image/portfolio/ultimo-1.png'
import Ultimo2 from '~/assets/image/portfolio/ultimo-2.png'
import Ultimo3 from '~/assets/image/portfolio/ultimo-3.png'
import Ultimo4 from '~/assets/image/portfolio/ultimo-4.png'
import Ultimo5 from '~/assets/image/portfolio/ultimo-5.png'
import Aqi from '~/assets/video/aqi.mp4'
import Maple from '~/assets/video/maple.mp4'
import Profile from '~/assets/video/profile.mp4'
import Repos from '~/assets/video/repos.mp4'
import Ultimo from '~/assets/video/ultimo.mp4'

export default {
  components: {
    Card
  },
  data () {
    return {
      cardData: {}
    }
  },
  computed: {
    ...mapState('ui', ['themeDark', 'currentPart', 'isProjectCard']),
    projectList () {
      return [
        {
          title: 'AQI 台灣空氣品質指標地圖（2018年)',
          description: `這份專案是大二時資料結構課程所做的課堂作業，原先老師僅要求依照課堂範本使用 iframe & Ubike 等 API 資料（資料任選），
                        但因為認為這樣不夠具有挑戰性，就自己照著文件首次嘗試串接 Google Maps API 並使用開放資料的空氣品質資料，
                        並根據數值變化呈現不同樣式，效果如附圖，由於都是第一次嘗試從閱讀 API 文件到實際接上並調整花費了約三天完成。`,
          url: 'https://github.com/Monster0313/Taiwan.AirQualityIndicator.Map',
          images: [
            Aqi1,
            Aqi2
          ],
          video: Aqi
        },
        {
          title: '致．不義時光（2019年)',
          description: `這份專案是大三時的畢業專題，主要用途為實體展覽時方便宣傳桌遊（主產品）並介紹我們對於整個故事背後的世界觀與設計脈絡，
                        雖然在這個專案並沒有接到 API ，但在這裡第一次大量使用到了 Vuex ，並加深了對於資料流的概念，也為後續的專案打下基礎。
                        而這份專案是初次使用 Node.js 與 Express.js 架設網頁伺服器，並使用 Nginx 作反向代理，在這一年也學到了不少後端概念。`,
          url: 'https://github.com/Monster0313/Ultimostudio-web',
          images: [
            Ultimo1,
            Ultimo2,
            Ultimo3,
            Ultimo4,
            Ultimo5
          ],
          video: Ultimo
        },
        {
          title: '舊版個人網站（2020年）',
          description: `這份專案是在 2020 年所使用的個人網站，當時的時空背景為即將畢業與即將服役，雖然有目標卻焦慮著自己的能力不足，
                        於是嘗試在這版的個人網站多了一些 RWD、CSS 切版等等的嘗試，花了約兩個星期將網頁架設完畢，使用自有的固定IP、
                        自己購入的網域、Cloudflare 提供的 SSL 等資源架設在自家閒置 Linux 主機上透過 Nodemon 穩定運作。`,
          url: 'https://github.com/Monster0313/Monster0313-Profile',
          images: [
            Profile1,
            Profile2
          ],
          video: Profile
        },
        {
          title: '取得Github公開Repos（2020年）',
          description: `這份專案是 2020 年應徵 PicSee 時所要求進行的事前作業，需要使用 Infinite Scroll 或是做出如影片 Scroll 後改變背景的效果，
                        因為一直以來都蠻好奇如何做出後者的效果，因此選擇了這一項作為事前作業，也在這份專案練習到了 API 傳遞參數等功能。`,
          url: 'https://github.com/Monster0313/Public-Repos-List',
          images: [
            Repos1,
            Repos2,
            Repos3,
            Repos4
          ],
          video: Repos
        },
        {
          title: '楓之谷名片產生器（2022年）',
          description: `這份專案是在 2022 年 4 月完成的，花費時間為一天，專案的靈感來自於自己對於這款遊戲的熱愛，也剛好朋友發了一張自製的遊戲名片，
                        於是跟他取得了同意後製作出了這個產生器，這份專案相對麻煩的功能在於上傳角色圖片與下載完成圖的功能，正好在 PicSee 時有做過類似功能，
                        上傳圖片的部分並未造成太大的技術障礙，而下載圖片的部分是第一次實作，最開心的點在於使用的套件下載邏輯與自己規劃的 Layout 一致，
                        因此下載僅需要將範圍設定到 Component 的部分就完成了，所以做出這個功能僅花費約 30 分鐘即完成。`,
          url: 'https://github.com/Monster0313/maplestory-id-card-generator',
          images: [
            Maple1,
            Maple2,
            Maple3,
            Maple4,
            Maple5,
            Maple6
          ],
          video: Maple
        }
      ]
    }
  },
  methods: {
    ...mapMutations('ui', ['SET_UI']),
    handleProject (index) {
      this.insertCardData(index)
      this.SET_UI({ key: 'isProjectCard', value: true })
    },
    insertCardData (index) {
      this.cardData = this.projectList[index]
    }
  }
}
</script>

<style scoped>

</style>
