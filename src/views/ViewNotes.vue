<template>
    <div class="notes">
    <div
    v-for="note in notes"
    :key="note.id"
    class="card mb-4"
    >
       
  
  <div class="card-content">
    <div class="content is-size-4">
       {{note.content}} 

    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Reviews</a>
    <a href="#" class="card-footer-item">Trip Reports</a>
    <a href="#" class="card-footer-item">Casino Details</a>
  </footer>
</div>
    </div>
</template>

<script setup>
 import {ref} from 'vue'
 const notes = ref([
  {
    id: 'id1',
    content: 'Wind Creek Casino & Hotel Atmore, Alabama'
  },
  {
    id: 'id2',
    content: 'They also have a Marriage Chapel where you can marry your 1st cousin'
  },
  {
    id: 'id3',
    content: 'This is an Indian Casino with lots of craps tables. Live enactment of Custers Last Stand.'
  }
 ])
</script>

<style lang="scss" scoped>

</style>