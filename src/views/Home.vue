<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <NavBar />
    <Section1 :srcm="poner" />
    <Main/>
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
