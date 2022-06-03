<template>
  <div
    class="card w-screen h-screen p-6 pb-10 overflow-y-scroll fixed bg-dark flex flex-col justify-start items-center top-0 left-0 z-10"
    :class="themeDark ? 'bg-opacity-90' : 'bg-opacity-95'"
  >
    <img
      class="absolute w-8 right-14 top-14 cursor-pointer"
      :src="close"
      @click="handleClose()"
    >
    <div class="w-2/4 mt-4 text-left">
      <p class="text-3xl text-light">
        {{ `專案名稱：【  ${title}  】` }}
      </p>
    </div>
    <div class="w-2/4 mt-5 text-left flex justify-start items-center">
      <a
        :href="url"
        target="_blank"
        rel="nonoreferrer noopener"
      >
        {{ `專案連結：${url}` }}
      </a>
    </div>
    <div class="mt-5 text-left flex justify-center items-center">
      <p class="w-2/4 text-xl text-light font-light">
        {{ description }}
      </p>
    </div>
    <div
      v-for="(image, index) in images"
      :key="index"
      class="mt-10 flex justify-center items-center"
    >
      <img
        class="w-3/4 object-cover"
        :src="image"
      >
    </div>
    <div class="mt-10 flex justify-center items-center">
      <video
        class="w-3/4"
        :src="video"
        controls
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Close from '~/assets/image/close.png'

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    images: {
      type: Array,
      default: () => []
    },
    video: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState('ui', ['themeDark', 'isProjectCard']),
    close: () => Close
  },
  methods: {
    ...mapMutations('ui', ['SET_UI']),
    handleClose () {
      this.SET_UI({ key: 'isProjectCard', value: false })
    }
  }
}
</script>

<style scoped>
.card::-webkit-scrollbar {
  width: 5px;
  height: 100%;
  background-color: #e5e5e5;
}
.card {
  scrollbar-width: thin;
}
</style>
