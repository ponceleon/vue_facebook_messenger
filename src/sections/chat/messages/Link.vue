<template>
  <div style="margin-top: 5px;">

    <div style="border-radius: 1.3em; border: solid 1px rgba(0, 0, 0, 0.1); max-width: 320px; overflow: hidden;">

      <div class="card-link">

      </div>
      <div style="padding: 10px;">
        <div class="card-title">
          Beyinlerimiz biz farkına bile varmadan birbirleriyle konuşuyor olabilir mi?
        </div>

        <div class="card-desc">
          Nörolog Moran Cerf'e göre, hayatta alabileceğiniz en doğru karar, kiminle vakit geçirdiğinizi akıllıca seçmek. Çünkü ona göre beyinlerimiz, etrafımızdakilerin beyinlerine bir süre sonra uyum sağlıyor.
        </div>
      </div>


    </div>

  </div>
</template>

<script>
    export default {
        name: "Link"
    }
</script>

<style scoped>
  .card-link {
    width: 100%;
    height: 200px;
    margin: auto;
    background-size: cover;
    background-image: url('https://bulma.io/images/placeholders/1280x960.png');
  }

  .card-title {
    font-size: 14px;
    font-weight: 600;
  }


  .card-desc {
    font-size: 14px;
  }
</style>
