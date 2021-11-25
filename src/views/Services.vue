<template>
  <div class="services">
    <Header />
    <img
      src="../assets/miami-marketing-company-services.jpg"
      title="Miami Marketing Company Services"
      alt="Miami Marketing Company Services"
    />
    <h2>Miami Marketing Company Services</h2>
    <p>
      Miami Marketing Company offers some professional website development and
      digital marketing services throughout the Miami and South Florida area.
    </p>
    <p>
      If you are interested in learning more about professional growing the
      digital presence of your business reach out to Miami Marketing Company
      today and speak with one of our talented representatives today.
    </p>

    <div class="services-list">
      <div class="web-design">
        <a href="services/web-design" title="Web Design"><h4>Web Design</h4></a>
      </div>
      <div class="marketing"></div>
      <a href="services/marketing" title="Marketing"><h4>Marketing</h4></a>
      <div class="hosting"></div>
      <a href="services/hosting" title="Hosting"><h4>Hosting</h4></a>
    </div>
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
export default class Services extends Vue {}
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
.web-design {
  width: 30%;
  float: left;
}
.marketing {
  width: 30%;
}
.hosting {
  width: 30%;
  float: right;
}
</style>
