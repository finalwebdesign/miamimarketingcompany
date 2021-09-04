<template>
  <div class="home">
    <Header msg="Welcome to Your Vue.js + TypeScript App" />
    <h1>READY TO WORK WITH MIAMI'S BEST?</h1>
    <p>Miami Marketing Company is here to help you and your online business! See more of our services below!</p>
    <h2>Miami Marketing Company- Miamis Leading Website & Marketing Firm</h2>
    <p>Powerful Miami Website Deisgn and Development Serices. Miami's Leading Digital Marketing Firm.</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue"; // @ is an alias to /src

@Options({
  components: {
    Header,
  },
})
export default class Home extends Vue {}
</script>
