/* eslint-disable prettier/prettier */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//import "bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/css/style.css";
/*
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/vendor/glightbox/js/glightbox.js";
import "./assets/css/style.css";
import "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "./assets/vendor/glightbox/js/glightbox.min.js";
import "./assets/js/main.js";*/

/*
import "jquery";
import "popper.js";

//import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";

import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/style.css";
import "./assets/js/main.js"; */
Vue.config.productionTip = false;
new Vue({

    router,
    render: (h) => h(App),

}).$mount("#app");