<template>
  <aside class="col-2">
    <div class="align-items-baseline d-flex my-3">
      <h2 class="text-white">{{ $t("myVault") }}</h2> <i class="bi bi-list mx-3 text-white"/>
    </div>

    <div class="dropdown my-3">
      <button class="btn btn-light dropdown-toggle" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
        {{ $t("create") }}
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdown">
        <li class="dropdown-item">
          <a class="d-block">{{ $t("record") }}</a>
        </li>
        <li class="dropdown-item">
          <a class="d-block">{{ $t("folder") }}</a>
        </li>
        <li class="dropdown-item">
          <a class="d-block">{{ $t("vault") }}</a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.dropdown-toggle::after {
  content: url("assets/img/plus-lg.svg");
  vertical-align: -.15em;
  border: none;
}

i {
  font-size: 25px;
}
</style>
