<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <h2>{{srcm}}</h2>
<img src="../assets/img/hero-img.png" />
    <img :src="srcm" class="img-fluid" alt="" />
    
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>

export default {
  name: "Img",
  props: {
    srcm: String,
  }
};
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
}
</style>