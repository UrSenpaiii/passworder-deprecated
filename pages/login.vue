<template>
  <div class="container">
    <main class="p-4">
      <h1>{{ $t("login") }}</h1>
      <form class="needs-validation" novalidate method="post">
        <div class="mb-3">
          <label for="username" class="form-label">{{ $t("username") }}
          </label>
          <input type="text" class="form-control" id="username" name="username" minlength="3" maxlength="30" required>
          <div class="invalid-feedback">
            {{ errors.username[errorIndexes[0]] }}
          </div>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">{{ $t("password") }}</label>
          <input :type="showPassword ? 'text':'password'" class="form-control d-inline-block" id="password"
                 name="password" minlength="8" maxlength="30" required>
          <i @click="showPassword = !showPassword" style="margin: 5.5px 0 5.5px -30px;"
             :class="'position-absolute bi bi-eye' + [showPassword ? '-slash' : ''] + '-fill'"></i>
          <div class="invalid-feedback">
            {{ errors.password[errorIndexes[1]] }}
          </div>
        </div>
        <button class="btn btn-primary" type="submit">{{ $t("logIn") }}</button>
      </form>
      <br>
      <nuxt-link :to="localePath('/registration')">{{ $t("registration") }}</nuxt-link>
      <nuxt-link :to="localePath('/password/restore')">{{ $t("forgotPassword") }}</nuxt-link>
    </main>
  </div>
</template>

<script>
import {classUpdate, isEmptyValidation, passwordValidation, usernameValidation} from "~/modules/rules";

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
        username: [this.$t("errors.fillField")],
        password: [this.$t("errors.fillField")]
      },
      errorIndexes: [-1, -1, -1, -1],
      showPassword: false
    }
  },
  methods: {
    getT(val) {
      return this.$t(val)
    },
    async loginUser(user) {
      await this.$auth.loginWith("local", {data: user})
        .then(res => console.log(res))
        .catch(e => console.log(e))
    }
  },
  mounted() {
    let form = document.getElementsByClassName("needs-validation")[0]

    form.username.addEventListener("input", () => {
      this.errorIndexes[0] = usernameValidation(form.username.value)
      classUpdate(form.username, this.errorIndexes[0])
    })

    form.password.addEventListener("input", () => {
      this.errorIndexes[2] = passwordValidation(form.password.value)
      classUpdate(form.password, this.errorIndexes[2])
    }, false)

    form.addEventListener("submit", (event) => {
      event.preventDefault()
      for (let i = 0; i < form.length - 1; i++) {
        this.errorIndexes[i] = isEmptyValidation(form[i].value, this.errorIndexes[i])
        classUpdate(form[i], this.errorIndexes[i])
      }

      if (!form.checkValidity()) event.preventDefault() && event.stopPropagation()
      else this.loginUser({username: form.username.value, password: form.password.value})
    }, false)
  }
}
</script>
