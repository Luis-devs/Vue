<!-- eslint-disable prettier/prettier -->
<template>
  <section id="about" class="about">
            <div class="container">
                <div class="row">
                    <div class="col-xl-5 col-lg-6 d-flex justify-content-center video-box align-items-stretch position-relative">
                        <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox play-btn mb-4"></a>
                    </div>

                    <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                        <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                        <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit
                            aut voluptate.</p>
                     <BoxIcon clase="bx bx-fingerprint" titulo="Lorem Ipsum" descripcion="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" />
                     <BoxIcon clase="bx bx-gift" titulo="Nemo Enim" descripcion="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque" />
                     <BoxIcon clase="bx bx-atom" titulo="Dine Pad" descripcion="Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis" />
                    
                    </div>
                </div>
            </div>
        </section>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import BoxIcon from"@/components/BoxIcon.vue";
export default {
  name: "About",
  components: {
      BoxIcon,
    },
};
</script>

<style>
</style>