<template>
  <div class="about">
      <Header/>
      <img src="../assets/about-miami-marketing-company.jpg" title="About Marketing Company Services" alt="About Miami Marketing Company Services">

    <h1>About Miami Marketing Company</h1>
    <p>Miami Marketing Company has established itself as a leading provider of website development and digital marketing services in the Miami and South Florida area.</p>

    <p>Our services include website development, marketing and hosting. With over 10 years of digital business development, Miami marketing company is sure to be able to grow and improve your business online.</p>

    <p>Find out what makes Miami Marketing Company a leader in digital production, search engine optimization and website development by filling out our contact form or giving our team a call today at (888) 674-7779.</p>
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

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
