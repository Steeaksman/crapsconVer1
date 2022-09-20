<template>
    <nav
    class="navbar is-link"
    aria-label="main navigation"
    role="navigation"
    >
   <div class="container is-max-desktop">
   <div class="navbar-brand">
   <a class="navbar-item" href="https://bulma.io">
     <img src="/src/assets/dcrap.jpg" width="60" height="128">
     Craps Connection
   </a>

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

   <RouterLink to="/stats" class="navbar-item">  
   Search for Casinos
   </RouterLink>

   <RouterLink to="/notes" class="navbar-item">  
   Trip Reports
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


