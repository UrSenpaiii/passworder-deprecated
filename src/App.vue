<template>
  <Header/>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
  <Footer/>
</template>

<script>
import Header from "@/views/partials/header"
import Footer from "@/views/partials/footer"

export default {
  components: {
    Header, Footer
  }
}
</script>

<style lang="scss">

</style>