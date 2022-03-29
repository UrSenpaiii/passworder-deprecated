<template>
  <div class="d-flex bg-white px-3 py-1 border">
    <span v-if="num" class="align-self-center text-muted">{{ `${num}.` }}</span>
    <i class="bi bi-file-earmark h3 align-self-center mx-1"></i>
    <div>
      <div class="h5 my-0">{{ title }}</div>
      <div class="text-muted h6">{{ username }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {num: Number, title: String, username: String}
}
</script>
