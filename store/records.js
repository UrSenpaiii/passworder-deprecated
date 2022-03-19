import {encrypt, decrypt} from "@/modules/encryption"

export const state = () => ({
  records: [],
  invalidKey: false
})

export const mutations = {
  decryptRecords(state, data) {
    state.invalidKey = false
    let records = decrypt(data.encryptedRecords, data.masterKey)
    if (records == null) state.invalidKey = true
    else
      for (let record in records) state.records.push(record)
  }
}

export const actions = {
  async reqRecords({commit}, masterKey) {
    let userId = this.$auth.user.id
    let {data} = await this.$axios.get(`/vault/${userId}`)
    commit("decryptRecords", {encryptedRecords: data, masterKey})
  }
}

export const getters = {
  isKeyInvalid(state) {
    return state.invalidKey
  },
  getRecords(state) {
    return state.records
  }
}
