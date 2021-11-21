<template>
  <div class="header">
    <div class="logo">
      <img alt="Miami Marketing Company Logo" src="../assets/logo.png" />
    </div>
    <div class="navigation"></div>
  </div>
</template>
g
<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class Header extends Vue { }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  max-width: 1480px;
}
.logo {
  float: left;
  padding-left: 45px;
}
.navigation {
  float: right;
}

</style>
