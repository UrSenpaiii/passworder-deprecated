<template>
  <table class="table table-striped table-hover">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">{{ $t("title") }}</th>
      <th scope="col">{{ $t("login") }}</th>
      <th scope="col">{{ $t("password") }}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(record, i) in records">
      <th scope="row">{{ i + 1 }}</th>
      <td>{{ record.title }}</td>
      <td>{{ record.login }}</td>
      <td>{{ record.password }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {records: Array},
}
</script>
