import {encrypt, decrypt} from "@/modules/encryption";

export const state = () => ({
  encryptedData: [],
  records: [{
    title: "Default Group",
    children: [{
      title: "Google",
      username: "vasy@gmail.com",
      password: "12345678",
      notes: "hello",
      website: "https://google.com",
      "Телефон": "+1463664324",

      created: Date.now(),
      updated: Date.now(),
      expired: Date.now()
    }, {
      title: "Facebook",
      username: "89462742625",
      password: "27Tdi88qk4n15fTVss",
      notes: "",
      website: "https://facebook.com",

      Email: "affda@mail.ya",
      "Recovery codes": "spidfgbjopadfijdsajvfo  asdjfl$adsjfadosp",

      created: Date.now(),
      updated: null,
      expired: null
    }, {
      title: "VKontakte",
      children: [{
        title: "VK",
        username: "89462742625",
        password: "vbTUBE41iJ1T58si",
        notes: "Primary",
        website: "https://vk.com",

        Email: "mymail@bk.com",

        created: Date.now(),
        updated: null,
        expired: null,
      }, {
        title: "VK",
        username: "89615071175",
        password: "vbTUBE41iJ1T58si",
        notes: "Secondary",
        website: "https://vk.com",

        created: Date.now(),
        updated: null,
        expired: null
      }]
    }]
  }, {
    title: "Not default",
    children: [{
      title: "Instagram",
      username: "89615071175",
      password: "vbTUBsdgreE41iJ1T58sivbTUBsdgreE41iJ1T58si",
      website: "https://vk.com",
      tags: ["Social network"],
      created: Date.now(),
      updated: null,
      expired: null
    }]
  }],
  isKeyValid: false
})

export const mutations = {
  // Setters
  setEncryptedData(state, encryptedData) {
    state.encryptedData = encryptedData
  },
  setRecords(state, records) {
    state.records = records
  },
  setKeyValidity(state, keyValidity) {
    state.isKeyValid = keyValidity
  }
}

export const actions = {
  async requestVaultsData({commit}) {
    let userId = this.$auth.user.id
    let {data} = await this.$axios.get(`/vaults/${userId}`)
      .catch(e => console.log(e))
    data.map(el => {delete el.id; delete el.pid})
    commit("setEncryptedData", data)
  },
  async createVault({commit, dispatch}, {title, masterPassword}) {
    let pid = this.$auth.user.id
    let encryptedData = encrypt([], masterPassword)
    await this.$axios.post("/vaults/create", {pid, title, encryptedData})
    dispatch("requestVaultsData")
  },
  enterVault({commit, state}, {title, key}) {
    let encryptedData = state.encryptedData.filter(d => d.title === title)[0].encryptedData
    let records = decrypt(encryptedData, key)
    if (records) {
      commit("setRecords", state.records) // FIXME mock data
      commit("setKeyValidity", true)
    } else commit("setKeyValidity", false)
  }
}
