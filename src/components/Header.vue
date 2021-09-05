<template>
  <div class="header">
      <img alt="Miami Marketing Company Logo" src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <p>What sets us apart is our interest in understanding your business and our ability to better connect your business strategy to our design. Miami Marketing Company is a leading provider of digital marketing and SEO services in the South Florida area.</p>
    <p>Are you and your business ready to work with the leading digital marketing and search engine optimization firm in the Miami, FL area? Our team has years of experience marketing right here in the Miami Florida area. Visit our contact form here or call us direct at (305) 812-5999!</p>
  </div>
</template>
g
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class Header extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
