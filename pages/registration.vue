<template>
  <div class="container">
    <main class="p-4">
      <h1>Registration</h1>
      <form class="needs-validation">
        <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
        <div class="mb-3">
          <label for="username" class="form-label">User name</label>
          <input type="text" class="form-control" id="username" name="username" minlength="3" maxlength="30" required>
          <div class="invalid-feedback">
            {{ errors.username[errorIndexes[0]] }}
          </div>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" name="email"
                 pattern='(?:[a-z0-9!#$%&*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])'
                 minlength="6" maxlength="50" required>
          <div class="invalid-feedback">
            {{ errors.email[errorIndexes[1]] }}
          </div>
        </div>
        <div class="mb-3">
          <label for="password1" class="form-label">Password</label>
          <input :type="showPassword ? 'text':'password'" class="form-control d-inline-block" id="password1"
                 name="password" pattern="[@$!%*?&a-zA-Z0-9]+" minlength="8" maxlength="30" required>
          <i @click="showPassword = !showPassword" style="margin: 6px 0 6px -30px;"
             :class="'position-absolute bi bi-eye' + [showPassword ? '-slash' : ''] + '-fill'"></i>
          <div class="invalid-feedback">
            {{ errors.password[errorIndexes[2]] }}
          </div>
        </div>
        <div class="mb-3">
          <label for="password2" class="form-label">Password again</label>
          <input :type="showPassword ? 'text':'password'" class="form-control" id="password2" name="password2"
                 minlength="8" maxlength="30" required>
          <div class="invalid-feedback">
            {{ errors.password2[errorIndexes[3]] }}
          </div>
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
      <br>
      <NuxtLink to="/login">Already have an account?</NuxtLink>
      <button class="btn" @click.prevent="formFill()">Fill</button>
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
} from "@/assets/rules"

let form = document.getElementsByClassName("needs-validation")[0]

export default {
  data: () => ({
      errors: {
        username: [
          "Fill this field",
          "username length"
        ],
        email: [
          "Fill this field",
          "email length",
          "email regexp"
        ],
        password: [
          "Fill this field",
          "password length",
          "password lowercase",
          "password uppercase",
          "password digits",
          "password spec chars"
        ],
        password2: [
          "Fill this field",
          "password not equals"
        ]
      },
      errorIndexes: [-1, -1, -1, -1],
      showPassword: false
  }),
  methods: {
    formFill() {
      document.querySelectorAll('.needs-validation')
          .forEach((form) => {
            form.username.value = "test"
            form.email.value = "sd@sa.sd"
            form.password.value = "aA1!asap"
            form.password2.value = "aA1!asap"
          })
    }
  },
  mounted() {

    let form = document.getElementsByClassName("needs-validation")[0]

    form.username.addEventListener('input', () => {
      this.errorIndexes[0] = usernameValidation(form.username.value)
      classUpdate(form.username, this.errorIndexes[0])
    }, false)

    form.email.addEventListener('input', () => {
      this.errorIndexes[1] = emailValidation(form.email.value)
      classUpdate(form.email, this.errorIndexes[1])
    }, false)

    form.password.addEventListener('input', () => {
      this.errorIndexes[2] = passwordValidation(form.password.value)

      if (form.password2.value) {
        this.errorIndexes[3] = passwordsValidation(form.password.value, form.password2.value)
        classUpdate(form.password2, this.errorIndexes[3])
      }

      classUpdate(form.password, this.errorIndexes[2])
    }, false)

    form.password2.addEventListener('input', () => {
      this.errorIndexes[3] = passwordsValidation(form.password.value, form.password2.value)
      classUpdate(form.password2, this.errorIndexes[3])
    }, false)

    form.addEventListener('submit', (event) => {
      for (let i = 1; i < form.length - 1; i++) {
        this.errorIndexes[i - 1] = isEmptyValidation(form[i].value, this.errorIndexes[i - 1])
        classUpdate(form[i], this.errorIndexes[i - 1])
      }

      if (!form.checkValidity()) event.preventDefault() && event.stopPropagation()
      else this.store.registration(form.username, form.email) // FIXME axios
      this.$router.replace("/login")
    }, false)
  }
}
</script>
