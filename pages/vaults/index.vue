<template>
  <div class="container-fluid">
    <div class="row">
      <v-key :id="clickedTitle"/>
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

          <div id="vault" class="card col-1 m-3 text-center" v-for="title in titles" :key="title">
            <div class="card-body">
              <h5 class="card-title">{{ title }}</h5>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#${title}`"
                      @mouseenter="clickedTitle = title">
                {{ $t("btn.enter") }}
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
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
    titles: [],
    clickedTitle: null
  }),
  async fetch({store}) {
    await store.dispatch("records/requestVaultsData")
  },
  mounted() {
    this.titles = this.$store.state.records.encryptedData.map(e => e.title)
  }
}
</script>

<style scoped lang="scss">
#newVault, #vault {
  transition: all .3s;
  &:hover {
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
  }
}
</style>
