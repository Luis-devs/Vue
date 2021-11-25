<!-- eslint-disable prettier/prettier -->
<template>
  <div class="icon-box">
      <div class="icon"><i :style="ponColor" :class="clase"></i></div>
        <h4 class="title"><a href="">{{titulo}}</a></h4>
        <p class="description">
              {{descripcion}}
        </p>
           
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>

export default {
  name: "Img",
  props: {
    clase: String,
    titulo:String,
    descripcion:String,
    ponColor:String,
  },
};
</script>


<style>

</style>