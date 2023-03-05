<!-- eslint-disable prettier/prettier -->
<template>
  <main id="main">
      <About/> 
      <Section2/>
      <Section3 :rutas="rutasSection3"/>
      <Section4/>
      <Section5 :rutas="rutasSection5"/>
      <Footer/>
  </main>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import About from"@/components/About.vue";
import Section2 from "@/components/Section2.vue";
import Section3 from "@/components/Section3.vue";
import Section4 from "@/components/Section4.vue";
import Section5 from "@/components/Section5.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Main",
  components: {
      About,
      Section2,
      Section3,
      Section4,
      Section5,
      Footer,
    },
  computed:{
    rutasSection3(){
            let rutas=Array();
            for (let i = 1; i <= 8; i++) {
               rutas.push(require("@/assets/img/clients/client-"+i+".png"));
              
            }
            return rutas;
    }, 
    rutasSection5(){
      let rutas5=[
        {
          tipoFiltro:"filter-app",
          ruta:require("@/assets/img/portfolio/portfolio-1.jpg"),
          titulo:"App 1",
          descripcion:"App"
        },
        {
         tipoFiltro:"filter-web",
          ruta:require("@/assets/img/portfolio/portfolio-2.jpg"),
          titulo:"Web 3",
          descripcion:"Web" 
        },
        {
         tipoFiltro:"filter-app",
          ruta:require("@/assets/img/portfolio/portfolio-3.jpg"),
          titulo:"App 2",
          descripcion:"App" 
        },
        {
         tipoFiltro:"filter-card",
          ruta:require("@/assets/img/portfolio/portfolio-4.jpg"),
          titulo:"Card 2",
          descripcion:"Card" 
        },
        {
         tipoFiltro:"filter-web",
          ruta:require("@/assets/img/portfolio/portfolio-5.jpg"),
          titulo:"Web 2",
          descripcion:"Web" 
        },
        {
         tipoFiltro:"filter-app",
          ruta:require("@/assets/img/portfolio/portfolio-6.jpg"),
          titulo:"App 3",
          descripcion:"App" 
        },
        {
         tipoFiltro:"filter-card",
          ruta:require("@/assets/img/portfolio/portfolio-7.jpg"),
          titulo:"Card 1",
          descripcion:"Card" 
        },
        {
         tipoFiltro:"filter-card",
          ruta:require("@/assets/img/portfolio/portfolio-8.jpg"),
          titulo:"Card 3",
          descripcion:"Card" 
        },
        {
         tipoFiltro:"filter-web",
          ruta:require("@/assets/img/portfolio/portfolio-9.jpg"),
          titulo:"Web 3",
          descripcion:"Web" 
        }
      ];
      return rutas5;
    }
    
  }
  
};
</script>

<style>
</style>