<!-- eslint-disable prettier/prettier -->
<template>
    <section id="services" class="services section-bg">
            <div class="container">
                <div class="section-title">
                    <h2>Services</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
                        quidem hic quas.</p>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <BoxIcon ponColor="color: #ff689b;" clase="bi bi-cash-stack" titulo="Lorem Ipsum" descripcion="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" />
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <BoxIcon ponColor="color: #e9bf06;" clase="bi bi-calendar4-week" titulo="Dolor Sitema" descripcion="Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata" />
                    </div>
                     <div class="col-lg-4 col-md-6" data-wow-delay="0.1s">
                        <BoxIcon ponColor="color: #3fcdc7;" clase="bi bi-chat-text" titulo="Sed ut perspiciatis" descripcion="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" />
                    </div>
                    <div class="col-lg-4 col-md-6" data-wow-delay="0.1s">
                        <BoxIcon ponColor="color: #41cf2e;" clase="bi bi-credit-card-2-front" titulo="Magni Dolores" descripcion="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />
                    </div>
                    <div class="col-lg-4 col-md-6" data-wow-delay="0.2s">
                        <BoxIcon ponColor="color: #d6ff22;" clase="bi bi-globe" titulo="Nemo Enim" descripcion="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque" />
                    </div>
                    <div class="col-lg-4 col-md-6" data-wow-delay="0.2s">
                        <BoxIcon ponColor="color: #4680ff;" clase="bi bi-clock" titulo="Eiusmod Tempor" descripcion="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi" />
                    </div>
                </div>
            </div>
    </section>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import BoxIcon from "@/components/BoxIcon.vue";
export default {
    name:"Section4",
    components:{BoxIcon,}

};
</script>

<style>

</style>