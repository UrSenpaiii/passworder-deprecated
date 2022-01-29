<template>
  <table class="table table-striped table-hover">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Login</th>
      <th scope="col">Password</th>
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
