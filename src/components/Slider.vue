<!-- eslint-disable prettier/prettier -->
<template>
    <div class="col-lg-8">
        <div class="portfolio-details-slider swiper">
            <div class="swiper-wrapper align-items-center">
                <div class="swiper-slide" v-for="i in img" :key="i">
                    <img :src="i" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
    name:"Slider",
    props:{
        img:Array,
    }

};
</script>

<style>

</style>