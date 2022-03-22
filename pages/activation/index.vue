<template>
  <div class="container">
    <div class="p-4">
      <h1>Registration successfully completed!</h1>
      <p>Please check your email <a :href='`mailto:${activationEmail}?Subject=upport`' class="fst-italic">{{ activationEmail }}</a>
        to activate account and start using it.</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  auth: 'guest',
  head() {
    return {
      title: this.$t("meta.titles.activation"),
      meta: [{hid: "description", name: "description", content: this.$t("meta.descriptions.activation")}]
    }
  },
  data() {
    return {
      activationEmail: this.getActivationEmail()
    }
  },
  created() {
    if (this.activationEmail == null) this.$router.push("/")
  },
  methods: {
    ...mapGetters({
      getActivationEmail: "activation/getActivationEmail"
    })
  }
}
</script>
