<template>
  <div class="container">
    <main>
      <h1>{{ $t("adminPanel") }}</h1>

      <div class="col-6">
        <table class="table table-striped table-hover border">
          <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">{{ $t("username") }}</th>
            <th scope="col">{{ $t("password") }}</th>
            <th scope="col">{{ $t("active") }}</th>
            <th scope="col">{{ $t("roles") }}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="user in users">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.username }}</td>
            <td>{{ user.password }}</td>
            <td>{{ user.active }}</td>
            <td>{{ user.roles }}</td>
            <td><a :href="'/user/' + user.id">
              <img src="/assets/img/edit.svg" alt="edit ico" title="Edit user" width="20">
            </a></td>
            <td><a :href="'/user/delete/' + user.id">
              <img src="/assets/img/delete.svg" alt="delete ico" title="Delete user" width="20">
            </a></td>
          </tr>
          </tbody>
        </table>
      </div>
      <NuxtLink to="/">{{ $t("index") }}</NuxtLink>
    </main>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t("meta.titles.adminPanel"),
      meta: [
        {hid: "description", name: "description", content: this.$t("meta.descriptions.adminPanel")}
      ]
    }
  },
  data: () => ({
    users: [{ // FIXME axios replacement
      id: 0,
      username: "Admin",
      password: "1234",
      active: true,
      roles: ["USER", "ADMIN"]
    },
      {
        id: 1,
        username: "User",
        password: "123",
        active: true,
        roles: ["USER"]
      }]
  })
}
</script>
