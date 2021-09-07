<template>
  <div class="footer">
      <img alt="Miami Marketing Company Logo" src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <v-btn
    elevation="0"
    target="_blank"
    href="https://facebook.com/miamimarketingcompany"
    >
    <v-icon size="x-large">mdi-facebook</v-icon>
    </v-btn>
    <p>Designed and Developed by <a href="https://finalwebdesign.com" target ="_blank" title="Final Web Design">Final Web Design</a>, Inc.<br>
      All Rights Reserved <strong>© Copyright 2021</strong></p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class Footer extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
