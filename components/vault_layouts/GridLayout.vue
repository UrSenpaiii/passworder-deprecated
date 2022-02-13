<template>
  <div class="row mx-0">
    <v-card-layout v-for="record in records" :key="record.title"
                   :title="record.title" :login="record.login" :password="record.password"/>
  </div>
</template>

<script>
export default {
  props: {records: Array}
}
</script>
