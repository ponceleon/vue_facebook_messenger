<template>

  <div style="margin-top: 5px;">
    <span v-bind:style="{'background-color' : bgColor, color: textColor}" class="is-marginless" style="display: inline-block; padding: 5px 10px 5px 10px; font-size: 14px;  border-radius: 1.3em; border-bottom-left-radius: 0; ">
      Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı
    </span>
  </div>

</template>

<script>
  export default {
    name: "Paragraph",
    props: ["bgColor","textColor"]
  }
</script>

<style scoped>

</style>
