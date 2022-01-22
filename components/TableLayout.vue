<template>
  <table class="table table-striped table-hover">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Login</th>
      <th scope="col">Password</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(node, i) in notes">
      <th scope="row">{{ i + 1 }}</th>
      <td>{{ node.name }}</td>
      <td>{{ node.login }}</td>
      <td>{{ node.password }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {notes: Array},
}
</script>
