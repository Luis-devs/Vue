<!-- eslint-disable prettier/prettier -->
<template>
    <footer id="footer">
        <Subscripcion/>
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 footer-contact">
                        <h3>Butterfly</h3>
                        <p>A108 Adam Street <br>
                            New York, NY 535022<br>
                            United States <br><br>
                            <strong>Phone:</strong> +1 5589 55488 55<br>
                            <strong>Email:</strong> info@example.com<br>
                        </p>
                    </div>
                    <Enlaces/>
                    <EnlacesServicios/>
                    <Redes/>
                </div>
            </div>
        </div>
        
        <div class="container py-4">
            <div class="copyright">
                &copy; Copyright <strong><span>Butterfly</span></strong>. All Rights Reserved
            </div>
            <div class="credits">
                <!-- All the links in the footer should remain intact. -->
                <!-- You can delete the links only if you purchased the pro version. -->
                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/butterfly-free-bootstrap-theme/ -->
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
        </div>
    </footer>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import Subscripcion from "@/components/Subscripcion.vue";
import Enlaces from "@/components/Enlaces.vue";
import EnlacesServicios from "@/components/EnlacesServicios.vue";
import Redes from "@/components/Redes.vue";
export default {
    name:"Footer",
    components:{
        Subscripcion,
        Enlaces,
        EnlacesServicios,
        Redes,
    },
};
</script>

<style>

</style>