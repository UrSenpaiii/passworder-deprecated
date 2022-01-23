<template>
  <section>
    <div class="container">
      <main>
        <h1>Hi bro</h1>
        <NuxtLink to="/vault">home page</NuxtLink>
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
