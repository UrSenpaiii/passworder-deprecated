<template>
  <div class="container-fluid">
    <div class="row">
      <Aside/>
      <main class="col-10">
        <h1>Hey, ${user.username}!</h1>
        <p>It's home page. that mean u r login now. This's cool</p>
      </main>
    </div>
  </div>
</template>

<script>
import Aside from "~/components/Aside"

export default {
  name: 'Home',
  components: {
    Aside
  }
}
</script>
