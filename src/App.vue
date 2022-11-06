
<template>
<!-- 1st I instantiate the Navbar component that I imported  in the script section
The NavBar component is placed at the top of the page
inside the template tag -->
  <NavBar />
<!-- ---------------------------------------------------------- -->

  <!-- I now setup a container div to contain the pages using
  a Bulma container class -->
 
  <!-- <div class="container is-max-desktop px-2 py-4 "> -->

    <!-- inside of this div I place the Routerview component that
    determines where our pages are displayed -->

    <RouterView />

  <!-- </div> -->
  
  </template>
  
  
  <script setup>
    
    import { onMounted } from 'vue'
    import NavBar from '@/components/Layout/NavBar.vue'
    

    onMounted( () => {

    })
  </script>
    
  
  <style>
  
  @import "bulma/css/bulma.min.css";
  
  </style>
  