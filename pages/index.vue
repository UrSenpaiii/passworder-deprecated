<template>
  <section>
    <div class="container">
      <main>
        <nuxt-link :to="localePath('/vault')">{{ $t("vault") }}</nuxt-link>
      </main>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {hid: "description", name: "description", content: this.$t("meta.descriptions.index")}
      ]
    }
  }
}
</script>
