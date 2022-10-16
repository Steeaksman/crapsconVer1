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
     {{casino.content}} 
     
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
import {ref} from 'vue'
const casinos = ref([
 {
  id: 'id1',
  content: 'Wind Creek Casino & Hotel Atmore     Alabama'
},
{
  id: 'id2',
  content: 'Bronco Billys Casino     Horseshit,Idaho'
},
{
  id: 'id3',
  content: 'Indian Casino  Custers Last Stand, Wyoming. '
}
])
</script>

<style lang="scss" scoped>

</style> 