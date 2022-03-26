<template>
  <div class="container-fluid">
    <div class="row">
      <v-sidebar/>
      <div class="col-10">
        <div class="row">
          <div class="card col-1 m-3" v-for="entry in $store.state.records.encryptedData" :key="entry.title">
            <div class="card-body">
              <h5 class="card-title">{{ entry.title }}</h5>
              <a href="#" class="btn btn-primary">{{ $t("btn.enter") }}</a>
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
  async fetch({store}){
    await store.dispatch("records/requestVaultsData")
  },

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
