<template>
  <div class="container-fluid">
    <div class="row">
      <Sidebar/>
      <main class="col-10">
        <i class="bi bi-folder-fill"></i>
        <i class="bi bi-table"></i>
        <i class="bi bi-card-list"></i>
        <i class="bi bi-grid-3x2"></i>
        <p>It's home page. that mean u r login now. This's cool</p>

        <table-layout :notes="notes"/>

      </main>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    notes: [
      {
        name: "Goole",
        login: "google@gmail.com",
        password: "12345678"
      }, {
        name: "Facebook",
        login: "facebook@fb.com",
        password: "87654321"
      }
    ]
  })
}
</script>
