<template>
  <aside class="col-4 bg-white border-start p-3">
    <form class="needs-validation" novalidate @submit.prevent="submitValidation">
      <div class="d-flex justify-content-between">
        <h5>New Record</h5>
        <div>
          <button class="btn btn-outline-secondary btn-sm" type="button" @click="$emit('edit', {menu: 'view'})">
            {{ $t("btn.cancel") }}
          </button>
          <button class="btn btn-primary btn-sm" type="submit">{{ $t("create") }}</button>
        </div>
      </div>

      <div class="my-4">
        <label class="form-label" for="title">{{ $t("title") }}</label><sup>*</sup>
        <input id="title" v-model="newRecord.title" class="form-control" maxlength="30" minlength="3" name="title"
               required type="text" @input="validateTitleField">
        <div class="invalid-feedback">
          {{ errors[errorIndex] }}
        </div>
      </div>
      <div class="my-4">
        <label class="form-label" for="username">{{ $t("login") }}</label>
        <input id="username" v-model="newRecord.username" class="form-control" name="username" type="text">
      </div>
      <div class="my-4">
        <label class="form-label" for="password">{{ $t("password") }}</label>
        <div class="d-flex">
          <input id="password" v-model="newRecord.password" class="form-control" name="password"
                 :type="showPassword ? 'text' : 'password'">
          <i :class="'bi bi-eye' + [showPassword ? '-slash' : ''] + '-fill'" style="margin: 6px 0 6px -30px;"
             @click="showPassword = !showPassword"/>
        </div>
      </div>
      <div class="my-4">
        <label class="form-label" for="website">{{ $t("website") }}</label>
        <input id="website" v-model="newRecord.website" class="form-control" name="website" type="text">
      </div>
      <div class="my-4">
        <label class="form-label" for="notes">{{ $t("notes") }}</label>
        <input id="notes" v-model="newRecord.notes" class="form-control" name="notes" type="text">
      </div>
    </form>
  </aside>
</template>

<script>
import {classUpdate, isEmptyValidation, usernameValidation} from "~/utils/rules";

export default {
  props: {record: Object, totalId: Number, currentFolder: Number},
  data() {
    return {
      newRecord: {
        id: this.totalId, title: "", username: "", password: "", notes: "", website: ""
      },
      errors: [this.$t("errors.fillField"), ...this.$t("errors.title")],
      errorIndex: -1,
      showPassword: false
    }
  },
  mounted() {
    this.newRecord = {...this.record}
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

      if (form.checkValidity()) {
        let records = JSON.parse(JSON.stringify(this.$store.state.records.records))
        this.currentFolder ? this.createRecord(records) : this.editRecords(records)
        console.log(records)
        this.$store.commit("records/setRecords", records)
        this.$store.dispatch("records/sentVaultsData")
        this.$emit("changed", {records, menu: ""})
      }
    },
    createRecord(node) {
      if (Array.isArray(node)) node.map(el => this.editRecords(el))
      if (node.children) {
        if (node.id === this.currentFolder) node.children.push(this.newRecord)
        else node.children.map(ch => this.editRecords(ch))
      }
    },
    editRecords(node) {
      if (Array.isArray(node)) node.map(el => this.editRecords(el))
      if (!node.children) {
        if (node.id === this.$store.state.records.active)
          Object.keys(node).map(prop => node[prop] = this.newRecord[prop])
      } else node.children.map(ch => this.editRecords(ch))
    }
  }
}
</script>

<style scoped lang="scss">
.form-control {
  border: 1px solid #ced4da;

  &.is-valid:focus {
    border-color: #86b7fe;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25);
    background-image: none;
  }
}

sup {
  color: #dc3545
}
</style>
