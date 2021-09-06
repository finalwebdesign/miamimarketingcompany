<template>
  <div class="header">
    <div class="logo">
      <img alt="Miami Marketing Company Logo" src="../assets/logo.png" />
    </div>
   <div class="navigation">
  </div>
  </div>
</template>
g
<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class Header extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  float: left;
}

</style>
