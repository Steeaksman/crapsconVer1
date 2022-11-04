<template>
    <div class="casinos">
      
    <div
     v-for="tableReport in tableReports"
    :key="tableReport.id"
    class="card mb-4"
    > 
    
  
  <div class="card-content">
    <div class="content is-size-4">
       {{tableReport.yadayada}} 
    </div>
  </div>
  <footer class="card-footer">
    <!-- <a href="#" class="card-footer-item">Reviews</a>
    <a href="#" class="card-footer-item">Trip Reports</a>
    <a href="#" class="card-footer-item">Casino Details</a> -->
  </footer>
  </div>
    </div>
  </template>
  
  <script setup>
  import getCollection from '@/composables/getCollection'

const { documents: tableReports } = getCollection('tableReports')
  </script>
  
  <style lang="scss" scoped>
  
  </style> 