<template>
  <div class="container-fluid">
    <div class="container">
      <v-key/>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
  head() {
    return {
      title: this.$t("meta.titles.vault"),
      meta: [
        {hid: "description", name: "description", content: this.$t("meta.descriptions.vault")}
      ]
    }
  },
  created() {
    console.log(1, this.requestVaultData(),   this.requestVaultData() == null)
    this.requestVaultData()
    if (this.getEncryptedData() == null) this.$router.push("/vault/create")
  },
  data: () => ({

  }),
  methods: {
    ...mapActions({
      requestVaultData: "records/requestVaultData"
    }),
    ...mapGetters({
      getEncryptedData: "records/getEncryptedData"
    })
  }
}
</script>
