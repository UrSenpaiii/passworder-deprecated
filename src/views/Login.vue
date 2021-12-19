<template>
  <script type="application/json">
  {"errors": {
    "username": ["Fill this field"],
    "password": ["Fill this field"]
  }}
  </script>

  <div class="container">
    <main class="p-4">
      <h1>Login</h1>
      {{ message }}
      <form action="/login" method="post" class="needs-validation" novalidate>
        <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
        <div class="mb-3">
          <label for="username" class="form-label">User name</label>
          <input type="text" class="form-control" id="username" name="username" minlength="3" maxlength="30" required>
          <div class="invalid-feedback">
            {{errors.username[errorIndexes[0]]}}
          </div>
        </div>
        <div class="mb-3">
          <input :type="showPassword ? 'text':'password'" class="form-control d-inline-block" id="password1" name="password" minlength="8" maxlength="30" required>
          <i @click="showPassword = !showPassword" style="margin: 5.5px 0 5.5px -30px;" :class="'position-absolute bi bi-eye' + [showPassword ? '-slash' : ''] + '-fill'"></i>
          <div class="invalid-feedback">
            {{errors.password[errorIndexes[1]]}}
          </div>
        </div>
        <button class="btn btn-primary" type="submit">Sign in</button>
      </form>
      <br>
      <a href="/registration">Registration</a>
      <a href="/password/restore">Forgot a password?</a>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>