<template>
  <div class="container-fluid">
    <div class="container">
      <main class="p-4">
        <form>
          <div class="mb-3">
            <label for="password" class="form-label">{{ $t("masterPassword") }}</label>
            <input :type="showPassword ? 'text' : 'password'" class="form-control d-inline-block" id="password"
                   v-model="key" name="password" minlength="8" maxlength="30" required>
            <i @click="showPassword = !showPassword" style="margin: 5.5px 0 5.5px -30px;"
               :class="'position-absolute bi bi-eye' + [showPassword ? '-slash' : ''] + '-fill'"></i>
          </div>
          <button type="button" @click="getRecords(key)" class="btn btn-primary">{{ $t("btn.submit") }}</button>
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
