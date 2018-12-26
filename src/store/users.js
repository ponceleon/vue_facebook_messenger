import mockUsers from '../mock/users.json'

const state = []

const actions = {
  getUsers: function ({commit, state}) {
    commit('conversations/serverConnectingStatus', {status: true}, {root: true})
    setTimeout(function () {
      const users =
      commit('setUsers', mockUsers)
      commit('conversations/serverConnectingStatus', {status: false}, {root: true})
    }, 200)
  }
}

const mutations = {
  setUsers: function (state, users) {
    users.map(function (item) {
      state.push(item)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
