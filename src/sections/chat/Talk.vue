<template>

  <div class="columns is-gapless" style="flex-grow: 1;">
    <div class="column">

      <!--Chat Container-->
      <div style="display: flex;flex-flow: column;height: 100%; border-right: 1px solid rgba(0, 0, 0, 0.1);">
        <div style="flex-grow: 1; overflow: auto; padding-bottom: 10px;">

          <!--Chat-->
          <div style="flex-grow: 1;">


            <div v-for="(chat, index) in chats" v-bind:key="index" class="columns is-gapless is-mobile">
              <div v-if="user.id === chat.id" class="column is-8">

                <div class="columns is-gapless" style="align-items: flex-end;">
                  <figure class="image" style="width: 24px; height: 24px; display: flex; margin-left: 10px; margin-right: 10px;">
                    <img class="is-rounded" src="https://bulma.io/images/placeholders/48x48.png"/>
                  </figure>

                  <div class="column">

                    <Photo />
                    <Link />
                    <Paragraph bg-color="#f1f0f0" text-color="#4a4a4a" />

                  </div>
                </div>
              </div>
              <div v-else class="column is-8 is-offset-4">

                <div style="display: flex; flex-flow: row; align-items: flex-end;">

                  <div style="display: flex; flex-flow: column; align-items: flex-end; flex-grow: 1;">

                    <Photo />
                    <Link />
                    <Paragraph v-bind:bg-color="user.color" text-color="#fff" />

                  </div>

                  <figure class="image" style="flex-grow: 0;margin-left: 10px;margin-right: 10px; min-width: 24px;">
                    <img class="is-rounded" src="https://bulma.io/images/placeholders/24x24.png"/>
                  </figure>
                </div>


              </div>
            </div>
          </div>

        </div>

        <!--Input container-->
        <div style="height: 50px">

          <div v-bind:style="style.footer">
            <div class="columns is-gapless">
              <div class="column">
                <input v-bind:style="style.textInput" type="text" />
              </div>
              <div class="column">
              3
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
    <div class="column is-4" style="overflow: auto;" v-bind:class="[ appConfig.userInfoOpen ? '' : 'is-hidden']">
      <UserInfo />
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import UserInfo from './UserInfo'
import TalkLeft from './TalkLeft'
import TalkRight from './TalkRight'
import Paragraph from "./messages/Paragraph";
import Link from "./messages/Link";
import Photo from "./messages/Photo";

export default {
  name: 'Talk',
  components: {Photo, Link, Paragraph, UserInfo, TalkLeft, TalkRight},
  data: function () {
    return {
      style: {
        footer: {
          'height': '50px',
          'border-top': '1px solid rgba(0, 0, 0, 0.1)'
        },
        textInput: {
          'width': '100%'
        }
      },
      auth_id: this.$store.state.me.id
    }
  },
  computed: {
    ...mapState({
      'chats': 'chats',
      'user': 'user',
      'appConfig': 'appConfig'
    })
  },
  created: function () {
    console.log('talks chat: ', this.chats)
    console.log('talks user: ', this.user)
  }
}
</script>

<style scoped>

</style>
