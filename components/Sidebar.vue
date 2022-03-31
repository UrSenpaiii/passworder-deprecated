<template>
  <aside class="col-2">
    <div class="align-items-baseline d-flex my-3">
      <h2 class="text-white">{{ $t("myVault") }}</h2> <i class="bi bi-list mx-3 text-white"/>
    </div>
    <div class="my-3">
      <nuxt-link :to="localePath('/vaults')" class="btn btn-outline-light bi bi-shield-lock"> {{
          $t("lock")
        }}
      </nuxt-link>
    </div>
    <div v-if="$route.path !== '/vaults'">
      <div v-if="currentFolder" class="dropdown my-3">
        <button class="btn btn-light dropdown-toggle" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
          {{ $t("create") }}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdown">
          <li class="dropdown-item"><a @click="$emit('edit', {menu: 'create'})" class="d-block">
            {{ $t("record") }}
          </a></li>
          <li class="dropdown-item"><a data-bs-toggle="modal" data-bs-target="#exampleModal" class="d-block">{{ $t("folder") }}</a></li>
        </ul>
      </div>
      <div class="my-3">
        <button v-if="$store.state.records.active" @click="wrapper"
                class="btn btn-outline-danger bi bi-x-circle"> {{$t("delete")}}</button>
      </div>
    </div>

    <nuxt-link v-else :to="localePath('/vaults/create')" class="text-white h4">
      {{ $t("createVault") }} <i class="bi bi-plus-circle"/>
    </nuxt-link>

    <div class="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ $t("addFolder") }}</h5>
          </div>
          <div class="modal-body align-items-center">
            <input id="password" type="text" class="form-control d-inline-block" :placeholder="$t('title')"
                   maxlength="35" name="password" required>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ $t("btn.cancel") }}</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">{{ $t("btn.save") }}</button>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  props: {currentFolder: Number},
  methods: {
    wrapper() {
      let records = this.$store.state.records.records
      this.deleteRecord(records)
      this.$store.commit("records/setRecords", records)
    },
    deleteRecord(node) {
      if (Array.isArray(node)) node.map(el => this.deleteRecord(el))
      if (node.children) node.children.filter(ch => {
        if (ch.children) this.deleteRecord(ch.children)
        return ch.id !== this.$store.state.records.active
      })
      return node.children
    }
  }
}
</script>

<style scoped lang="scss">
aside {
  height: calc(100vh - 228px);
}

.dropdown-toggle::after {
  content: url("assets/img/plus-lg.svg");
  vertical-align: -.15em;
  border: none;
}

i {
  font-size: 25px;
}
</style>
