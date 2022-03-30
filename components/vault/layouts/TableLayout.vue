<template>
  <table class="table table-striped table-hover">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">{{ $t("title") }}</th>
      <th scope="col">{{ $t("login") }}</th>
      <th scope="col">{{ $t("website") }}</th>
      <th scope="col">{{ $t("password") }}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(record, i) in recordsList" :key="record.id"
        :class="record.id === $store.state.records.active ? 'activeNode' : ''" @click="active(record.id)">
      <th scope="row">{{ i + 1 }}</th>
      <td>{{ record.title }}</td>
      <td>{{ record.username }}</td>
      <td><a target="_blank" :href="record.website">{{ record.website }}</a></td>
      <td>{{censuredPasswordLength(record.password) }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {recordsList: Array},
  methods: {
    censuredPasswordLength(password) {
      if (!password) return ""
      let res = ""
      for (let i = 0; i < password.length; i++) res += "*"
      return res
    },
    active(id) {
      this.$store.commit("records/setActiveNode", id)
    }
  }
}
</script>
