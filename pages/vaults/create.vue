<template>
  <div class="container-fluid">
    <nuxt-link class="d-inline-flex align-items-center position-absolute text-muted" :to="localePath('/vaults')">
      <i class="bi bi-arrow-left h1 p-1"/> <span class="h3">{{ $t("btn.back") }}</span>
    </nuxt-link>
    <div class="container my-3">
      <h3>{{ $t("createVault") }}</h3>
      <div id="warning" class="modal fade">
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
              <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">{{ $t("btn.back") }}</button>
              <button class="btn btn-primary" data-bs-dismiss="modal" type="button" @click="createVault(vault)">
                {{ $t("btn.continue") }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <form class="needs-validation" method="post" novalidate @submit.prevent="submitValidation">
        <div class="mb-3">
          <label class="form-label" for="masterPassword1">{{ $t("title") }}</label>
          <input id="title" v-model="vault.title" class="form-control d-inline-block" maxlength="30" minlength="3"
                 name="title"
                 required type="text" @input="validateTitleField">
          <div class="invalid-feedback">
            {{ errors.title[errorIndexes[0]] }}
          </div>
          <div v-if="serverErrorIndex !== -1" class="invalid-tooltip position-relative d-inline-block">
            {{ errors.server[serverErrorIndex] }}
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="masterPassword1">{{ $t("password") }}</label>
          <input id="masterPassword1" v-model="vault.masterPassword" :type="showPassword ? 'text' : 'password'"
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
        <button class="btn btn-primary" type="submit">{{ $t("btn.submit") }}</button>
      </form>
    </div>
  </div>
</template>

<script>
import {
  classUpdate,
  isEmptyValidation,
  masterPasswordValidation,
  passwordsValidation,
  usernameValidation
} from "~/modules/rules"
import {encrypt} from "@/modules/encryption";

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
      vault: {title: null, masterPassword: null},
      errors: {
        title: [this.$t("errors.fillField"), ...this.$t("errors.title")],
        masterPassword1: [this.$t("errors.fillField"), ...this.$t("errors.masterPassword")],
        masterPassword2: [this.$t("errors.fillField"), ...this.$t("errors.passwords")],
        server: this.$t("errors.server.vault")
      },
      errorIndexes: [-1, -1, -1],
      serverErrorIndex: -1,
      showPassword: false,
    }
  },
  computed: {
    createModal() {
      new bootstrap.Modal(document.getElementById("warning"))
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
        new bootstrap.Modal(document.getElementById("warning"))
          .show()
      }
    },
    async createVault({title, masterPassword}) {
      let pid = this.$auth.user.id
      let encryptedData = encrypt({}, masterPassword)
      await this.$axios.post("/vaults/create", {pid, title, encryptedData})
        .then(res => this.serverErrorIndex = res.data ? -1 : 0)
        .catch(e => console.log(e))
      this.formClear()
    },
    formClear() {
      let form = document.getElementsByTagName("form")[0]
      if (this.serverErrorIndex) {
        for (let i = 0; i < form.length - 1; i++) {
          form[i].value = null
          this.$set(this.errorIndexes, i, -1)
          classUpdate(form[i], this.errorIndexes[i])
          console.log(form[i], form[i].value)
        }
        // FIXME right reset with form.value
        this.vault.title = ""
        this.vault.masterPassword = ""
      }
    }
  }
}
</script>

<style scoped>
a:hover > span, a:hover > i  {
  transition: all .4s;
  color: #282828;
}

.form-control[name=masterPassword1] {
  background-image: none !important;
}
</style>
