<template>
  <div class="container-fluid">
    <div class="row">
      <v-sidebar v-on:edit="menu = $event.menu; $store.commit('records/setActiveNode', 0)"/>
      <main class="col px-0">
        <div class="d-flex justify-content-between border-bottom p-2">
          <div class="d-flex">
            <div class="navbar-nav">
              <div class="nav-item input-group border">
                <input v-model="search" type="text" class="form-control border-0" :placeholder="$t('search')">
                <span class="input-group-text bg-white border-0" id="basic-addon1"><i class="bi bi-search"></i></span>
              </div>
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
      <component v-on:edit="menu = $event.menu" :is="`v-${menu}-menu`" v-if="currentRecord.length || menu === 'create'" :record="currentRecord[0] || emptyRecord"/>
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
      emptyRecord: {
        title: "", username: "", password: "", notes: "", website: "",
      },
      search: "",
      layout: "folder",
      menu: "view",
      records: this.$store.state.records.records,
      recordsList: [],
      current: null,
      id: 0
    }
  },
  computed: {
    currentRecord() {
      return this.recordsList.filter(el => el.id === this.$store.state.records.active)
    }
  },
  mounted() {
    this.recordsList = ([].concat(...this.asList(this.records)))
  },
  methods: {
    activeLayout(layout) {
      return this.layout === layout ? "border" : ""
    },
    asList(node) {
      this.id += 1
      if (Array.isArray(node)) return node.map(el => this.asList(el))
      if (!node.children) return [node]
      return [].concat(...node.children.map(ch => this.asList(ch)))
    }
  },
  watch: {
    search: function () {
      this.layout = "table"
      let pureRecords = this.asList(this.$store.state.records.records)[0]
      return this.recordsList = this.search === "" ? pureRecords :
                                                     pureRecords.filter(el => el.title.match(new RegExp(this.search, "ig")))
    }
  }
}
</script>
