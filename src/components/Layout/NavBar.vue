<template>
    <nav
    class="navbar is-link"
    aria-label="main navigation"
    role="navigation"
    >
   <div class="container is-max-desktop">
   <div class="navbar-brand">
    <router-link to="/"><img src="/src/assets/dcrap.jpg" width="60" height="150"/>
    Craps stuff</router-link>
   

   <a
   @click.prevent="showMobileNav = !showMobileNav"
     class="navbar-burger"
     :class="{ 'is-active' : showMobileNav}"
     aria-expanded="false"
     aria-label="menu"
     data-target="navbarBasicExample"
     role="button"
   >
     <span aria-hidden="true"></span>
     <span aria-hidden="true"></span>
     <span aria-hidden="true"></span>
   </a>
 </div>

 <div
   id="navbarBasicExample"
   class="navbar-menu"
   :class="{ 'is-active' : showMobileNav}"
 >
   <div class="navbar-start">
     
   </div>

   <div class="navbar-end">

    <RouterLink to="/" class="navbar-item">  
   Home
   </RouterLink>

   <RouterLink to="/allcasinos" class="navbar-item">  
   List of Casinos
   </RouterLink>

   <RouterLink to="/tripreports" class="navbar-item">  
   Trip Reports
   </RouterLink>

   <RouterLink to="/TableReports" class="navbar-item">  
   Table Reports
   </RouterLink>

   <RouterLink to="/tester" class="navbar-item">  
   Scotts Remarks
   </RouterLink>
     
   </div>
 </div> 
   </div>  
</nav>
</template>



<script setup>
import { ref } from 'vue'




const showMobileNav = ref(false)

</script>

<style>
@media (max-width: 1023px) {
   .navbar-menu {
       position: absolute;
       left: 0;
       width: 100%;
   }
}
</style>


