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
            <a @click="layout='folder'" class="mx-2 btn btn-light bi bi-folder-fill"></a>
            <a @click="layout='table'" class="mx-2 btn btn-light bi bi-table"></a>
            <a @click="layout='list'" class="mx-2 btn btn-light bi bi-card-list"></a>
            <a @click="layout='grid'" class="mx-2 btn btn-light bi bi-grid-3x2"></a>
          </div>
        </div>

        <folder-layout v-if="layout==='folder'" :notes="notes"/>
        <table-layout v-if="layout==='table'" :notes="notes"/>
        <list-layout v-if="layout==='list'"/>
        <grid-layout v-if="layout==='grid'"/>





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
    layout: "folder",
    notes: [
      {
        title: "Goole",
        login: "google@gmail.com",
        password: "12345678"
      }, {
        title: "Facebook",
        login: "facebook@fb.com",
        password: "87654321"
      }
    ]
  })
}
</script>
