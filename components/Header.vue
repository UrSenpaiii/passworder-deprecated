<template>
  <header>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <nuxt-link :to="localePath('/')" class="navbar-brand">{{ sitename }}</nuxt-link>
        <nuxt-link :to="localePath('/vaults')" class="navbar-brand me-auto ms-5">{{ $t("vault") }}</nuxt-link>


        <div class="d-flex" v-if="$auth.loggedIn">
          <i class="h2 text-white bi-person-circle"></i>
          <nuxt-link :to="localePath('/profile')" class="nav-link text-white">{{ $auth.user.username }}</nuxt-link>
        </div>
        <div v-else>
          <nuxt-link :to="localePath('/registration')" class="btn btn-light">{{ $t("signUp") }}</nuxt-link>
          <nuxt-link :to="localePath('/login')" class="btn btn-outline-light">{{ $t("logIn") }}</nuxt-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data: () => ({
    sitename: process.env.name
  })
}
</script>
