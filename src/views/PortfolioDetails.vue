<!-- eslint-disable prettier/prettier -->
<template>
  <div>
       <NavBar/>
       <main id="main">
          <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

              <div class="d-flex justify-content-between align-items-center">
                  <h2>Portfolio Details</h2>
                  <ol>
                      <li><a href="/">Home</a></li>
                      <li>Portfolio Details</li>
                  </ol>
              </div>
            </div>
          </section>
          <Slider :img="imgs"/>
       </main>
       <Footer/>
       <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Slider from "@/components/Slider.vue";

export default {
    name:"Portfolio",
    components:{
        NavBar,
        Footer,
        Slider,
    },
    computed:{
      imgs(){
       let info=Array();
       info.push(require("@/assets/img/about.jpg"));
       info.push(require("@/assets/img/cta-bg.jpg"));
       return info;
       
      }
    },
    

};
</script>

<style>

</style>