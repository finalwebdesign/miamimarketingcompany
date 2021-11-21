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
    <h2>Miami Marketing Company: Miami's Leading Website and Marketing Firm</h2>
    <p>
      Powerful Miami Website Design and Development Serices. Miami's Leading
      Digital Marketing Firm.
    </p>
    <h3>Professional Design and Development</h3>
    <p>
      Work with the best professional webite design and development firm in the
      local Miami, FL area. Miami Marketing Company works closly with local
      Miami, FL businesses both large and small. Find out what makes the
      professional deisgn and development of Miami Marketing Comapny the best in
      the USA.
    </p>
    <h3>Digital and Online Marketing</h3>
    <p>
      Miami Marketing Company is the digital and online marketing company for
      businesess in the Miami, FL area. If you are interested in learning more
      about digital and online marketing services. If you are a local Miami
      business be sure to work with Miami Marketing Company for the best
      services available!
    </p>
    <h3>UI and UX Design and Development</h3>
    <p>
      The UI and UX team at Miami Marketing Company is the absolute best in the
      South Florida area. The design and implementations at Miami Marketing
      Company are state of the art and reflect the latest in UI and UX design
      and development services.
    </p>
    <h3>Innovated Responsive Design</h3>
    <p>
      The UI and UX team at Miami Marketing Company is the absolute best in the
      South Florida area. The design and implementations at Miami Marketing
      Company are state of the art and reflect the latest in UI and UX design
      and development services.
    </p>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

@Options({
  components: {
    Header,
    Footer,
  },
})

export default class Home extends Vue {}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
