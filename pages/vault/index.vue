<template>
  <div class="container-fluid">
    <div class="container">
      <main class="p-4">
        <form>
          <div class="mb-3">
            <label class="form-label" for="password">{{ $t("masterPassword") }}</label>
            <input id="password" v-model="key" :type="showPassword ? 'text' : 'password'"
                   class="form-control d-inline-block" maxlength="30" minlength="8" name="password" required>
            <i :class="'position-absolute bi bi-eye' + [showPassword ? '-slash' : ''] + '-fill'" style="margin: 5.5px 0 5.5px -30px;"
               @click="showPassword = !showPassword"></i>
          </div>
          <button class="btn btn-primary" type="button" @click="getRecords(key)">{{ $t("btn.submit") }}</button>
        </form>
      </main>
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
  data: () => ({
    showPassword: false,
    key: ""
  }),
  methods: {
    ...mapGetters({
      isKeyValid: "records/isKeyInvalid"
    }),
    ...mapActions({
      requestRecords: "records/reqRecords"
    }),
    getRecords(key) {
      this.requestRecords(key)
    }
  }
}
</script>
