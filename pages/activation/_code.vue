<template>

</template>

<script>
export default {
  auth: false,
  head() {
    return {
      title: this.$t("meta.titles.registration"),
      meta: [{hid: "description", name: "description", content: this.$t("meta.descriptions.registration")}]
    }
  },
  mounted() {
    this.$axios.get(`/activation/${this.$route.params.code}`)
      .then(res => console.log(res))
      .catch(e => console.log(e))
  }
}
</script>
