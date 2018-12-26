<template>
  <div style="display: flex; flex-direction: row; align-items: center; padding: 10px 10px 10px 10px; line-height: 0;">
    <div style="flex-grow: 1; font-size: 14px; color: black; display:flex; align-items: center;">
      <div style="width:20px;">
        
      </div>
      <div style="margin-left: 15px;">
        {{title}}
      </div>
       
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfoListItem',
  props: ['title']
}
</script>

<style scoped>

</style>
