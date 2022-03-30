<template>
  <aside class="col-4 bg-white border-start p-3">
    <form class="needs-validation" novalidate @submit.prevent="editRecord">
      <div class="d-flex justify-content-between">
        <h5>New Record</h5>
        <div>
          <button class="btn btn-primary btn-sm" type="submit">{{ $t("edit") }}</button>
        </div>
      </div>

      <div class="my-3">
        <h5 class="text-muted">{{ $t("title") }}</h5>
        <div class="border-bottom d-flex justify-content-between">
          <div>{{ record.title }}</div>
          <i @click="copy(record.title)" class="bi bi-clipboard"/>
        </div>
      </div>
      <div v-if="record.username" class="my-3">
        <h5 class="text-muted">{{ $t("username") }}</h5>
        <div class="border-bottom d-flex justify-content-between">
          <div>{{ record.username }}</div>
          <i @click="copy(record.username)" class="bi bi-clipboard"/>
        </div>
      </div>
      <div v-if="record.password" class="my-3">
        <h5 class="text-muted">{{ $t("password") }}</h5>
        <div class="d-flex justify-content-between border-bottom">
          <div v-if="!showPassword" class="border-bottom">{{ censuredPasswordLength(record.password) }}</div>
          <div v-if="showPassword">{{ record.password }}</div>
          <div>
            <i :class="'bi bi-eye' + [showPassword ? '-slash' : ''] + '-fill'"
               @click="showPassword = !showPassword"/>
            <i @click="copy(record.password)" class="bi bi-clipboard"/>
          </div>
        </div>
      </div>
      <div v-if="record.website" class="my-3">
        <h5 class="text-muted">{{ $t("username") }}</h5>
        <div class="border-bottom d-flex justify-content-between">
          <div class="border-bottom"><a :href="record.website" target="_blank">{{ record.website }}</a></div>
          <i @click="copy(record.website)" class="bi bi-clipboard"/>
        </div>
      </div>

    </form>
  </aside>
</template>

<script>
export default {
  props: {record: Object},
  data() {
    return {
      showPassword: false
    }
  },
  methods: {
    censuredPasswordLength(password) {
      if (!password) return ""
      let res = ""
      for (let i = 0; i < password.length; i++) res += "*"
      return res
    },
    copy(value) {
      navigator.clipboard.writeText(value)
    },
    editRecord() {
    }
  }
}
</script>

<style scoped>
i {
  cursor: pointer;
}
</style>
