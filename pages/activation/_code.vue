<template>

</template>

<script>
export default {
  auth: false,
  mounted() {
    this.$axios.get(`/activation/${this.$route.params.code}`)
      .then(res => console.log(res))
      .catch(e => console.log(e))
  }
}
</script>

<style scoped>

</style>
