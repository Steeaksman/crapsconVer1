<template>
  
  <div class="casinos">
    <h1>All Casinos</h1>  
  <div

   v-for="casino in casinos"
  :key="casino.id"
  class="card mb-4"
  > 
  

<div class="card-content">
  <div class="content is-size-4">
     {{casinos.content}} 
jnjnjnjknnknkjk
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
import {ref} from 'vue'
const casinos = ref([
 {
  id: 'id1',
  content: 'We were attacked by wild dogs at the entrance. Stickman was intoxicated! We won every throw and bankrupted the casino!'
},
{
  id: 'id2',
  content: 'Doggie of woggie'
},
{
  id: 'id3',
  content: 'This is an Indian Casino with lots of craps tables. Live enactment of Custers Last Stand. Several customers were wounded after being shot by arrows!'
}
])
</script>

<style lang="scss" scoped>

</style> 