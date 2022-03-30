<template>
  <div class="container my-5">
    <main class="p-4">
      <h1>{{ $t("login") }}</h1>
      <form class="needs-validation" method="post" novalidate @submit.prevent="submitValidation">
        <div class="mb-3">
          <label class="form-label" for="username">{{ $t("username") }}</label>
          <input id="username" v-model="form.login" class="form-control" maxlength="30" minlength="3" name="username"
                 required type="text" @input="inputClear">
          <div class="invalid-feedback">
            {{ errors.username[errorIndexes[0]] }}
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="password">{{ $t("password") }}</label>
          <input id="password" v-model="form.password" :type="showPassword ? 'text':'password'" class="form-control d-inline-block"
                 maxlength="30" minlength="8" name="password" required @input="inputClear">
          <i :class="'position-absolute bi bi-eye' + [showPassword ? '-slash' : ''] + '-fill'"
             style="margin: 6px 0 6px -30px;" @click="showPassword = !showPassword"/>
          <div class="invalid-feedback">
            {{ errors.password[errorIndexes[1]] }}
          </div>
        </div>
        <button class="btn btn-primary" type="submit">{{ $t("logIn") }}</button>
      </form>
      <br>
      <nuxt-link :to="localePath('/registration')">{{ $t("registration") }}</nuxt-link>
    </main>
  </div>
</template>

<script>
import {classUpdate, isEmptyValidation} from "~/modules/rules"

export default {
  head() {
    return {
      title: this.$t("meta.titles.login"),
      meta: [{hid: "description", name: "description", content: this.$t("meta.descriptions.login")}]
    }
  },
  data() {
    return {
      form: {login: "", password: ""},
      errors: {
        username: [this.$t("errors.fillField"), ...this.$t("errors.username")],
        password: [this.$t("errors.fillField"), this.$t("errors.password")[0]],
      },
      errorIndexes: [-1, -1],
      showPassword: false
    }
  },
  methods: {
    inputClear(event) {
      const field = event.target
      let index = field.id === "username" ? 0 : 1
      this.$set(this.errorIndexes, index, -1)
      field.classList.remove("is-invalid", "is-valid")
    },
    submitValidation(event) {
      const form = event.target
      for (let i = 0; i < form.length - 1; i++) {
        if (form[i].value.length < (i ? 8 : 3)) this.$set(this.errorIndexes, i, 1)
        this.$set(this.errorIndexes, i, isEmptyValidation(form[i].value, this.errorIndexes[i]))
        classUpdate(form[i], this.errorIndexes[i])
      }
      if (form.checkValidity()) this.loginUser()
    },
    async loginUser() {
      await this.$auth.loginWith("local", {data: this.form})
        .then(res => console.log(res))
        .catch(e => console.log(e))
    }
  }
}
</script>
