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
  head: {
    meta: [
      {hid: 'description', name: 'description', content: 'Main page'}
    ]
  }
}
</script>
