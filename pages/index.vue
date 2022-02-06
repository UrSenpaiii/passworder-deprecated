<template>
  <section>
    <div class="container">
      <main>
        <NuxtLink to="/vault">{{ $t("vault") }}</NuxtLink>
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
