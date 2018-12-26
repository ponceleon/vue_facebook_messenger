import partitionAll from 'partition-all'

const state = ['https://bulma.io/images/placeholders/128x128.png','https://bulma.io/images/placeholders/128x128.png','https://bulma.io/images/placeholders/128x128.png','https://bulma.io/images/placeholders/128x128.png','https://bulma.io/images/placeholders/128x128.png','https://bulma.io/images/placeholders/128x128.png','https://bulma.io/images/placeholders/128x128.png','https://bulma.io/images/placeholders/128x128.png','https://bulma.io/images/placeholders/128x128.png','https://bulma.io/images/placeholders/128x128.png','https://bulma.io/images/placeholders/128x128.png','https://bulma.io/images/placeholders/128x128.png','https://bulma.io/images/placeholders/128x128.png','https://bulma.io/images/placeholders/128x128.png','https://bulma.io/images/placeholders/128x128.png']

const getters = {
  groupPhotos: function (state) {
    return partitionAll(3, state)
  }
}

export default {
  namespaced: true,
  state,
  getters
}
