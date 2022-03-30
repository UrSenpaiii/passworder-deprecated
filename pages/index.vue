<template>
<div class="container-fluid">
  <section class="container">
    <div class="row align-items-center py-8">
      <div class="col-5 col-lg-6 order-md-1 text-center text-md-end">
        <img class="img-fluid" src="/landing.png" width="612" alt="img">
      </div>
      <div class="col-md-7 col-lg-6 text-center text-md-start">
        <h1 class="mb-4 display-3 fw-bold lh-sm">
          It's the best
          <br>
          password manager
          <br>
          you have ever seen
        </h1>
        <p class="mt-3 mb-4 fs-1">
          Simple and cross-platform web-app
          <br class="d-none d-lg-block">
          for your every-day usage.
        </p>
        <nuxt-link :to="localePath('/registration')" class="btn btn-lg btn-primary rounded-pill hover-top">Start usage</nuxt-link>
        <nuxt-link :to="localePath('/registration')" class="btn btn-link ps-md-4">Already have an account</nuxt-link>
      </div>
    </div>
  </section>
  <img style="margin-bottom: 200px;" class="col-12" src="/city.png" alt="city">
</div>
</template>

<script>
export default {
  auth: false,
  head() {
    return {
      meta: [{hid: "description", name: "description", content: this.$t("meta.descriptions.index")}]
    }
  }
}
</script>
