<template>
  <div class="container my-3">
    <h3>create vault</h3>

    <div class="modal fade" id="warning">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="alert alert-warning my-0">
            <h4 class="alert-heading">
              <i class="bi bi-exclamation-triangle-fill m-0"/> {{ $t("alerts.warning.title") }}
            </h4>
            <hr>
            <div class="d-flex">
              <p>{{ $t("alerts.warning.message") }}</p>
            </div>
            <hr>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ $t("btn.back") }}</button>
            <button type="button" class="btn btn-primary" @click="">{{ $t("btn.continue") }}</button>
          </div>
        </div>
      </div>
    </div>

    <form class="needs-validation" method="post" novalidate @submit.prevent="submitValidation">
      <div class="mb-3">
        <label class="form-label" for="masterPassword1">{{ $t("title") }}</label>
        <input id="title" v-model="title" type="text" class="form-control d-inline-block" maxlength="30" minlength="8"
               name="title" required @input="validateTitleField">
        <div class="invalid-feedback">
          {{ errors.title[errorIndexes[0]] }}
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label" for="masterPassword1">{{ $t("password") }}</label>
        <input id="masterPassword1" v-model="masterPassword" :type="showPassword ? 'text' : 'password'"
               class="form-control d-inline-block" maxlength="30" minlength="8" name="masterPassword1" required
               @input="validateMasterPasswordField">
        <i :class="'position-absolute bi bi-eye' + [showPassword ? '-slash' : ''] + '-fill'"
           style="margin: 6px 0 6px -30px;" @click="showPassword = !showPassword"></i>
        <div class="invalid-feedback">
          {{ errors.masterPassword1[errorIndexes[1]] }}
        </div>
      </div>
      <div class="mb-3">
        <input id="masterPassword2" :type="showPassword ? 'text' : 'password'" class="form-control" maxlength="30"
               minlength="8" name="masterPassword2" required @input="validateMasterPasswordFields">
        <div class="invalid-feedback">
          {{ errors.masterPassword2[errorIndexes[2]] }}
        </div>
      </div>
      <button type="submit" class="btn btn-primary">
        {{ $t("btn.submit") }}
      </button>
    </form>
  </div>
</template>

<script>
import {
  classUpdate,
  isEmptyValidation,
  usernameValidation,
  passwordsValidation,
  masterPasswordValidation
} from "~/modules/rules"

export default {
  head() {
    return {
      title: this.$t("meta.titles.vault"),
      meta: [
        {hid: "description", name: "description", content: this.$t("meta.descriptions.vault")}
      ]
    }
  },
  data() {
    return {
      title: null,
      masterPassword: null,
      showPassword: false,
      errorIndexes: [-1, -1, -1],
      errors: {
        title: [this.$t("errors.fillField"), ...this.$t("errors.title")],
        masterPassword1: [this.$t("errors.fillField"), ...this.$t("errors.masterPassword")],
        masterPassword2: [this.$t("errors.fillField"), ...this.$t("errors.passwords")],
      }
    }
  },
  methods: {
    validateTitleField(event) {
      const field = event.target
      this.$set(this.errorIndexes, 0, usernameValidation(field.value))
      classUpdate(field, this.errorIndexes[0])
    },
    validateMasterPasswordField(event) {
      const field = event.target
      const dependentField = document.getElementById("masterPassword2")
      this.$set(this.errorIndexes, 1, masterPasswordValidation(field.value))
      if (dependentField.value) {
        this.$set(this.errorIndexes, 2, passwordsValidation(field.value, dependentField.value))
        classUpdate(dependentField, this.errorIndexes[2])
      }
      classUpdate(field, this.errorIndexes[1])
    },
    validateMasterPasswordFields(event) {
      const field = event.target
      const dependentField = document.getElementById("masterPassword1")
      this.$set(this.errorIndexes, 2, passwordsValidation(field.value, dependentField.value))
      classUpdate(field, this.errorIndexes[2])
    },
    submitValidation(event) {
      const form = event.target
      for (let i = 0; i < form.length - 1; i++) {
        this.$set(this.errorIndexes, i, isEmptyValidation(form[i].value, this.errorIndexes[i]))
        classUpdate(form[i], this.errorIndexes[i])
      }
      if (form.checkValidity()) {
        let myModal = new bootstrap.Modal(document.getElementById('warning'));
        console.log(myModal)
        myModal.show()
      }
    },
    async createVault() {
      await this.$axios.post("/vault/create", this.user)
        .then(res => {

        })
        .catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>
.form-control[name=masterPassword1] {
  background-image: none !important;
}
</style>
