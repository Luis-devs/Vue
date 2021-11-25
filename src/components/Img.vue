<!-- eslint-disable prettier/prettier -->
<template>
<div>
    <div class="col-lg-3 col-md-4 col-6">
        <div class="client-logo"  v-for="i in DevolveRutas" :key="i.rt">
            <img :src="i" class="img-fluid" alt="">
        </div>
    </div>
</div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
    name:"Img",
    props:{rutas:Object,
    },
    methods:{
        DevolveRutas(){
           return this.rutas=[{rt:"assets/img/clients/client-1.png"}];
        }
    }

};
</script>

<style>

</style>