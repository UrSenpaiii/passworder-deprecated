<template>
  <div class="container-fluid">
    <div class="row">
      <v-sidebar/>
      <div class="col-10">
        <div class="row">
          <nuxt-link v-if="!titles.length" :to="localePath('/vaults/create')"
                     class="card col-2 w-auto text-center m-3 p-0">
            <div id="newVault" class="card-body">
              <h5 class="card-title">Create new vault</h5>
              <i class="bi bi-plus h1"/>
            </div>
          </nuxt-link>

          <div class="card col-1 m-3 text-center" v-for="title in titles" :key="title">
            <div class="card-body">
              <h5 class="card-title">{{ title }}</h5>
              <nuxt-link :to="localePath(`/vaults/${title}`)" class="btn btn-primary">
                {{ $t("btn.enter") }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// import {mapActions, mapGetters} from "vuex"

export default {
  head() {
    return {
      title: this.$t("meta.titles.vault"),
      meta: [
        {hid: "description", name: "description", content: this.$t("meta.descriptions.vault")}
      ]
    }
  },
  data: () => ({
    titles: []
  }),
  async fetch({store}) {
    await store.dispatch("records/requestVaultsData")
  },
  mounted() {
    this.titles = this.$store.state.records.encryptedData.map(e => e.title)
  }
  // methods: {
  //   ...mapActions({
  //     requestVaultData: "records/requestVaultData"
  //   }),
  //   ...mapGetters({
  //     getEncryptedDataTitles: "records/getEncryptedDataTitles"
  //   })
  // }
}
</script>

<style scoped lang="scss">
#newVault {
  transition: all .3s;
  &:hover {
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
  }
}
</style>
