<template>
  <v-footer>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="8">
          <v-divider></v-divider>
          <div class="py-5">
            <img alt="Miami Marketing Company Logo" src="../assets/logo.png" />
            <h1>{{ msg }}</h1>

            <v-btn
              elevation="0"
              target="_blank"
              href="https://www.facebook.com/miamimarketingcompany/"
            >
              <v-img
                :src="require('@/assets/facebook.svg')"
                height="24px"
                width="24px"
                contain
                class="ma-auto"
              ></v-img>
            </v-btn>
            <v-btn
              elevation="0"
              target="_blank"
              href="https://www.instagram.com/miamimarketingcompany/"
            >
              <v-img
                :src="require('@/assets/instagram.svg')"
                height="24px"
                width="24px"
                contain
                class="ma-auto"
              ></v-img>
            </v-btn>
            <v-btn
              elevation="0"
              target="_blank"
              href="https://twitter.com/miamimarketingcompany"
            >
              <v-img
                :src="require('@/assets/twitter.svg')"
                height="24px"
                width="24px"
                contain
                class="ma-auto"
              ></v-img>
            </v-btn>
            <v-btn
              elevation="0"
              target="_blank"
              href="https://www.linkedin.com/company/miamimarketingcompany/"
            >
              <v-img
                :src="require('@/assets/linkedin.svg')"
                height="24px"
                width="24px"
                contain
                class="ma-auto"
              ></v-img>
            </v-btn>
          </div>
          <div class="mb-5">
            <div style="font-size: 11px" class="d-flex mb-3 flex-wrap">
              <a
                href="https://miamimarketingcompany.com/terms-conditions/"
                class="copy-link pr-1"
              >
                TERMS & CONDITIONS
              </a>
              |
              <v-divider vertical></v-divider>
              <a
                href="https://miamimarketingcompany.com/privacy-policy/"
                class="copy-link px-1"
              >
                PRIVACY POLICY
              </a>
              |
              <v-divider vertical></v-divider>
              <a href="/contact/" class="copy-link pl-1"> CONTACT US </a>
            </div>
            <p>
              Designed and Developed by
              <a
                href="https://finalwebdesign.com"
                target="_blank"
                title="Final Web Design"
                >Final Web Design</a
              >, Inc.<br />
              <strong
                >All Rights Reserved: Miami Marketing Company© Copyright 2022
              </strong>
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class Footer extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
