export const state = () => ({
  activationEmail: null
})

export const mutations = {
  setActivationEmail(state, mail) {
    state.activationEmail = mail
  }
}

export const getters = {
  getActivationEmail(state) {
    return state.activationEmail
  }
}
