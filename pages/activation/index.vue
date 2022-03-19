<template>
  <div class="container">
    <h1>Registration successfully completed!</h1>
    <p>Please check your email {{ activationEmail }} to activate account and start using it.</p>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  auth: false,
  head() {
    return {
      title: this.$t("meta.titles.activation"),
      meta: [{hid: "description", name: "description", content: this.$t("meta.descriptions.activation")}]
    }
  },
  data() {
    return {
      activationEmail: this.getRouteBaseName()
    }
  },
  methods: {
    ...mapGetters({
      getActivationEmail: "activation/getActivationEmail"
    })
  }
}
</script>
