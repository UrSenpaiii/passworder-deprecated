<template>
  <div class="container">
    <main>
      <h1>profile</h1>
      {{this.$auth.user}}

      <form method="post">
        <input type="submit" value="logout">
      </form>
    </main>
  </div>
</template>

<script>
export default {
  head: {
    title: "Profile",
    meta: [
      {hid: 'description', name: 'description', content: 'Profile page'}
    ]
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    }
  },
  mounted() {
    let form = document.getElementsByTagName("form")[0]

    form.addEventListener("submit", (event) => {
      event.preventDefault()
      this.logout()
    })
  }
}
</script>
