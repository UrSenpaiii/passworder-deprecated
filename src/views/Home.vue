<template>
  <div class="container-fluid">
    <div class="row">
      <aside class="col-2">
        <h1 class="text-white">side</h1>
      </aside>
      <main class="col-10">
        <h1>Hey, ${user.username}!</h1>
        <p>It's home page. that mean u r login now. This's cool</p>
<!--        <a v-if="${user.roles?seq_contains("ADMIN")?string}" href="/user">users</a>-->
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
