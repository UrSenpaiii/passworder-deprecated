<template>
  <div class="container">
    <main class="p-4">
      <h1>{{ $t("registration") }}</h1>
      <form class="needs-validation" method="post" novalidate @submit.prevent="submitValidation">
        <div class="mb-3">
          <label class="form-label" for="username">{{ $t("username") }}</label>
          <input id="username" v-model="user.username" class="form-control" maxlength="30" minlength="3" name="username"
                 required type="text" @input="validateUsernameField">
          <div class="invalid-feedback">
            {{ errors.username[errorIndexes[0]] }}
          </div>
          <div v-if="serverErrorIndexes[0] !== -1"  class="invalid-tooltip position-relative d-inline-block">
            {{ errors.server[serverErrorIndexes[0]] }}
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="email">{{ $t("email") }}</label>
          <input id="email" v-model="user.email" class="form-control" maxlength="50" minlength="6" name="email"
                 pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required type="email"
                 @input="validateEmailField">
          <div class="invalid-feedback">
            {{ errors.email[errorIndexes[1]] }}
          </div>
          <div v-if="serverErrorIndexes[1] !== -1" class="invalid-tooltip position-relative d-inline-block">
            {{ errors.server[serverErrorIndexes[1]] }}
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="password1">{{ $t("password") }}</label>
          <input id="password1" v-model="user.password" :type="showPassword ? 'text' : 'password'"
                 class="form-control d-inline-block" maxlength="30" minlength="8" name="password" required
                 @input="validatePasswordField">
          <i :class="'position-absolute bi bi-eye' + [showPassword ? '-slash' : ''] + '-fill'" style="margin: 6px 0 6px -30px;"
             @click="showPassword = !showPassword"></i>
          <div class="invalid-feedback">
            {{ errors.password[errorIndexes[2]] }}
          </div>
        </div>
        <div class="mb-3">
          <input id="password2" :type="showPassword ? 'text' : 'password'" class="form-control" maxlength="30"
                 minlength="8" name="password2" required @input="validatePasswordsField">
          <div class="invalid-feedback">
            {{ errors.password2[errorIndexes[3]] }}
          </div>
        </div>
        <button class="btn btn-primary" :disabled="disabled" type="submit">{{ $t("btn.submit") }}</button>
      </form>
      <br>
      <nuxt-link :to="localePath('/login')">{{ $t("haveAcc") }}</nuxt-link>
    </main>
  </div>
</template>

<script>
import {mapMutations} from "vuex"
import {
  classUpdate,
  emailValidation,
  isEmptyValidation,
  passwordsValidation,
  passwordValidation,
  usernameValidation
} from "~/modules/rules"

export default {
  auth: false,
  head() {
    return {
      title: this.$t("meta.titles.registration"),
      meta: [{hid: "description", name: "description", content: this.$t("meta.descriptions.registration")}]
    }
  },
  data() {
    return {
      user: {username: "", email: "", password: ""},
      errors: {
        username: [this.$t("errors.fillField"), ...this.$t("errors.username")],
        email: [this.$t("errors.fillField"), ...this.$t("errors.email")],
        password: [this.$t("errors.fillField"), ...this.$t("errors.password")],
        password2: [this.$t("errors.fillField"), ...this.$t("errors.passwords")],
        server: this.$t("errors.server"),
      },
      errorIndexes: [-1, -1, -1, -1],
      serverErrorIndexes: [-1, -1],
      showPassword: false,
      disabled: false
    }
  },
  methods: {
    ...mapMutations({
      setActivationEmail: "activation/setActivationEmail"
    }),
    validateUsernameField(event) {
      const field = event.target
      this.$set(this.errorIndexes, 0, usernameValidation(field.value))
      classUpdate(field, this.errorIndexes[0])
    },
    validateEmailField(event) {
      const field = event.target
      this.$set(this.errorIndexes, 1, emailValidation(field.value))
      classUpdate(field, this.errorIndexes[1])
    },
    validatePasswordField(event) {
      const field = event.target
      const dependentField = document.getElementById("password2")
      this.$set(this.errorIndexes, 2, passwordValidation(field.value))
      if (dependentField.value) {
        this.$set(this.errorIndexes, 3, passwordsValidation(field.value, dependentField.value))
        classUpdate(dependentField, this.errorIndexes[3])
      }
      classUpdate(field, this.errorIndexes[2])
    },
    validatePasswordsField(event) {
      const field = event.target
      const dependentField = document.getElementById("password1")
      this.$set(this.errorIndexes, 3, passwordsValidation(dependentField.value, field.value))
      classUpdate(field, this.errorIndexes[3])
    },
    submitValidation(event) {
      const form = event.target
      for (let i = 0; i < form.length - 1; i++) {
        this.$set(this.errorIndexes, i, isEmptyValidation(form[i].value, this.errorIndexes[i]))
        classUpdate(form[i], this.errorIndexes[i])
      }
      if (form.checkValidity()) {
        this.disabled = true
        this.registerUser()
      }
    },
    async registerUser() {
      await this.$axios.post("/registration", this.user)
        .then(res => {
          this.setActivationEmail(this.user.email)
          if (!res.data[0]) return this.$router.push("/activation")
          this.serverErrorsHandler(res.data - 1)
          this.disabled = false
        })
        .catch(e => console.log(e))
    },
    serverErrorsHandler(errorCode) {
      this.serverErrorIndexes = [-1, -1]
      this.$set(this.serverErrorIndexes, errorCode, errorCode)
    }
  }
}
</script>

<style scoped>
.form-control[name=password] {
  background-image: none !important;
}
</style>
