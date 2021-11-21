<template>
    <div class="footer">
      <div class="logo">
        <img alt="Miami Marketing Company Logo" src="../assets/logo.png" />
      </div>
      <div class="finalwebdesign">
        <p>
          Designed and Developed by
          <a
            href="https://finalwebdesign.com"
            target="_blank"
            title="Final Web Design"
            >Final Web Design</a
          >, Inc.<br />
          <strong
            >All Rights Reserved: Miami Marketing Company © Copyright 2022
          </strong>
        </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class Footer extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  width: 100%;
  padding: 100px 5px 45px 5px;
}
.logo {
  padding-top: 20px;
}
</style>
