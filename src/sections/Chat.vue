<template>
  <div style="display: flex; flex-flow: column; height: 100%;">

    <Header />
    <Talk />

  </div>

</template>

<script>

import Header from './chat/Header'
import Talk from './chat/Talk'

export default {
  name: 'Chat',
  components: {Header, Talk},
  watch: {
    '$route.params.id': function (id) {

    }
  }

}
</script>

<style scoped>

</style>
