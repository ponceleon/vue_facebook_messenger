import Vue from 'vue'
import Vuex from 'vuex'

import conversations from '../store/conversations'
import chats from '../store/chats'
import users from '../store/users'
import photos from '../store/photos'
import user from '../store/user'

Vue.use(Vuex)

const state = {
  appConfig: {
    userInfoOpen: true,
    userInfoConfigOpen: true,
    userInfoPhotoOpen: true
  },
  count: 2,
  me: {
    id: 1
  }
}

const mutations = {
  openCloseUserInfo: function (state) {
    state.appConfig.userInfoOpen = !state.appConfig.userInfoOpen
  },
  openCloseUserInfoConfig: function (state) {
    state.appConfig.userInfoConfigOpen = !state.appConfig.userInfoConfigOpen
  },
  openCloseUserInfoPhoto: function (state) {
    state.appConfig.userInfoPhotoOpen = !state.appConfig.userInfoPhotoOpen
  }
}

export default new Vuex.Store({
  modules: {
    conversations,
    chats,
    users,
    user,
    photos
  },
  mutations,
  state
})
