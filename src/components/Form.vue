<template>
  <div class="form">
    <h2>Contact Miami Marketing Company</h2>
    <div class="name">
      <label class="label" for="name">Name: </label>
      <input type="text" name="name" id="name" required="" v-model="name" />
    </div>
    <div class="email">
      <label class="label" for="email">Email: </label>
      <input type="text" name="email" id="email" required="" v-model="name" />
    </div>
        <div class="phone">
      <label class="label" for="phone">Phone: </label>
      <input type="text" name="phone" id="phone" required="" v-model="name" />
    </div>
    <button>Submit</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class Form extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  border: solid black 1px;
  width: 30%
}
button {
  margin: 20px 0px 10px 0px;
}
.email {
    margin: 10px 0px 0px 0px;
}
.phone {
    margin: 10px 0px 0px 0px;
}
</style>
