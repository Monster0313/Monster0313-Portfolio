<template>
  <div class="flex flex-row justify-center items-center h-9 mt-1">
    <div
      v-for="(i, index) in linkList"
      :key="index"
      class="p-1"
    >
      <a :href="i.link" target="_blank" rel="noreferrer noopener">
        <img
          class="w-5 hover:w-7"
          :src="themeDark ? i.dark : i.light"
        >
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Cv from '~/assets/image/cv.png'
import CvWhite from '~/assets/image/cv-white.png'
import Discord from '~/assets/image/discord.png'
import DiscordWhite from '~/assets/image/discord-white.png'
import Email from '~/assets/image/email.png'
import EmailWhite from '~/assets/image/email-white.png'
import Github from '~/assets/image/github.png'
import GithubWhite from '~/assets/image/github-white.png'
import Linkedin from '~/assets/image/linkedin.png'
import LinkedinWhite from '~/assets/image/linkedin-white.png'
import Stackoverflow from '~/assets/image/stackoverflow.png'
import StackoverflowWhite from '~/assets/image/stackoverflow-white.png'

export default {
  computed: {
    ...mapState('ui', ['themeDark']),
    cv: () => Cv,
    github: () => Github,
    linkedin: () => Linkedin,
    stackoverflow: () => Stackoverflow,
    email: () => Email,
    discord: () => Discord,

    cvWhite: () => CvWhite,
    githubWhite: () => GithubWhite,
    linkedinWhite: () => LinkedinWhite,
    stackoverflowWhite: () => StackoverflowWhite,
    emailWhite: () => EmailWhite,
    discordWhite: () => DiscordWhite,

    linkList () {
      return [
        {
          dark: this.cvWhite,
          light: this.cv,
          link: 'https://www.cakeresume.com/monster0313'
        },
        {
          dark: this.githubWhite,
          light: this.github,
          link: 'https://github.com/Monster0313'
        },
        {
          dark: this.linkedinWhite,
          light: this.linkedin,
          link: 'https://www.linkedin.com/in/monster0313/'
        },
        {
          dark: this.stackoverflowWhite,
          light: this.stackoverflow,
          link: 'https://stackoverflow.com/users/10717203/monster0313'
        },
        {
          dark: this.emailWhite,
          light: this.email,
          link: 'mailto:y779380@gmail.com'
        },
        {
          dark: this.discordWhite,
          light: this.discord,
          link: 'https://discordapp.com/users/439296785723293698'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
