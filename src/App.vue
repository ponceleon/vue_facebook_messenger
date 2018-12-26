<template>
  <div id="app">

    <div id="app_container" class="columns is-gapless">
      <div class="column is-3" v-bind:style="{ 'border-right': '1px solid rgba(0, 0, 0, .10)' }">
        <Conversations />
      </div>
      <div class="column">
        <router-view/>
      </div>
    </div>

  </div>
</template>

<script>
import Conversations from './sections/Conversations'

export default {
  name: 'App',
  components: { Conversations },
  created: function () {
    console.log('App created')

    this.$store.dispatch('users/getUsers')
  }
}
</script>

<style>
  body{
    font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;
  }
  #app {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  #app_container {
    height: 100%;
  }

  .disHighlight{
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -webkit-touch-callout: none;
    -o-user-select: none;
    -moz-user-select: none;
  }

</style>
