<template>
  <div class="container">
    <main class="p-4">
      <form action="/user" method="post" class="col-1">
        <div class="mb-3">
          <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
          <input type="hidden" name="userId" :value="user.id">

          <label for="username" class="form-label">{{ $t("username") }}:</label>
          <input type="text" class="form-control" id="username" name="username" :value="user.username">
        </div>
        <div class="mb-3 form-check">
          <div v-for="(role, i) in roles">
            <label class="form-check-label" :for="i">{{ role }}</label>
            <input type="checkbox" class="form-check-input" :id="i" :name="role"
                   :checked="user.roles.includes(role)">
          </div>
        </div>
        <button type="submit" class="btn btn-primary">{{ $t("btn.save") }}</button>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t("meta.titles.userEdit"),
      meta: [{hid: "description", name: "description", content: this.$t("meta.descriptions.userEdit")}]
    }
  },
  data: () => ({ // FIXME axios replacement
    user: {
      id: 0,
      username: "Admin",
      password: "1234",
      active: true,
      roles: ["USER", "ADMIN"]
    },
    roles: ["USER", "ADMIN"]
  })
}
</script>
