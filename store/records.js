import {encrypt, decrypt} from "../modules/encryption";

export const state = () => ({
  encryptedData: [],
  records: {
    Database1: {
      "Default Group": [{
        title: "Google",
        username: "vasy@gmail.com",
        password: "12345678",
        notes: "hello",
        website: "https://google.com",

        "Телефон": "+1463664324",

        tags: ["service", "email"],
        created: Date.now(),
        updated: Date.now(),
        expired: Date.now()
      }, {
        title: "Facebook",
        username: "89462742625",
        password: "27Tdi88qk4n15fTV",
        notes: "",
        website: "https://facebook.com",

        Email: "affda@mail.ya",
        "Recovery codes": "spidfgbjopadfijdsajvfo  asdjfl$adsjfadosp asdfjas4%lodjf",

        tags: ["Social network"],
        created: Date.now(),
        updated: null,
        expired: null
      }, {
        "VKontakte": [{
          title: "VK",
          username: "89462742625",
          password: "vbTUBE41iJ1T58si",
          notes: "Primary",
          website: "https://vk.com",

          Email: "mymail@bk.com",

          tags: ["Social network"],
          created: Date.now(),
          updated: null,
          expired: null,
        }, {
          title: "VK",
          username: "89615071175",
          password: "vbTUBE41iJ1T58si",
          notes: "Secondary",
          website: "https://vk.com",
          tags: ["Social network"],
          created: Date.now(),
          updated: null,
          expired: null
        }]
      }]
    },
  },
  validKey: false
})

export const mutations = {
  // Setters
  setEncryptedData(state, encryptedData) {
    state.encryptedData = encryptedData
  }
}

export const actions = {
  async requestVaultsData({commit}) {
    let userId = this.$auth.user.id
    let {data} = await this.$axios.get(`/vaults/${userId}`)
      .catch(e => console.log(e))
    commit("setEncryptedData", data)
  },
  async createVault({commit}, {title, masterPassword}) {
    let encryptedVault = encrypt({[title]: {}}, masterPassword)
    await this.$axios.post("/vaults/create", {encryptedVault})
  }
}

export const getters = {
  getEncryptedDataTitles(state) {
    console.log(state.encryptedData.map(d => d.title))
    return state.encryptedData.map(d => d.title)
  },
  isKeyValid(state) {
    return state.validKey
  }
}
