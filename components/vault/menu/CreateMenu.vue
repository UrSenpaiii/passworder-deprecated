<template>
  <aside class="col-4 bg-white border-start p-3">
    <form class="needs-validation" novalidate @submit.prevent="submitValidation">
      <div class="d-flex justify-content-between">
        <h5>New Record</h5>
        <div>
          <button class="btn btn-outline-secondary btn-sm" type="button">cancel</button>
          <button class="btn btn-primary btn-sm" type="submit">create</button>
        </div>
      </div>

      <div class="my-4">
        <label class="form-label" for="title">{{ $t("title") }}</label><sup>*</sup>
        <input id="title" v-model="record.title" class="form-control" maxlength="30" minlength="3" name="title"
               required type="text" @input="validateTitleField">
        <div class="invalid-feedback">
          {{ errors[errorIndex] }}
        </div>
      </div>
      <div class="my-4">
        <label class="form-label" for="username">{{ $t("login") }}</label>
        <input id="username" v-model="record.username" class="form-control" name="username" type="text">
      </div>
      <div class="my-4">
        <label class="form-label" for="password">{{ $t("password") }}</label>
        <div class="d-flex">
          <input id="password" v-model="record.password" class="form-control" name="password"
                 :type="showPassword ? 'text' : 'password'">
          <i :class="'bi bi-eye' + [showPassword ? '-slash' : ''] + '-fill'" style="margin: 6px 0 6px -30px;"
             @click="showPassword = !showPassword"/>
        </div>
      </div>
      <div class="my-4">
        <label class="form-label" for="website">{{ $t("website") }}</label>
        <input id="website" v-model="record.website" class="form-control" name="website" type="text">
      </div>
      <div class="my-4">
        <label class="form-label" for="notes">{{ $t("notes") }}</label>
        <input id="notes" v-model="record.notes" class="form-control" name="website" type="text">
      </div>

<!--      <a class="h4" @click="addCustomField"><i class="bi bi-plus-circle"/> {{ $t("customField") }}</a>-->
    </form>
  </aside>
</template>

<script>
import {classUpdate, isEmptyValidation, usernameValidation} from "../../../modules/rules";

export default {
  data() {
    return {
      record: {
        title: "", username: "", password: "", notes: "", website: "",
        created: Date.now(), expired: Date.now()
      },
      errors: [this.$t("errors.fillField"), ...this.$t("errors.title")],
      errorIndex: -1,
      showPassword: false
    }
  },
  methods: {
    validateTitleField(event) {
      const field = event.target
      this.errorIndex = usernameValidation(field.value)
      classUpdate(field, this.errorIndex)
    },
    submitValidation(event) {
      const form = event.target
      this.errorIndex = isEmptyValidation(form[2].value, this.errorIndex)
      classUpdate(form[2], this.errorIndex)

      if (form.checkValidity()) this.addRecord()
    },
    addRecord() {
      console.log(this.record)
    }
  }
}
</script>

<style scoped>
.form-control.is-valid {
  border-color: #86b7fe;
  box-shadow: 0 0 0 .25rem rgba(13,110,253,.25);
  background-image: none;
}

sup {
  color: #dc3545
}
</style>
