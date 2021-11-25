<template>
  <div class="header">
    <div class="logo">
      <a href="/" title="Home"
        ><img alt="Miami Marketing Company Logo" src="../assets/logo.png"
      /></a>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/services">Services</router-link> |
      <router-link to="/portfolio">Portfolio</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="contact">
      <p>(888) 674-7779 | Info@MiamiMarketingCompany.com</p>
    </div>
  </div>
</template>
g
<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class Header extends Vue {}
</script>

<style scoped>
.container {
  max-width: 2480px;
}
.logo {
  float: left;
  padding: 20px 0px 20px 170px;
}
.contact {
  float: right;
}
#nav {
  padding: 35px 200px 0px 0px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #e44762;
}
</style>
