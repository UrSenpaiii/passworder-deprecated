<template>
  <div class="col-2 p-2 m-4 card" @mouseover="showFav = true" @mouseleave="showFav = false">
    <div class="d-flex justify-content-between">
      <div>
        <transition><i class="bi bi-star h4" v-if="showFav"/></transition>
      </div>
      <i class="bi bi-three-dots h4 mx-2 dropdown-toggle" @click="copyClicked = false" data-bs-toggle="dropdown" aria-expanded="false"/>
      <ul class="dropdown-menu">
        <li class="dropdown-item">{{ $t("edit") }}</li>
        <li class="dropdown-item dropend p-0">
          <div class="dropdown-toggle px-3 py-1" @click="e => e.stopPropagation()" data-bs-toggle="dropdown" aria-expanded="false">
            <div class="d-flex justify-content-between" @click="copyClicked = !copyClicked">
              <a>{{ $t("copy") }}</a> <i :class="'bi bi-caret-right' + (copyClicked ? '-fill' : '')"/>
            </div>
          </div>
          <ul class="dropdown-menu">
            <li class="dropdown-item">{{ $t("login") }}</li>
            <li class="dropdown-item">{{ $t("password") }}</li>
          </ul>
        </li>
        <li class="dropdown-item">{{ $t("duplicate") }}</li>
        <li class="dropdown-item">{{ $t("history") }}</li>
        <li class="dropdown-divider my-0"></li>
        <li class="dropdown-item delete-btn">{{ $t("delete") }}</li>
      </ul>
    </div>
    <div class="card-body text-center p-0">
      <div class="bi bi-circle h1"/>
      <span class="card-title h5 m-0">{{ title }}</span>
      <p class="card-text text-muted">{{ login }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {title: String, login: String},
  data: () => ({
    copyClicked: false,
    showFav: false
  })
}
</script>

<style scoped>
.card {
  cursor: pointer;
}

.v-enter-active, .v-leave-active {
  transition: opacity .1s ease;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
}

i.bi.h4:hover {
  color: #606266;
}

.dropdown-toggle::after {
  display: none;
}

.dropdown-menu.show {
  padding: 0;
}

.delete-btn:hover {
  background-color: #FF484D;
}
</style>
