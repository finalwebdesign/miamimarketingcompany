<template>
  <div class="home">
    <Header msg="The Best Marketing Firm in the Miami, FL area" />
    <img
      src="../assets/miami-marketing-company.jpg"
      title="Miami Marketing Company"
      alt="Miami Marketing Company"
    />
    <h1>READY TO WORK WITH MIAMI'S BEST?</h1>
    <p>
      Miami Marketing Company is here to help you and your online business! See
      more of our services below!
    </p>
    <h3>Miami Marketing Company: Miami's Leading Website and Marketing Firm</h3>
    <p>
      Powerful Miami Website Design and Development Serices. Miami's Leading
      Digital Marketing Firm.
    </p>
    <Mosaic />
    <h2>A View Of Our Portfolio</h2>
    <p>Miami Marketing Comopany has worked with numerous businiesses large and small throughoout the Miami area. View our <a href="/portfolio" title="Portfolio">Portfolio</a> today!</p>
    <ImageMosaic />
    <h2>Ready To Work With Miami's Best?</h2>
    <p>What sets us apart is our interest in understanding your business and ouot ability to better connect your business stratefy to our design. Miami Marketing Company is a leading provider of website development and SEO services in the South Florida area. Are you and your business ready to work with the leading web development and search engine optimization firm in the Miami, FL area? Our team has years of experience marketing right here in the Miamii Florida area. Visit our <a href="/contact" title="contact">Contact Us</a> or call at (888) 674-7779.</p>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Mosaic from "@/components/Mosaic.vue";
import ImageMosaic from "@/components/ImageMosaic.vue";


@Options({
  components: {
    Header,
    Footer,
    Mosaic,
    ImageMosaic,
  },
})

export default class Home extends Vue {}
</script>

<style scoped>
a {
  color: #42b983;
}
h2 {
  font-size: 30px;
}
</style>
