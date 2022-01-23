<template>
  <aside class="col-2">
    <h1 class="text-white">My vaults</h1>

    <div class="dropdown">
      <button class="btn btn-light dropdown-toggle" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
        Create new
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdown">
        <li class="dropdown-item"><a href="#">Password</a></li>
        <li class="dropdown-item"><a href="#">Note</a></li>
        <li class="dropdown-item"><a href="#">Folder</a></li>
        <li class="dropdown-item"><a href="#">Vault</a></li>
      </ul>
    </div>
    <ul>
      <li><a class="text-white" href="#">passwords</a></li>
      <li><a class="text-white" href="#">notes</a></li>
      <li><a class="text-white" href="#">audit</a></li>
      <li><a class="text-white" href="#">trash bin</a></li>
    </ul>
  </aside>
</template>

<style scoped lang="scss">
.text-white:hover {
  color: #C0C4CC !important;
}

.dropdown-toggle::after {
  content: url("assets/plus-lg.svg");
  vertical-align: -.15em;
  border: none;
}
</style>
