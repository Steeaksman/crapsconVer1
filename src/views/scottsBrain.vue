<template>
  <div class="container is-max-desktop px-2 py-4 ">
    <div class="casinos">

      <div class="columns is-centered">
                <div class="column is-half">
                    <h2 class="is-size-2 is-family-secondary has-text-centered">Musings from the Serious Craps Players Brain of Scott Spooner </h2>
                    <p class="has-text-centered">
                        Here I give my opinion on all things in the Craps world.
                    </p>
                </div>
            </div>
      
    <div
     v-for="brain in scottsBrain"
    :key="scottsBrain.id"
    class="card mb-4"
    > 
    <div class="card-header">
    <p class="card-header-title">
      {{brain.date}}
    </p>
    </div>
    
  
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