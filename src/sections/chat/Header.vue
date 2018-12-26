<template>
  <div class="has-text-centered" v-bind:style="style.header">
    <div class="columns is-gapless">
      <div class="column is-3">
      </div>
      <div class="column">

        <p class="is-marginless" style="font-size: 14px; padding-top: 4px; font-weight: bold;">
          {{user.name}}
        </p>
        <p class="is-marginless" style="font-size: 12px;">
          {{user.last_online}}
        </p>
      </div>
      <div class="column is-3">

        <ul v-bind:style="style.infoButton">
          <li>
            <a href="#" v-bind:style="style.infoButtonPhoneIcon"></a>
          </li>
          <li>
            <a href="#" v-bind:style="style.infoButtonPhoneIcon"></a>
          </li>
          <li>
            <button v-bind:style="style.infoButtonPhoneIcon" @click="openCloseUserInfo"></button>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Header',
  data: function () {
    return {
      style: {
        header: {
          'height': '50px',
          'border-bottom': '1px solid rgba(0, 0, 0, 0.1)',
          'flex': 'none'
        },
        infoButtonPhoneIcon: {
          'background-image': 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/gtsqTxXEAel.png)',
          'background-repeat': 'no-repeat',
          'background-size': 'auto',
          'background-position': '-66px -637px',
          display: 'inline-block',
          height: '32px',
          width: '32px',
          'margin-top': '9px'
        },
        infoButton: {
          display: 'flex',
          justifyContent: 'flex-end',
          marginRight: '8px'
        }
      }

    }
  },
  computed: mapState({
    'user': 'user'
  }),
  methods: {
    ...mapMutations([
      'openCloseUserInfo'
    ])
  }
}
</script>

<style scoped>

</style>
