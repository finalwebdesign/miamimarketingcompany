<template>
  <div class="contact">
    <Header/>
    <img src="../assets/contact-miami-marketing-company.jpg" title="Contact Marketing Company Services" alt="contact Miami Marketing Company Services">
 <h1>Contact Miami Marketing Company</h1>
<p>Visit us at our downtown Brickell location:</p>
<ul>
  <li>Office: (888) 674-7779</li>
  <li>801 Brickell Ave, Suite 942</li>
  <li>Miami, FL 33131</li>
  <li>Info@MiamiMarketingCompany.com</li>
  <li>Miami Marketing Company, Inc.</li>
</ul>
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
