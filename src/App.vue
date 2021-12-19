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
import Header from "@/components/partials/header"
import Footer from "@/components/partials/footer"

export default {
  components: {
    Header, Footer
  }
}
</script>

<style lang="scss">

</style>