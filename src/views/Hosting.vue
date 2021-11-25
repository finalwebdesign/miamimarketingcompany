<template>
  <div class="hosting">
    <Header />
    <img
      src="../assets/about-miami-marketing-company.png"
      title="Hosting
"
      alt="Hosting
"
    />
    <h1>Website Hosting and Dedicated Server Services</h1>
    <p>
      Websites and Web Applications require professional hosting to help ensure
      your business adapts with new technologies and internet outlets. Our
      hosting services include managed hosting, WordPress hosting, VPS,
      Dedicated Servers and more.
    </p>
    <h3>Professional Managed Hosting</h3>
    <p>
      Ensure that your business is built on the latest website hosting and
      servers available. All our servers maintain the highest and most
      professional hosting services available.
    </p>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue"; // @ is an alias to /src
import Footer from "@/components/Footer.vue"; // @ is an alias to /src

@Options({
  components: {
    Header,
    Footer,
  },
})
export default class About extends Vue {}
</script>

<style scoped></style>
