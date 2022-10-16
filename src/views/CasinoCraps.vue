<template>
    <div class="notes">
    <div
    v-for="note in storeNotes.notes"
    :key="note.id"
    class="card mb-4"
    >
       
  
  <div class="card-content">
    <div class="content is-size-4">
       {{note.content}} 

    </div>
  </div>
  <footer class="card-footer">
    <!-- <a href="#" class="card-footer-item">Reviews</a> -->
    <a href="#" class="card-footer-item">Trip Reports</a>
    <a href="#" class="card-footer-item">Table Reports</a>
  </footer>
</div>
    </div>
</template>

<script setup>
 /* import {ref} from 'vue'
 import {useStoreNotes} from '@/stores/storeNotes'
 const storeNotes = useStoreNotes() */
 
</script>

<style lang="scss" scoped>

</style>