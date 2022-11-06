<template>
  <div class="container is-max-desktop px-2 py-4 ">
    <div class="casinos">
      
    <div
     v-for="brain in scottsBrain"
    :key="scottsBrain.id"
    class="card mb-4"
    > 
    
  
  <div class="card-content">
    <div class="content is-size-4">
       {{brain.yada}} 
    </div>
  </div>
  <footer class="card-footer">
    <!-- <a href="#" class="card-footer-item">Reviews</a>
    <a href="#" class="card-footer-item">Trip Reports</a>
    <a href="#" class="card-footer-item">Casino Details</a> -->
  </footer>
  </div>
    </div>
    </div>
  </template>
  
  <script setup>
  import getCollection from '@/composables/getCollection'

const { documents: scottsBrain } = getCollection('scottsBrain')
  </script>
  
  <style lang="scss" scoped>
  
  </style> 