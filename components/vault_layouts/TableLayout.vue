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
    <tr v-for="(note, i) in notes">
      <th scope="row">{{ i + 1 }}</th>
      <td>{{ note.title }}</td>
      <td>{{ note.login }}</td>
      <td>{{ note.password }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {notes: Array},
}
</script>
