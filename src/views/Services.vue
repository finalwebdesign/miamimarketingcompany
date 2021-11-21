<template>
  <div class="services">
    <Header />
    <img
      src="../assets/miami-marketing-company-services.jpg"
      title="Miami Marketing Company Services"
      alt="Miami Marketing Company Services"
    />
    <p>
      Miami Marketing Company offers some professional website development and
      digital marketing services throughout the Miami and South Florida area.
    </p>
    <p>
      If you are interested in learning more about professional growing the
      digital presence of your business reach out to Miami Marketing Company
      today and speak with one of our talented representatives today.
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
</style>
