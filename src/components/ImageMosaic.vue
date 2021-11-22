<template>
    <div class="image-mosaic">
      <div class="row">
        <div class="service-1">
          <a href="services/web-design" title="Web Design"><h3>Website Design and Development</h3></a>
          <img src="../assets/services/web-design.jpg" title="Web Design" >
        </div>
        <div class="service-2">
          <a href="services/marketing" title="Marketing"><h3>Digital and Online Marketing</h3></a>
          <img src="../assets/services/marketing.jpg" title="Marketing">

        </div>
        <div class="service-3">
                      <a href="services/hosting" title="Hosting"><h3>Hosting Services</h3></a>

          <img src="../assets/services/hosting.jpg" title="Hosting">
        </div>
                <div class="service-4">
                    <a href="portfolio" title="Portfolio">  <h3>View Portfolio</h3></a>

          <img src="../assets/services/hosting.jpg" title="Portfolio">
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class ImageMosaic extends Vue {}
</script>

<style scoped>
.row {
  width: 100%;
  padding: 10px 5px 45px 5px;
  margin: 10px 0px 10px 0px;
}
.service-1 {
  width: 25%;
  float: left;
}
.service-2 {
  width: 25%;
  float: left;
}
.service-3 {
  width: 25%;
  float: left;
}
.service-4 {
  width: 25%;
  float: left;
}
</style>
