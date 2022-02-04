export const state = () => ({
  setting: {},
  env: {},
})

export const mutations = {
  SetSettings(state, payload) {
    state.setting = payload
  },
  setEnv(state, env) {
    state.env = env
  },
}

export const actions = {
  async nuxtServerInit(context) {
    await context.dispatch('SET_SETTING')

    if (process.server) {
      context.commit('setEnv', {
        ENV: process.env.NODE_ENV,
        API_URL: process.env.API_URL,
        RISK_API: process.env.RISK_API,
        BASE_URL: process.env.BASE_URL,
      })
    }
  },
  async SET_SETTING(context, payload) {
    let getData = await this.$axios.get(`/api/settings`)
    payload = getData.data.settings
    context.commit('SetSettings', payload)
  },
}

export const getters = {
  Setting: (state) => {
    return state.setting
  },
}
