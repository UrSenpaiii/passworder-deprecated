<template>
  <div class="container-fluid">
    <div class="row">
      <Sidebar/>
      <main class="col-10 px-0">
        <div class="d-flex justify-content-between border-bottom p-2">

          <div class="d-flex">
            <div class="navbar-nav">
              <div class="nav-item input-group border">
                <input type="text" class="form-control border-0" placeholder="Search" aria-label="Search">
                <span class="input-group-text bg-white border-0" id="basic-addon1"><i class="bi bi-search"></i></span>
              </div>
            </div>
            <div class="m-1 ">
              <i class="bi bi-funnel-fill"></i>
            </div>
          </div>

          <div>
            <i class="mx-2 bi bi-folder-fill"></i>
            <i class="mx-2 bi bi-table"></i>
            <i class="mx-2 bi bi-card-list"></i>
            <i class="mx-2 bi bi-grid-3x2"></i>
          </div>
        </div>

        <table-layout :notes="notes"/>

      </main>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Vault",
    meta: [
      {hid: 'description', name: 'description', content: 'Vault page'}
    ]
  },
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
