<template>
  <aside class="col-2">
    <h2 class="text-white">{{ $t("myVaults")}}</h2>

    <div class="dropdown">
      <button class="btn btn-light dropdown-toggle" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
        {{ $t("create") }}
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdown">
        <li class="dropdown-item"><a href="#">{{ $t("password") }}</a></li>
        <li class="dropdown-item"><a href="#">{{ $t("record") }}</a></li>
        <li class="dropdown-item"><a href="#">{{ $t("folder") }}</a></li>
        <li class="dropdown-item"><a href="#">{{ $t("vault") }}</a></li>
      </ul>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.dropdown-toggle::after {
  content: url("assets/plus-lg.svg");
  vertical-align: -.15em;
  border: none;
}
</style>
