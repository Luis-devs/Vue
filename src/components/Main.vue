<!-- eslint-disable prettier/prettier -->
<template>
  <main id="main">
      <About/> 
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
  </main>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import About from"@/components/About.vue";
import Section2 from "@/components/Section2.vue";
import Section3 from "@/components/Section3.vue";
import Section4 from "@/components/Section4.vue";
import Section5 from "@/components/Section5.vue";
export default {
  name: "Main",
  components: {
      About,
      Section2,
      Section3,
      Section4,
      Section5,
    },
  
};
</script>

<style>
</style>