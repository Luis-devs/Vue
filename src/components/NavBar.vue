<!-- eslint-disable prettier/prettier -->
<template>
     <!-- ======= Header ======= -->
   
    <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center justify-content-between">

            <a href="/" class="logo"><img src="../assets/img/logo.png" alt="" class="img-fluid"></a>
            <!-- Uncomment below if you prefer to use text as a logo -->
            <!-- <h1 class="logo"><a href="index.html">Butterfly</a></h1> -->

            <nav id="navbar" class="navbar">
                <ul>
                    <li><a class="nav-link scrollto active" href="/">Home</a></li>
                    <li><a class="nav-link scrollto" href="#about">About</a></li>
                    <li><a class="nav-link scrollto" href="#services">Services</a></li>
                    <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                    <li><a class="nav-link scrollto" href="#team">Team</a></li>
                    <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
                        <ul>
                            <li><a href="#">Drop Down 1</a></li>
                            <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                                <ul>
                                    <li><a href="#">Deep Drop Down 1</a></li>
                                    <li><a href="#">Deep Drop Down 2</a></li>
                                    <li><a href="#">Deep Drop Down 3</a></li>
                                    <li><a href="#">Deep Drop Down 4</a></li>
                                    <li><a href="#">Deep Drop Down 5</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Drop Down 2</a></li>
                            <li><a href="#">Drop Down 3</a></li>
                            <li><a href="#">Drop Down 4</a></li>
                        </ul>
                    </li>
                    <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle" @click="desplegar($event)"></i>
            </nav>
            <!-- .navbar -->

        </div>
    </header>
    <!-- End Header -->
 
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
    name:"NavBar",
    methods:{
        desplegar(e){
            e.preventDefault();
          
            
 
            var navbar = document.querySelector('#navbar');
            //console.log(navbar);
            if (navbar!=null) {
                if (navbar.classList.contains('navbar-mobile')) {
                    console.log("1")
                    navbar.classList.remove('navbar-mobile')
                    
                    li.classList.remove('bi-x')
                    //let navbarToggle = document.querySelector('.mobile-nav-toggle')
                    //console.log("navtoggles: "+navbarToggle);
                    //navbarToggle.classList.toggle('bi-list')
                    //navbarToggle.classList.toggle('bi-x')
                }
                else{
                console.log("2")
                navbar.classList.toggle('navbar-mobile')
                 li= document.querySelector('.bi.bi-list');
                li.classList.toggle('bi-list')
                li.classList.toggle('bi-x')
            }
            }
            else{
                console.log("2")
                navbar.classList.toggle('navbar-mobile')
                var li= document.querySelector('.bi.bi-list');
                li.classList.toggle('bi-list')
                li.classList.toggle('bi-x')
            }
        }
    }
};
</script>

<style>

</style>