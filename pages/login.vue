<template>
  <div class="container">
    <main class="p-4">
      <h1>{{ $t("login") }}</h1>
      <form class="needs-validation" method="post" novalidate @submit.prevent="submitValidation">
        <div class="mb-3">
          <label class="form-label" for="username">{{ $t("username") }}</label>
          <input id="username" class="form-control" maxlength="30" minlength="3" name="username" required type="text"
                 @input="inputClear">
          <div class="invalid-feedback">
            {{ errors.username[errorIndexes[0]] }}
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="password">{{ $t("password") }}</label>
          <input id="password" :type="showPassword ? 'text':'password'" class="form-control d-inline-block"
                 maxlength="30" minlength="8" name="password" required @input="inputClear">
          <i :class="'position-absolute bi bi-eye' + [showPassword ? '-slash' : ''] + '-fill'"
             @click="showPassword = !showPassword"/>
          <div class="invalid-feedback">
            {{ errors.empty[errorIndexes[0]] }}
          </div>
        </div>
        <button class="btn btn-primary" type="submit">{{ $t("logIn") }}</button>
      </form>
      <br>
      <nuxt-link :to="localePath('/registration')">{{ $t("registration") }}</nuxt-link>
      <br>
      <nuxt-link :to="localePath('/password/restore')">{{ $t("forgotPassword") }}</nuxt-link>
    </main>
  </div>
</template>

<script>
import {classUpdate, isEmptyValidation} from "~/modules/rules"

export default {
  head() {
    return {
      title: this.$t("meta.titles.login"),
      meta: [
        {hid: "description", name: "description", content: this.$t("meta.descriptions.login")}
      ]
    }
  },
  data() {
    return {
      errors: {
        empty: [this.$t("errors.fillField")],
      },
      errorIndexes: [-1],
      showPassword: false
    }
  },
  methods: {
    inputClear(event) {
      const field = event.target
      this.$set(this.errorIndexes, 3, isEmptyValidation(field.value))
      classUpdate(field, this.errorIndexes[0])
    },
    submitValidation(event) {
      const form = event.target
      for (let i = 0; i < form.length - 1; i++) {
        this.$set(this.errorIndexes, i, isEmptyValidation(form[i].value, this.errorIndexes[i]))
        classUpdate(form[i], this.errorIndexes[0])
      }
      if (form.checkValidity()) this.loginUser()
    },
    async loginUser(user) {
      await this.$auth.loginWith("local", {data: user})
        .then(res => console.log(res))
        .catch(e => console.log(e))
    }
  }
}
</script>
