<template>
  <div class="casinos">
  <!-- this is the  v-for loop div   -->
  <div
   v-for="casino in casinos"
  :key="casino.id"
  class="card mb-4"
  > 
  

<div class="card-content">
<!-- Here i add the data that is displayed  in the card. 
It has the class of content and is sourced from the casinos array ref -->
  <div class="content is-size-4">
     {{casino.casino}} 
     {{casino.city}} 
     {{casino.state}} 
     {{casino.casino_type}} 
     
  </div>
</div>
<footer class="card-footer">
   <a href="#" class="card-footer-item">Table Reports</a>
  <a href="#" class="card-footer-item">Trip Reports</a>
  <a href="#" class="card-footer-item">Casino Web Site</a> 
</footer>
</div>
  </div>
</template>


<script setup>
import getCollection from '@/composables/getCollection'

const { documents: casinos } = getCollection('casinos')





</script>

<style lang="scss" scoped>

</style>