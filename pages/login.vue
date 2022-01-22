<template>
  <div class="container">
    <main class="p-4">
      <h1>Login</h1>
      <form class="needs-validation" novalidate method="post">
        <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
        <div class="mb-3">
          <label for="username" class="form-label">User name</label>
          <input type="text" class="form-control" id="username" name="username" minlength="3" maxlength="30" required>
          <div class="invalid-feedback">
            {{ errors.username[errorIndexes[0]] }}
          </div>
        </div>
        <div class="mb-3">
          <input :type="showPassword ? 'text':'password'" class="form-control d-inline-block" id="password1"
                 name="password" minlength="8" maxlength="30" required>
          <i @click="showPassword = !showPassword" style="margin: 5.5px 0 5.5px -30px;"
             :class="'position-absolute bi bi-eye' + [showPassword ? '-slash' : ''] + '-fill'"></i>
          <div class="invalid-feedback">
            {{ errors.password[errorIndexes[1]] }}
          </div>
        </div>
        <button class="btn btn-primary" type="submit">Sign in</button>
      </form>
      <br>
      <NuxtLink to="/registration">Registration</NuxtLink>
      <NuxtLink to="/password/restore">Forgot a password?</NuxtLink>
    </main>
  </div>
</template>

<script>
import {classUpdate, isEmptyValidation, passwordValidation, usernameValidation} from "@/assets/rules";

export default {
  data: () => ({
    errors: {
      username: ["Fill this field"],
      password: ["Fill this field"]
    },
    errorIndexes: [-1, -1, -1, -1],
    showPassword: false
  }),
  methods: {
    loginUser(user) {
      this.$auth.loginWith("refresh", {
        data: user
      })
    }
  },
  mounted() {
    let form = document.getElementsByClassName("needs-validation")[0]

    form.username.addEventListener('input', () => {
      this.errorIndexes[0] = usernameValidation(form.username.value)
      classUpdate(form.username, this.errorIndexes[0])
    })

    form.password.addEventListener('input', () => {
      this.errorIndexes[2] = passwordValidation(form.password.value)
      classUpdate(form.password, this.errorIndexes[2])
    }, false)

    form.addEventListener('submit', (event) => {
      for (let i = 1; i < form.length - 1; i++) {
        this.errorIndexes[i - 1] = isEmptyValidation(form[i].value, this.errorIndexes[i - 1])
        classUpdate(form[i], this.errorIndexes[i - 1])
      }

      if (!form.checkValidity()) event.preventDefault() && event.stopPropagation()
      else this.loginUser(form.username, form.password)
      this.$router.replace("/home")
    }, false)
  }
}
</script>
