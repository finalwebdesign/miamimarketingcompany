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
    <Mosaic />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Mosaic from "@/components/Mosaic.vue";

@Options({
  components: {
    Header,
    Footer,
    Mosaic,
  },
})

export default class Home extends Vue {}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
