<template>
  <div>
    <!--User info-->
    <div style="padding: 10px; border-bottom: 1px solid rgba(0, 0, 0, 0.1);">
      <div>
        <article class="media" style="align-items: center">
          <figure class="media-left">
            <div class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/128x128.png" class="is-rounded">
            </div>
          </figure>
          <div class="media-content">
            <div class="content">
              <div style="line-height: 18px;">
                <a style="font-size: 14px; color: #365899;" href="#">
                  {{user.name}}
                </a>
                <p style="font-size: 12px; color: rgba(0, 0, 0, .40)" class="is-marginless">{{user.last_online}}</p>
              </div>
            </div>

          </div>
          <div class="media-right">
            <button class="delete"></button>
          </div>
        </article>

      </div>
    </div>

    <!--Config-->
    <div>
      <div class="configItem" style="cursor: pointer;" @click="openCloseUserInfoConfig">
        <h4 style="font-size: 14px;"><span class="disHighlight">Config</span></h4>
      </div>

      <ul class="userConfigList" v-bind:class="[ appConfig.userInfoConfigOpen ? '' : 'is-hidden' ]">
        <li>
          <div class="columns">
            <div>
              <font-awesome-icon icon="search" />
            </div>
            <div class="column">
              <span>Konuşmada Ara</span>
            </div>
          </div>


        </li>
        <li><font-awesome-icon icon="edit" /> <span>Takma Adları Düzenle</span></li>
        <li><font-awesome-icon icon="palette" /> <span>Rengi Değiştir</span></li>
        <li><font-awesome-icon icon="thumbs-up" /> <span>İfade Simgesini Değiştir</span></li>
        <li><font-awesome-icon icon="bell" /> <span>Bildirimler</span></li>
      </ul>
    </div>

    <!--Photos-->
    <div>

      <div class="configItem"  style="cursor: pointer;" @click="openCloseUserInfoPhoto">
        <h4 style="font-size: 14px;"><span class="disHighlight">Photos</span></h4>
      </div>

      <div class="disHighlight" style="padding: 5px;" v-bind:class="[ appConfig.userInfoPhotoOpen ? '' : 'is-hidden' ]">
        <div :key="key" v-for="(photos, key) in photoGroup"  class="columns is-gapless is-marginless" style="">
          <div :key="key" class="column" v-for="(photoUrl, key) in photos">
            <div style="">
              <img :src="photoUrl" style="display: block; padding: 5px;"/>
            </div>
          </div>
        </div>
      </div>


    </div>

  </div>
</template>

<script>

import UserInfoListItem from '../../components/UserInfoListItem.vue'
import {mapState, mapGetters, mapMutations} from 'vuex'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faEdit, faPalette, faThumbsUp, faBell } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faEdit, faPalette, faThumbsUp, faBell)


export default {
  name: 'UserInfo',
  components: {UserInfoListItem},
  computed: {
    ...mapState({
      'user': 'user',
      'appConfig': 'appConfig'
    }),
    ...mapGetters({
      'photoGroup': 'photos/groupPhotos'
    })
  },
  methods: {
    ...mapMutations([
      'openCloseUserInfoPhoto',
      'openCloseUserInfoConfig'
    ])
  },
  created: function () {
    console.log(this.photoGroup)
  }
}
</script>

<style>
  .configItem {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 14px;
    color: rgba(0, 0, 0, .40);
  }

  .configItem:hover{
    background-color: rgba(0, 0, 0, .05);
  }

  /* .userConfigList{
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px;
  }

  .userConfigList > li{
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .userConfigList > li > span{
    padding-left: 10px;
    font-size: 14px;
  } */

</style>
