<template>
  <div class="container">
    <main>
      <h1>{{ $t("profile") }}</h1>
      {{ this.$auth.user }}

      <form method="post">
        <input type="submit" :value="$t('logout')">
      </form>
    </main>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t("meta.titles.profile"),
      meta: [{hid: "description", name: "description", content: this.$t("meta.descriptions.profile")}]
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    }
  },
  mounted() {
    let form = document.getElementsByTagName("form")[0]

    form.addEventListener("submit", (event) => {
      event.preventDefault()
      this.logout()
    })
  }
}
</script>
