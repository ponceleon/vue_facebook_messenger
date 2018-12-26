<template>
<div v-bind:style="{ display: 'flex', 'flex-flow': 'column', 'height': '100%' }">
    <div v-bind:style="style.header">
        <div class="columns is-gapless" v-bind:style="{height: '100%'}">
            <div class="column is-2 has-text-centered">
                <a href="#" v-bind:style="style.headerLeftIcon"></a>
            </div>
            <div class="column is-8 has-text-centered">
                <span class="has-text-weight-bold" v-bind:style="{'line-height': style.header.height}">
                    Messenger
                </span>
            </div>
            <div class="column is-2 has-text-centered">
                <a href="#" v-bind:style="style.headerRightIcon"></a>
            </div>
        </div>
    </div>
    <div v-bind:style="style.search" class="has-text-centered">
        search
    </div>
    <div v-bind:style="style.body">

      <p class="has-text-centered" style="padding:10px;" v-bind:class="[ this.sectionData.loading ? '' : 'is-hidden']">
        <font-awesome-icon icon="spinner" spin />
      </p>

      <router-link v-for='(item, key) in users' tag="div" :to="{ path: '/conversation/' + item.id}" :key="key">
          <article v-bind:style="[{cursor: 'pointer', padding: '10px'}, selectedIndex == key ? style.lineBackground : '']" class="media is-marginless" @click="lineClick(key, item.id, item.name)" >
          <figure class="media-left">
            <p class="image is-48x48">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p class="is-marginless" style="font-size: 15px;">
                {{item.name}}
              </p>
              <p style="font-size: 13px; font-weight: 400;">
                Lorem ipsum dolor sit amet, consectetur...
              </p>
            </div>
          </div>
          <div class="media-right">
            <span v-bind:style="{ 'font-size': '13px', color:'#0084ff','font-weight': 400}">19 Ekim</span>
            <br>
            <button class="delete"></button>
          </div>
        </article>
      </router-link>

    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

// FontAwesome config
library.add(faSpinner)

export default {
  name: 'Conversations',
  data: function () {
    return {
      style: {
        header: {
          height: '50px',
          'border-bottom': '1px solid rgba(0, 0, 0, .10)'
        },
        search: {
          backgroundColor: 'white',
          height: '50px'
        },
        body: {
          backgroundColor: 'white',
          'flex-grow': 1,
          'overflow': 'auto'
        },
        headerLeftIcon: {
          'background-image': 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/gtsqTxXEAel.png)',
          'background-repeat': 'no-repeat',
          'background-size': 'auto',
          'background-position': '-66px -637px',
          display: 'inline-block',
          height: '32px',
          width: '32px',
          'margin-top': '9px'
        },
        headerRightIcon: {
          'background-image': 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/gtsqTxXEAel.png)',
          'background-repeat': 'no-repeat',
          'background-size': 'auto',
          'background-position': '-33px -637px',
          display: 'inline-block',
          height: '32px',
          width: '32px',
          'margin-top': '9px'
        },
        lineBackground: {
          'background-color': 'rgba(0, 0, 0, .05)'
        }
      },
      hoverIndex: -1,
      selectedIndex: -1,
      user_id: this.$route.params.id
    }
  },
  computed: mapState({
    users: 'users',
    sectionData: 'conversations'
  }),
  methods: {
    lineClick: function (index) {
      this.selectedIndex = index
      this.$store.commit('user/updateUser', this.users[index])

    }
  },
  created: function () {

    // const user = this.conversations.find(item => item.id == this.user_id)
    // const index = this.conversations.indexOf(user)
    // this.selectedIndex = index

    // if(user != undefined) this.updateUserSummary({id: user.id, name: user.name})
  }

}
</script>

<style>
</style>
