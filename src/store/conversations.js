const state = {
  loading: true
}

const mutations = {
  serverConnectingStatus: function (state, data) {
    state.loading = data.status
  }
}

export default {
  namespaced: true,
  mutations,
  state
}
