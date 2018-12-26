/**
 * User information of chat
 */
const state = {
  id: 1,
  name: 'Mary',
  last_online: '3s önce aktifti',
  color : ''
}

const mutations = {
  updateUser: function (state, user) {

    state.id = user.id
    state.name = user.name
    state.color = user.color
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
