<template>
  <div class="container is-max-desktop px-2 py-4 has-background-white-ter ">
    <div class="casinos">


     <div class="columns is-centered">
                <div class="column is-half">
                    <h2 class="is-size-2 is-family-secondary has-text-centered">Welcome to Trip Reports </h2>
                    <p class="has-text-centered">
                      Read about players experience on casino trips
                    </p>
                </div>
            </div> 
    <div
     v-for="tripReport in tripReports"
    :key="tripReport.id"
    class="card mb-4"
    > 
    

   
  <div class="card-header">
    <p class="card-header-title">
      {{tripReport.casinoName}}
      {{tripReport.city}}
      {{tripReport.state}}
      {{tripReport.tripDate}}
    </p>
    </div>
  
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
  </div>
  </template>
  
  <script setup>
  import getCollection from '@/composables/getCollection'

const { documents: tripReports } = getCollection('tripReports')
  </script>
  
  <style lang="scss" scoped>
  
  </style> 