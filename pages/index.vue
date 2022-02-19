<template>
  <section>
    <div class="container">
      <main>
        <nuxt-link :to="localePath('/vault')">{{ $t("vault") }}</nuxt-link>
        <div>1 {{ originalStr }}</div>
        <div>2 {{ encryptedStr }}</div>
        <div>3 {{ decryptedStr }}</div>
      </main>
    </div>
  </section>
</template>

<script>
import {encrypt, decrypt} from "~/modules/encryption";

export default {
  auth: false,
  head() {
    return {
      meta: [
        {hid: "description", name: "description", content: this.$t("meta.descriptions.index")}
      ]
    }
  },
  data: () => ({originalStr: "im origin str!"}),
  computed: {
    encryptedStr() {
      try {
        return encrypt(this.originalStr, "test")
      } catch (e) {
        return "error";
      }
    },
    decryptedStr() {
      try {
        return decrypt(this.encryptedStr, "test")
      } catch (e) {
        return "error";
      }
    }
  }
}
</script>
