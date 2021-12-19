<template>
  <header class="mb-4">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Passworder</router-link>
        <div class="navbar-nav me-auto">
          <div class="nav-item input-group">
            <input type="text" class="form-control border-0" placeholder="Search" aria-label="Search">
            <span class="input-group-text bg-white border-0" id="basic-addon1"><i class="bi bi-search"></i></span>
          </div>
        </div>
        <div class="d-flex" v-if="'${(user.username)!}'.length > 0">
          <i class="h2 text-white bi-person-circle"></i>
          <router-link to="/profile" class="nav-link text-white">${(user.username)!}</router-link>
        </div>
        <div v-else>
          <router-link to="/registration" class="btn btn-light">Sign up</router-link>
          <router-link to="/login" class="btn btn-outline-light">Login</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>