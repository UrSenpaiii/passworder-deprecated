<template>
  <aside class="col-2">
    <div class="align-items-baseline d-flex my-3">
      <h2 class="text-white">{{ $t("myVault") }}</h2> <i class="bi bi-list mx-3 text-white"/>
    </div>
    <div v-if="$route.path !== '/vaults'">
      <div class="dropdown my-3">
        <button class="btn btn-light dropdown-toggle" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
          {{ $t("create") }}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdown">
          <li class="dropdown-item"><a @click="$emit('edit', {menu: 'create'})" class="d-block">{{ $t("record") }}</a></li>
          <li class="dropdown-item"><a @click="$emit('edit', {menu: 'create'})" class="d-block">{{ $t("folder") }}</a></li>
        </ul>
      </div>
      <div class="my-3">
        <nuxt-link :to="localePath('/vaults')" class="btn btn-outline-light bi bi-shield-lock"> {{ $t("lock") }}
        </nuxt-link>
      </div>
    </div>
    <nuxt-link v-else :to="localePath('/vaults/create')" class="text-white h4">
      {{ $t("createVault") }} <i class="bi bi-plus-circle"/>
    </nuxt-link>
  </aside>
</template>

<style scoped lang="scss">
aside {
  height: calc(100vh - 228px);
}

.dropdown-toggle::after {
  content: url("assets/img/plus-lg.svg");
  vertical-align: -.15em;
  border: none;
}

i {
  font-size: 25px;
}
</style>
