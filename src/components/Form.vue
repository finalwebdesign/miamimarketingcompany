<template>
  <div class="form">
      <img alt="Miami Marketing Company Logo" src="../assets/logo.png" />
    <h2>Contact Miami Marketing Company</h2>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class ContactForm extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
