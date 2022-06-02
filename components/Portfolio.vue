<template>
  <div class="h-full overflow-hidden pt-12 pb-28" :class="themeDark ? 'text-light' : 'text-dark'">
    <div class="h-full w-full flex flex-row flex-wrap justify-evenly items-start">
      <div class="w-80 h-40 m-2 bg-white"></div>
      <div class="w-80 h-40 m-2 bg-white"></div>
      <div class="w-80 h-40 m-2 bg-white"></div>
      <div class="w-80 h-40 m-2 bg-white"></div>
      <div class="w-80 h-40 m-2 bg-white"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
  computed: {
    ...mapState('ui', ['themeDark', 'currentPart']),
    projectList () {
      return [
        {
          title: 'AQI 台灣空氣品質地圖',
          description: `這份專案是大二時資料結構課程所做的課堂作業，原先老師僅要求依照課堂範本使用iframe+Ubike等API資料（資料任選），
                        但因為認為這樣不夠具有挑戰性，就自己照著文件首次嘗試使用Google Maps API並使用開放資料的AQI資料，
                        並根據數值變化呈現不同樣式，效果如圖，由於都是第一次嘗試從閱讀API文件到實際接上並調整花費了約三天完成。`,
          images: [
            Aqi1,
            Aqi2
          ],
          video: Aqi
        },
        {
          title: '致．不義時光',
          description: `這份專案是大三時的畢業專題，主要用途為實體展覽時方便宣傳桌遊（主產品）並介紹我們對於整個故事背後的世界觀與設計脈絡，
                        雖然在這個專案並沒有接到API，但在這裡第一次大量使用到了Vuex，並加深了對於資料流的概念，也為後續的專案打下基礎。
                        而這份專案是初次使用Node.js與Express.js架設網頁伺服器，並使用Nginx作反向代理，在這一年也學到了不少後端概念。`,
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
          title: '個人網站（舊版）',
          description: `這份專案是在2020年所使用的個人網站，當時的時空背景為即將畢業與即將服役，雖然有目標卻焦慮著自己的能力不足，
                        於是嘗試在這版的個人網站多了一些RWD、CSS切版等等的嘗試，花了約兩個星期將網頁架設完畢，使用自有的固定IP、
                        自己購入的網域、Cloudflare提供的SSL等資源架設在自家閒置Linux主機上透過Nodemon穩定運作。`,
          images: [
            Profile1,
            Profile2
          ],
          video: Profile
        },
        {
          title: '取得Github公開Repos',
          description: `這份專案是2020年應徵PicSee時所要求進行的事前作業，需要使用Infinite Scroll或是做出如影片Scroll後改變背景的效果，
                        因為一直以來都蠻好奇如何做出後者的效果，因此選擇了這一項作為事前作業，也在這份專案練習到了API傳遞參數等功能。`,
          images: [
            Repos1,
            Repos2,
            Repos3,
            Repos4
          ],
          video: Repos
        },
        {
          title: '楓之谷名片產生器',
          description: `這份專案是在2022年4月完成的，花費時間為一天，專案的靈感來自於自己對於這款遊戲的熱愛，也剛好朋友發了一張自製的遊戲名片，
                        於是跟他取得了同意後製作出了這個產生器，這份專案相對麻煩的功能在於上傳角色圖片與下載完成圖的功能，幸好在PicSee時有做過類似功能，
                        上傳圖片的部分並未造成太大的技術障礙，而下載圖片的部分是第一次實作，最開心的點在於使用的套件下載邏輯與自己規劃的Layout一致，
                        因此下載僅需要將範圍設定到Component的部分就完成了，所以做出這個功能僅花費約30分鐘即完成。`,
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
  }
}
</script>

<style scoped>

</style>
