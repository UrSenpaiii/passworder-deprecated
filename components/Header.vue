<template>
  <header>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <NuxtLink to="/" class="navbar-brand">Passworder</NuxtLink>
        <div class="d-flex" v-if="$auth.loggedIn">
          <i class="h2 text-white bi-person-circle"></i>
          <NuxtLink to="/profile" class="nav-link text-white">{{ $auth.user.name }}</NuxtLink>
        </div>
        <div v-else>
          <NuxtLink to="/registration" class="btn btn-light">Sign up</NuxtLink>
          <NuxtLink to="/login" class="btn btn-outline-light">Login</NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>
