<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style></style>
<script>
import "./assets/vendor/glightbox/css/glightbox.css";
import "./assets/vendor/glightbox/js/glightbox.js";
import GLightbox from './assets/vendor/glightbox/js/glightbox.js';
export default{
  mounted(){ 
          //lightbox settings
          this.portfolioLightbox = GLightbox({
            selector: '.portfolio-lightbox'
          });
    }
}

</script>
