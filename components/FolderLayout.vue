<template>
  <ul class="mt-3">
    <FolderLayoutElement v-for="el in treeData" :sub="true" :node="el"></FolderLayoutElement>
  </ul>
</template>

<script>
export default {
  props: {
    treeData: Array
  }
}
</script>
