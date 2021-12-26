<template>
  <footer class="bg-dark text-center text-white">
    <section class="container">
      <router-link to="#" class="bi-facebook mx-2"></router-link>
      <router-link to="#" class="bi-twitter mx-2"></router-link>
      <router-link to="#" class="bi-google mx-2"></router-link>
      <router-link to="#" class="bi-instagram mx-2"></router-link>
      <router-link to="#" class="bi-linkedin mx-2"></router-link>
      <router-link to="#" class="bi-github mx-2"></router-link>
    </section>
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © {{ new Date().getFullYear() }} Copyright: <router-link to="/">Passworder.com</router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="scss">
@import "src/scss/vars";

footer {
  background: $neutral-primary;
  color: #fff;
  .bg-custom {
    background-color: $neutral-custom;
  }
  a {
    color: $neutral-placeholder;
    &:hover {
      color: #fff;
    }
  }
}
</style>