<template>
  <div>
    <i class="bi bi-three-dots h4 mx-2 dropdown-toggle" @click="copyClicked = false"
       data-bs-toggle="dropdown" aria-expanded="false"/>
    <ul class="dropdown-menu">
      <li class="dropdown-item">{{ $t("edit") }}</li>
      <li class="dropdown-item dropend p-0">
        <div class="dropdown-toggle px-3 py-1" @click="e => e.stopPropagation()" data-bs-toggle="dropdown"
             aria-expanded="false">
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
      <!--        <li class="dropdown-item">{{ $t("history") }}</li>-->
      <li class="dropdown-divider my-0"></li>
      <li class="dropdown-item delete-btn">{{ $t("delete") }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    copyClicked: false
  })
}
</script>

<style scoped>
.dropdown-toggle::after {
  display: none !important;
}

.dropdown-menu.show {
  padding: 0;
}

.delete-btn:hover {
  background-color: #FF484D;
}
</style>
