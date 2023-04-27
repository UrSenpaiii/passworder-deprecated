<template>
  <header>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <nuxt-link :to="localePath('/')" class="navbar-brand">{{ sitename }}</nuxt-link>
        <nuxt-link :to="localePath('/vaults')" class="navbar-brand me-auto ms-5">{{ $t("vault") }}</nuxt-link>


        <div class="d-flex me-4" v-if="true">
          <div class="dropdown">
            <div class="d-flex dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="h2 text-white bi-person-circle"/>
              <a class="nav-link text-white">
                {{ $auth.user.username }}
              </a>
            </div>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" @click="logout">{{ $t("logout") }}</a>
            </div>
          </div>
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
  }),
  methods: {
    async logout() {
      await this.$auth.logout()
    }
  }
}
</script>
