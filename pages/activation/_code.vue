<template>

</template>

<script>
export default {
  auth: false,
  methods: {
    activate() {
      this.$axios.get(`/activation/${this.route.props.code}`, this.route.props.code)
        .then(res => console.log(res))
        .catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>

</style>
