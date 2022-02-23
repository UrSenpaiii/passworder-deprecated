<template>
  <footer class="bg-dark text-center text-white">
    <section class="container">
      <NuxtLink to="#" class="bi-facebook mx-2"/>
      <NuxtLink to="#" class="bi-twitter mx-2"/>
      <NuxtLink to="#" class="bi-google mx-2"/>
      <NuxtLink to="#" class="bi-instagram mx-2"/>
      <NuxtLink to="#" class="bi-linkedin mx-2"/>
      <NuxtLink to="#" class="bi-github mx-2"/>
    </section>
    <v-lang-input/>
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © {{ new Date().getFullYear() }} Copyright: <NuxtLink to="/" class="text-capitalize">{{ sitename }}</NuxtLink>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    sitename: process.env.domain
  })
}
</script>

<style scoped lang="scss">
@import "assets/scss/vars";

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
