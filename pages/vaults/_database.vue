<template>
  <div class="container-fluid">
    <div class="row">
      <v-sidebar/>
      <main class="col-10 px-0">
        <div class="d-flex justify-content-between border-bottom p-2">

          <div class="d-flex">
            <div class="navbar-nav">
              <div class="nav-item input-group border">
                <input type="text" class="form-control border-0" placeholder="Search" aria-label="Search">
                <span class="input-group-text bg-white border-0" id="basic-addon1"><i class="bi bi-search"></i></span>
              </div>
            </div>
            <div class="m-1 ">
              <i class="bi bi-funnel-fill"></i>
            </div>
          </div>

          <div>
            <a @click="layout='folder'" :class="['mx-2 btn btn-light bi bi-folder-fill', activeLayout('folder')]"/>
            <a @click="layout='table'" :class="['mx-2 btn btn-light bi bi-table', activeLayout('table')]"/>
            <a @click="layout='list'" :class="['mx-2 btn btn-light bi bi-card-list', activeLayout('list')]"/>
            <a @click="layout='grid'" :class="['mx-2 btn btn-light bi bi-grid-3x2', activeLayout('grid')]"/>
          </div>
        </div>

        <component :is="`v-${layout}-layout`" :records="records" :recordsList="recordsList"/>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.$t("meta.titles.vault")} | ${this.$t("meta.titles.vault")}`,
      meta: [
        {hid: "description", name: "description", content: this.$t("meta.descriptions.vault")}
      ]
    }
  },
  data() {
    return {
      layout: "folder",
      records: this.$store.state.records.records,
      recordsList: null,
      current: null
    }
  },
  mounted() {
    this.recordsList = this.asList(this.records)[0]
  },
  methods: {
    activeLayout(layout) {
      return this.layout === layout ? "border" : ""
    },
    asList(node) {
      if (Array.isArray(node)) return node.map(el => this.asList(el))
      if (!node.children) return [node]
      return [].concat(...node.children.map(ch => this.asList(ch)))
    }
  }
}
</script>
