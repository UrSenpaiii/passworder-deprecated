import {decrypt} from "@/modules/encryption"

export const state = () => ({
  encryptedData: null,
  records: [],
  recordss: [
    {
      title: "",
      username: "",
      password: "",
      notes: "",
      website: "",
      customFields: {
        field1: "",
        field2: ""
      },
      tags: [],
      created: "",
      updated: "",
      expired: ""
    }, {
      title: "",
      username: "",
      password: "",
      notes: "",
      website: "",
      customFields: {
        field1: "",
        field2: ""
      },
      tags: [],
      created: "",
      updated: "",
      expired: "",
      children: [
        {
          title: "",
          username: "",
          password: "",
          notes: "",
          website: "",
          customFields: {
            field1: "",
            field2: ""
          },
          tags: [],
          created: "",
          updated: "",
          expired: ""
        }
      ]
    }
  ],

  validKey: false
})

export const mutations = {
  decryptRecords(state, data) {
    state.invalidKey = false
    let records = decrypt(data.encryptedData, data.masterKey)
    if (records == null) state.invalidKey = true
    else
      for (let record in records) state.records.push(record)
  }
}

export const actions = {
  async requestVaultData({commit}) {
    let userId = this.$auth.user.id
    let {data} = await this.$axios.get(`/vault/${userId}`)
    if (data) commit("setEncryptedData")
  },
  async sendVaultData({}) {

  },

  // Setters
  setEncryptedData(state, data) {
    state.encryptedData = data + 1
  }
}

export const getters = {
  getEncryptedData(state) {
    return state.encryptedData
  },
  getRecords(state) {
    return state.records
  }, isKeyValid(state) {
    return state.invalidKey
  }
}
