<template>
  <div class="container">
    <h3>create vault</h3>
    <div class="alert alert-warning">
      <h4 class="alert-heading">Warning!</h4>
      <hr>
      <div class="d-flex">
        <i class="bi bi-exclamation-triangle-fill me-2"/>
        <p>Metamask warning</p>
      </div>
    </div>

    <button class="btn btn-primary" data-bs-target="#exampleModal" data-bs-toggle="modal" type="button">
      Launch demo modal
    </button>

    <!-- Modal -->
    <div id="exampleModal" aria-hidden="true" aria-labelledby="exampleModalLabel" class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">Modal title</h5>
            <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Close</button>
            <button class="btn btn-primary" type="button">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <form class="needs-validation" method="post" novalidate @submit.prevent="submitValidation">
      <div class="mb-3">
        <label class="form-label" for="masterPassword1">{{ $t("password") }}</label>
        <input id="masterPassword1" v-model="masterPassword" :type="showPassword ? 'text' : 'password'"
               class="form-control d-inline-block" maxlength="30" minlength="8" name="masterPassword1" required
               @input="validateField">
        <i :class="'position-absolute bi bi-eye' + [showPassword ? '-slash' : ''] + '-fill'"
           style="margin: 6px 0 6px -30px;" @click="showPassword = !showPassword"></i>
        <div class="invalid-feedback">
          {{ errors.masterPassword1[errorIndexes[0]] }}
        </div>
      </div>
      <div class="mb-3">
        <input id="masterPassword2" :type="showPassword ? 'text' : 'password'" class="form-control" maxlength="30"
               minlength="8" name="masterPassword2" required @input="validateFields">
        <div class="invalid-feedback">
          {{ errors.masterPassword2[errorIndexes[1]] }}
        </div>
      </div>
      <button class="btn btn-primary" type="submit">{{ $t("btn.submit") }}</button>
    </form>
  </div>
</template>

<script>
import {classUpdate, isEmptyValidation, masterPasswordValidation, passwordsValidation} from "~/modules/rules"

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
      masterPassword: null,
      showPassword: false,
      errorIndexes: [-1, -1],
      errors: {
        masterPassword1: [this.$t("errors.fillField"), ...this.$t("errors.masterPassword")],
        masterPassword2: [this.$t("errors.fillField"), ...this.$t("errors.passwords")],
      }
    }
  },
  methods: {
    validateField(event) {
      const field = event.target
      const dependentField = document.getElementById("masterPassword2")
      console.log(dependentField)
      this.$set(this.errorIndexes, 0, masterPasswordValidation(field.value))
      if (dependentField.value) {
        this.$set(this.errorIndexes, 1, passwordsValidation(field.value, dependentField.value))
        classUpdate(dependentField, this.errorIndexes[1])
      }
      classUpdate(field, this.errorIndexes[0])
    },
    validateFields(event) {
      const field = event.target
      const dependentField = document.getElementById("masterPassword1")
      this.$set(this.errorIndexes, 1, passwordsValidation(field.value, dependentField.value))
      classUpdate(field, this.errorIndexes[1])
    },
    submitValidation(event) {
      const form = event.target
      for (let i = 0; i < form.length - 1; i++) {
        this.$set(this.errorIndexes, i, isEmptyValidation(form[i].value, this.errorIndexes[i]))
        classUpdate(form[i], this.errorIndexes[i])
      }
      if (form.checkValidity()) this.createVault()
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
