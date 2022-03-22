<template>
  <div class="container">
    <div class="p-4">
      <h2>{{ success ? $t("activation.success") : $t("activation.failed") }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  auth: 'guest',
  head() {
    return {
      title: this.$t("meta.titles.code"),
      meta: [{hid: "description", name: "description", content: this.$t("meta.descriptions.code")}]
    }
  },
  data: () => ({
    success: null
  }),
  mounted() {
    this.$axios.get(`/activation/${this.$route.params.code}`)
      .then(res => this.success = res.data)
      .catch(e => console.log(e))
  }
}
</script>
