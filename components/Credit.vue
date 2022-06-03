<template>
  <div class="experience h-full pb-28 flex flex-col justify-center items-start" :class="themeDark ? 'text-light' : 'text-dark'">
    <p class="text-3xl mb-6">
      Credit
    </p>
    <p class="text-lg mb-4">
      本網站所有 icon 圖示皆來自於
      <a
        class="no-underline"
        href="https://www.flaticon.com/free-icons/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Flaticon
      </a>
    </p>
    <a
      class="text-lg mb-4"
      href="https://www.flaticon.com/free-icons/close"
      title="close icons"
      target="_blank"
      rel="noreferrer noopener"
    >
      Close icons created by Google - Flaticon
    </a>
    <a
      class="text-lg mb-4"
      href="https://www.flaticon.com/free-icons/moon"
      title="moon icons"
      target="_blank"
      rel="noreferrer noopener"
    >
      Moon icons created by iconixar - Flaticon
    </a>
    <a
      class="text-lg mb-4"
      href="https://www.flaticon.com/free-icons/github"
      title="github icons"
      target="_blank"
      rel="noreferrer noopener"
    >
      Github icons created by Freepik - Flaticon
    </a>
    <a
      class="text-lg mb-4"
      href="https://www.flaticon.com/free-icons/discord"
      title="discord icons"
      target="_blank"
      rel="noreferrer noopener"
    >
      Discord icons created by Freepik - Flaticon
    </a>
    <a
      class="text-lg mb-4"
      href="https://www.flaticon.com/free-icons/linkedin"
      title="linkedin icons"
      target="_blank"
      rel="noreferrer noopener"
    >
      LinkedIn icons created by Freepik - Flaticon
    </a>
    <a
      class="text-lg mb-4"
      href="https://www.flaticon.com/free-icons/email"
      title="email icons"
      target="_blank"
      rel="noreferrer noopener"
    >
      Email icons created by Uniconlabs - Flaticon
    </a>
    <a
      class="text-lg mb-4"
      href="https://www.flaticon.com/free-icons/brightness"
      title="brightness icons"
      target="_blank"
      rel="noreferrer noopener"
    >
      Brightness icons created by Tempo_doloe - Flaticon
    </a>
    <a
      class="text-lg mb-4"
      href="https://www.flaticon.com/free-icons/stack-overflow"
      title="stack overflow icons"
      target="_blank"
      rel="noreferrer noopener"
    >
      Stack overflow icons created by Pixel perfect - Flaticon
    </a>
    <a
      class="text-lg mb-4"
      href="https://www.flaticon.com/free-icons/profile"
      title="profile icons"
      target="_blank"
      rel="noreferrer noopener"
    >
      Profile icons created by Prosymbols Premium - Flaticon
    </a>
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
