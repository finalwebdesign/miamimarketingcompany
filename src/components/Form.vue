<template>
  <div class="form">
    <h2>Contact Miami Marketing Company</h2>
      <div class="name">
        <label class="label" for="name">Name</label>
        <input type="text" name="name" id="name" required="" v-model="name">
      </div>
      <div class="email">
        <label class="label" for="email">Email</label>
        <input type="text" name="email" id="email" required="" v-model="name">
      </div>
    
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
