<template>
  <div class="marketing">
    <Header />
    <img
      src="../assets/about-miami-marketing-company.png"
      title="Marketing"
      alt="Marketing"
    />
    <h1>Miami Digital Marketing Services</h1>
    <p>
      Professional Digital Marketing and Advertising Services with a local Miami
      Marketing Company.
    </p>
    <h3>Miami Social Media Marketing</h3>
    <p>
      Miami Marketing Company has established itself as a leading digital
      marketing firm throughout the South Florida area. Providing marketing
      services for customers in Miami-Dade, Broward and Palm Beach.
    </p>
    <h3>Miami Traditional Marketing Services</h3>
    <p>
      Our marketing services including social media outlets, blog management,
      Search Engine Optimization (SEO), Pay Per Click Campaigns, Email Marketing
      and more.
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
export default class Marketing extends Vue {}
</script>

<style scoped></style>
