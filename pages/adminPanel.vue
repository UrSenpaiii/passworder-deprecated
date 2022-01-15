<template>
  <div class="container">
    <main>
      <h1>Admin Panel</h1>

      <div class="col-6">
        <table class="table table-striped table-hover border">
          <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th scope="col">Active</th>
            <th scope="col">Roles</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="user in users">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.username }}</td>
            <td>{{ user.password }}</td>
            <td>{{ user.active }}</td>
            <td>{{ user.roles }}</td>
            <td><a :href="'/user/'+user.id">
              <img src="/assets/img/edit.svg" alt="edit ico" title="Edit user" width="20">
            </a></td>
            <td><a :href="'/user/delete/'+user.id">
              <img src="/assets/img/delete.svg" alt="delete ico" title="Delete user" width="20">
            </a></td>
          </tr>
          </tbody>
        </table>
      </div>
      <NuxtLink to="/home">home page</NuxtLink>
    </main>
  </div>
</template>

<script>
    export default {
        data: () => {
            return {
                users: [{
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
            }
        }
    }
</script>
