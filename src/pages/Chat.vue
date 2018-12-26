<template>
  <div style="display: flex; flex-flow: column; height: 100%;">
    <div class="has-text-centered" id="header" v-bind:style="style.header">
      <div class="columns is-gapless">
        <div class="column is-3">

        </div>
        <div class="column">
          <span class="has-text-weight-bold" v-bind:style="{'line-height': style.header.height}">
            Doğan satırcı
          </span>
        </div>
        <div class="column is-3">
          ikonlar
        </div>
      </div>
    </div>
    <div id="body" v-bind:style="style.body">
      <div v-for="(chat, index) in chats" v-bind:key="index">
        <div v-if="user_id == chat.id" class="columns is-gapless">
          <div class="column is-8">
            {{chat.name}}
          </div>
        </div>
        <div v-else class="columns is-gapless">
          <div class="column is-4">
          </div>
          <div class="column is-8">
            {{chat.name}}
          </div>
        </div>
      </div>
    </div>
    <div id="footer" v-bind:style="style.footer">
      footer
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Chat',
  data: function () {
    return {
      style: {
        header: {
          'height': '50px'
        },
        body: {
          'flex-grow': 1,
          'padding': '10px'
        },
        footer: {
          'height': '50px'
        }
      },
      user_id: this.$store.state.me.id
    }
  },
  computed: mapState({
    'chats': 'chats'
  }),
  created: function () {
    console.log('chat store: ', this.$store.state.me.id)
  }
}
</script>

<style scoped>

</style>
