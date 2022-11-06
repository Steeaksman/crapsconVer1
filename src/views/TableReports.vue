<template>
  <div class="container is-max-desktop px-2 py-4 ">
    <div class="casinos">
      

      <div class="columns is-centered">
                <div class="column is-half">
                    <h2 class="is-size-2 is-family-secondary has-text-centered">Welcome to Table Reports </h2>
                    <p class="has-text-centered">
                      Read about table conditions at various casinos
                    </p>
                </div>
            </div> 
    <div></div>
    <div
     v-for="tableReport in tableReports"
    :key="tableReport.id"
    class="card mb-4"
    > 

    <div class="card-header">
    <p class="card-header-title">
      {{tableReport.casinoName}}
      {{tableReport.city}}
      {{tableReport.state}}
      {{tableReport.reportDate}}
    </p>
    </div>
    
  
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
  </div>
  </template>
  
  <script setup>
  import getCollection from '@/composables/getCollection'

const { documents: tableReports } = getCollection('tableReports')
  </script>
  
  <style lang="scss" scoped>
  
  </style> 