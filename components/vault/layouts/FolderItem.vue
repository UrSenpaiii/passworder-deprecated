<template>
  <div id="item" class="d-flex px-3 border">
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
<style scoped lang="scss">
#item {
  transition: all .2s;

  &:hover {
    background-color: #F7F7F7;
    cursor: pointer;
  }
}
</style>
