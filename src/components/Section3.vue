<!-- eslint-disable prettier/prettier -->
<template>
  <section id="clients" class="clients">
    <div class="container">
        <div class="row no-gutters clients-wrap clearfix wow fadeInUp">
            <div class="col-lg-3 col-md-4 col-6" v-for="i in rutas" :key="i">
                 <div class="client-logo">
                    <img :src="i" class="img-fluid" alt="">
                 </div>
            </div>

            <!--<div class="col-lg-3 col-md-4 col-6">
                <div class="client-logo">
                    <img src="../assets/img/clients/client-2.png" class="img-fluid" alt="">
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-6">
                <div class="client-logo">
                    <img src="../assets/img/clients/client-3.png" class="img-fluid" alt="">
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-6">
                <div class="client-logo">
                    <img src="../assets/img/clients/client-4.png" class="img-fluid" alt="">
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-6">
                <div class="client-logo">
                    <img src="../assets/img/clients/client-5.png" class="img-fluid" alt="">
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-6">
                <div class="client-logo">
                    <img src="../assets/img/clients/client-6.png" class="img-fluid" alt="">
                </div>
            </div>

            <div class="col-lg-3 col-md-4 col-6">
                <div class="client-logo">
                    <img src="../assets/img/clients/client-7.png" class="img-fluid" alt="">
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
                <div class="client-logo">
                    <img src="../assets/img/clients/client-8.png" class="img-fluid" alt="">
                </div>
            </div>-->
        </div>
  </div>
  </section>
</template>
<!-- eslint-disable prettier/prettier -->
<script>

export default {
    name:"Section3",
    components:{},
    props:{
        rutas:Array,
    },
    methods:{
        devolver(){
          
        }
    }

};
</script>

<style>

</style>