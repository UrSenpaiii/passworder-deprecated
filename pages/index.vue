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
import {encrypt, decrypt} from "~/modules/encryption"

export default {
  auth: false,
  head() {
    return {
      meta: [
        {hid: "description", name: "description", content: this.$t("meta.descriptions.index")}
      ]
    }
  },
  data: () => ({
    originalStr: "im origin str!",
    masterPass: "it is very difficult master password!"
  }),
  computed: {
    encryptedStr() {
      try {
        return encrypt(this.originalStr, this.masterPass)
      } catch (e) {
        return e
      }
    },
    decryptedStr() {
      try {
        return decrypt(this.encryptedStr, this.masterPass)
      } catch (e) {
        return e
      }
    }
  }
}
</script>
