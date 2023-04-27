import {encrypt, decrypt} from "/modules/encryption";

export const state = () => ({
  encryptedData: [],
  records: [{
    id: 1,
    title: "Default Group",
    children: [{
      id: 2,
      title: "Google",
    },{
      id: 3,
      title: "Google",
      username: "vasy@gmail.com",
      password: "12345678",
      website: "https://google.com",
      notes: "hello"
    }, {
      id: 4,
      title: "Facebook",
      username: "89462742625",
      password: "27Tdi88qk4n15fTVss",
      website: "https://facebook.com",
      notes: ""
    }, {
      id: 5,
      title: "VKontakte",
      children: [{
        id: 6,
        title: "VK",
        username: "89462742625",
        password: "vbTUBE41iJ1T58si",
        website: "https://vk.com",
        notes: "Primary"
      }, {
        id: 7,
        title: "VK",
        username: "89615071175",
        password: "vbTUBE41iJ1T58si",
        website: "https://vk.com",
        notes: "Secondary"
      }]
    }]
  }, {
    id: 8,
    title: "Not default",
    children: [{
      id: 9,
      title: "Instagram",
      username: "89615071175",
      password: "vbTUBsdgreE41iJ1T58sivbTUBsdgreE41iJ1T58si",
      website: "https://vk.com",
    }]
  }],
  isKeyValid: false,
  active: 0,
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
  },
  setActiveNode(state, id) {
    state.active = id
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
  async sentVaultsData({commit, state}) {
    let userId = this.$auth.user.id
    await this.$axios.post(`/vaults/${userId}`, {encData: encrypt(state.records, "aA1!aaaaaaaa")})
      .catch(e => console.log(e))
    let {data} = await this.$axios.get(`/vaults/${userId}`)
      .catch(e => console.log(e))
    data.map(el => {delete el.id; delete el.pid})
    console.log(data)
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
