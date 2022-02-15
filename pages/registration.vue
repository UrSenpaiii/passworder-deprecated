<template>
  <div class="container">
    <main class="p-4">
      <h1>{{ $t("registration") }}</h1>
      <form class="needs-validation" novalidate method="post">
        <div class="mb-3">
          <label for="username" class="form-label">{{ $t("username") }}</label>
          <input type="text" class="form-control" id="username" name="username" minlength="3" maxlength="30" required>
          <div class="invalid-feedback">
            {{ errors.username[errorIndexes[0]] }}
          </div>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">{{ $t("email") }}</label>
          <input type="email" class="form-control" id="email" name="email" minlength="6" maxlength="50" required
                 pattern="(?:[a-z0-9!#$%&*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&*+/=?^_`{|}~-]+)*|'(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*')@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])">
          <div class="invalid-feedback">
            {{ errors.email[errorIndexes[1]] }}
          </div>
        </div>
        <div class="mb-3">
          <label for="password1" class="form-label">{{ $t("password") }}</label>
          <input :type="showPassword ? 'text':'password'" class="form-control d-inline-block" id="password1"
                 name="password" pattern="[@$!%*?&a-zA-Z0-9]+" minlength="8" maxlength="30" required>
          <i @click="showPassword = !showPassword" style="margin: 6px 0 6px -30px;"
             :class="'position-absolute bi bi-eye' + [showPassword ? '-slash' : ''] + '-fill'"></i>
          <div class="invalid-feedback">
            {{ errors.password[errorIndexes[2]] }}
          </div>
        </div>
        <div class="mb-3">
          <input :type="showPassword ? 'text':'password'" class="form-control" id="password2" name="password2"
                 minlength="8" maxlength="30" required>
          <div class="invalid-feedback">
            {{ errors.password2[errorIndexes[3]] }}
          </div>
        </div>
        <button class="btn btn-primary" type="submit">{{ $t("btn.submit") }}</button>
      </form>
      <br>
      <nuxt-link :to="localePath('/login')">{{ $t("haveAcc") }}</nuxt-link>
    </main>
  </div>
</template>

<script>
import {
  classUpdate,
  usernameValidation,
  emailValidation,
  passwordValidation,
  passwordsValidation,
  isEmptyValidation
} from "~/modules/rules"

export default {
  auth: false,
  head() {
    return {
      title: this.$t("meta.titles.registration"),
      meta: [
        {hid: "description", name: "description", content: this.$t("meta.descriptions.registration")}
      ]
    }
  },
  data() {
    return {
      errors: {
        username: [this.$t("errors.fillField"), this.$t("errors.username.length")],
        email: [this.$t("errors.fillField"), this.$t("errors.email.length"), this.$t("errors.email.regex")],
        password: [this.$t("errors.fillField"), this.$t("errors.password.length"), this.$t("errors.password.lowercase"), this.$t("errors.password.uppercase"), this.$t("errors.password.digits"), this.$t("errors.password.specChars")],
        password2: [this.$t("errors.fillField"), this.$t("errors.password.notEquals")]
      },
      errorIndexes: [-1, -1, -1, -1],
      showPassword: false
    }
  },
  mounted() {
    let form = document.getElementsByClassName("needs-validation")[0]

    form.username.addEventListener("input", () => {
      this.errorIndexes[0] = usernameValidation(form.username.value)
      classUpdate(form.username, this.errorIndexes[0])
    }, false)

    form.email.addEventListener("input", () => {
      this.errorIndexes[1] = emailValidation(form.email.value)
      classUpdate(form.email, this.errorIndexes[1])
    }, false)

    form.password.addEventListener("input", () => {
      this.errorIndexes[2] = passwordValidation(form.password.value)

      if (form.password2.value) {
        this.errorIndexes[3] = passwordsValidation(form.password.value, form.password2.value)
        classUpdate(form.password2, this.errorIndexes[3])
      }

      classUpdate(form.password, this.errorIndexes[2])
    }, false)

    form.password2.addEventListener("input", () => {
      this.errorIndexes[3] = passwordsValidation(form.password.value, form.password2.value)
      classUpdate(form.password2, this.errorIndexes[3])
    }, false)

    form.addEventListener("submit", (event) => {
      for (let i = 0; i < form.length - 1; i++) {
        this.errorIndexes[i] = isEmptyValidation(form[i].value, this.errorIndexes[i])
        classUpdate(form[i], this.errorIndexes[i])
      }

      if (!form.checkValidity()) event.preventDefault() && event.stopPropagation()
      else this.store.registration(form.username, form.email) // FIXME axios
    }, false)
  }
}
</script>
