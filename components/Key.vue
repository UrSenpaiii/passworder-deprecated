<template>
  <div class="modal fade" :id="id" tabindex="-1" :aria-labelledby="id" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-0 pb-0">
          <label class="modal-title form-label h4" for="password">{{ $t("masterPassword") }}</label>
        </div>
        <form class="modal-body">
          <input id="password" v-model="key" :type="showPassword ? 'text' : 'password'"
                 class="form-control d-inline-block" maxlength="30" minlength="8" name="password" required>
          <i :class="'position-absolute bi bi-eye' + [showPassword ? '-slash' : ''] + '-fill'"
             style="margin: 5.5px 0 5.5px -30px;" @click="showPassword = !showPassword"/>
        </form>
        <div class="modal-footer border-0 pt-0">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ $t("btn.cancel") }}</button>
          <button @click="decrypt" class="btn btn-primary">
            {{ $t("btn.enter") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  props: {id: String},
  data: () => ({
    showPassword: false,
    key: null
  }),
  methods: {
    decrypt() {

    },
    ...mapGetters({
      isKeyValid: "records/isKeyValid",
    })
  }
}
</script>
