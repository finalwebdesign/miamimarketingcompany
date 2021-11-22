<template>
  <div class="about">
    <Header />
    <img
      src="../assets/about-miami-marketing-company.png"
      title="About Marketing Company Services"
      alt="About Miami Marketing Company Services"
    />
    <h1>About Miami Marketing Company</h1>
    <p>
      Miami Marketing Company has established itself as a leading provider of
      website development and digital marketing services in the Miami and South
      Florida area.
    </p>
    <p>
      Our services include website development, marketing and hosting. With over
      10 years of digital business development, Miami marketing company is sure
      to be able to grow and improve your business online.
    </p>
    <p>
      Find out what makes Miami Marketing Company a leader in digital
      production, search engine optimization and website development by filling
      out our contact form or giving our team a call today at (888) 674-7779.
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
