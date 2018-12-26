<template>
  <div class="columns is-gapless is-mobile">
    <div class="column is-8">

      <div class="columns is-gapless" style="align-items: flex-end;">
        <div style="margin-left: 10px; margin-right: 10px;">
          <div class="image" style="width: 28px; height: 28px;">
            <img src="https://bulma.io/images/placeholders/128x128.png" class="is-rounded">
          </div>
        </div>

        <div class="column">

          <Paragraph />
          <Link />
          <Photo />

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Paragraph from "./messages/Paragraph";
import Link from "./messages/Link";
import Photo from "./messages/Photo";
export default {
  name: 'TalkLeft',
  components: {Photo, Link, Paragraph}
}
</script>

<style scoped>



</style>
