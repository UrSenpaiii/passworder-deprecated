<template>
  <section>
    <div class="container">
      <main>
        <h1>Hi bro</h1>
        <router-link to="/home">home page</router-link>
      </main>
    </div>
  </section>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Main",
  components: {
    HelloWorld
  }
}
</script>