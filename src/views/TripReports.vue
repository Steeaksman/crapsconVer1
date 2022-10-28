<template>
    <div class="casinos">
      
    <div
     v-for="tripReport in tripReports"
    :key="tripReport.id"
    class="card mb-4"
    > 
    
  
  <div class="card-content">
    <div class="content is-size-4">
       {{tripReport.reportText}} 
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

const { documents: tripReports } = getCollection('tripReports')
  </script>
  
  <style lang="scss" scoped>
  
  </style> 