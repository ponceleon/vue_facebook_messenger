<template>
    <div>
        <ul>
            <li>Selam</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'List',
  props: ['title'],
  created: function(){
      console.log("child: ", this)
  }
}
</script>

<style scoped>

</style>
