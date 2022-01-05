<template>
  <header>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <NuxtLink to="/" class="navbar-brand">Passworder</NuxtLink>
        <div class="navbar-nav me-auto">
          <div class="nav-item input-group">
            <input type="text" class="form-control border-0" placeholder="Search" aria-label="Search">
            <span class="input-group-text bg-white border-0" id="basic-addon1"><i class="bi bi-search"></i></span>
          </div>
        </div>
        <div class="d-flex" v-if="store.user">
          <i class="h2 text-white bi-person-circle"></i>
          <NuxtLink to="/profile" class="nav-link text-white">{{ store.user }}</NuxtLink>
        </div>
        <div v-else>
          <NuxtLink to="/registration" class="btn btn-light">Sign up</NuxtLink>
          <NuxtLink to="/login" class="btn btn-outline-light">Login</NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: () => {
    return {

    }
  }
}
</script>
