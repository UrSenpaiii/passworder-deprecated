<template>
  <div class="modal fade" :id="id" :aria-labelledby="id" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <form class="modal-content needs-validation modal-body py-0" novalidate @submit.prevent="submitValidation">
        <div class="modal-header border-0">
          <label class="modal-title form-label h4" for="password">{{ $t("masterPassword") }}</label>
        </div>
        <div class="modal-body py-0">
          <input id="password" v-model="key" :type="showPassword ? 'text' : 'password'" @input="validateKeyField"
                 class="form-control d-inline-block" maxlength="35" name="password" required>
          <i :class="'position-absolute bi bi-eye' + [showPassword ? '-slash' : ''] + '-fill'"
             style="margin: 5.5px 0 5.5px -30px;" @click="showPassword = !showPassword"/>
          <div class="invalid-feedback">{{ errors[errorIndex] }}</div>
        </div>
        <div class="modal-footer border-0">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ $t("btn.cancel") }}</button>
          <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">{{ $t("btn.enter") }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {isEmptyValidation, classUpdate} from "~/modules/rules";

export default {
  props: {id: String},
  data() {
    return {
      key: null,
      errors: [this.$t("errors.fillField"), this.$t("errors.key")],
      errorIndex: -1,
      showPassword: false
    }
  },
  methods: {
    validateKeyField(event) {
      const field = event.target
      this.errorIndex = -1

      classUpdate(field, this.errorIndex)
    },
    submitValidation(event) {
      const form = event.target
      this.errorIndex = isEmptyValidation(form[0].value, this.errorIndex)
      classUpdate(form[0], this.errorIndex)

      if (form.checkValidity()) this.decrypt()
    },
    decrypt() {
      this.$store.dispatch("records/enterVault", {title: this.id, key: this.key})
      if (this.$store.state.records.isKeyValid) this.$router.push(this.localePath(`/vaults/${this.id}`))
      else classUpdate(document.getElementsByTagName("form")[0][0], this.errorIndex = 1)
    }
  }
}
</script>

<style scoped lang="scss">
.form-control {
  background-image: none !important;
  &.is-valid {
    border-color: #ced4da !important;
    &:focus {
      box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25);
    }
  }
}
</style>
