<template>
  <div class="web-design">
    <Header />
    <img
      src="../assets/about-miami-marketing-company.png"
      title="web-design"
      alt="Web Design"
    />
    <h1>Professional Web Design</h1>
    <p>Website Design and Development services with Miami Marketing Company.</p>
    <h3>Professional Web Development</h3>
    <p>
      Find out what makes Miami Marketing one of the most reputable web design
      and development firms in the South Florida area. Our website design
      services include WordPress, Joomla, Magento and more.
    </p>
    <h3>Coding and Programming Services</h3>
    <p>
      Miami Marketing Company can help your business with customized website
      development including popular website development languages such as HTML,
      CSS, JavaScript and more.
    </p>
    <p>
      At Miami Marketing Company our team is always available to get you started
      in the right direction. Be sure to contact us on our website at contact us
      or calling (888) 674-7779 today.
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
export default class WebDesign extends Vue {}
</script>

<style scoped></style>
