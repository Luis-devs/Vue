<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <NavBar />
    <Section1 :srcm="poner" />
    <Main/>
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
// @ is an alias to /src

import NavBar from "@/components/NavBar.vue";
import Section1 from "@/components/Section1.vue";
import Main from "@/components/Main.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Section1,
    Main,
  },
  computed:{
    poner(){
      
      return require("@/assets/img/hero-img.png");
    }, 
    },
};
</script>
