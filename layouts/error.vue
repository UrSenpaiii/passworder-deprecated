<template>
    <div class="container my-5 text-center">
      <div class="notfound-404">
        <h1>404</h1>
      </div>
      <h2>Oops! This Page Could Not Be Found</h2>
      <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
      <nuxt-link class="btn btn-secondary" :to="localePath('/')">Go To Homepage</nuxt-link>
    </div>
</template>
