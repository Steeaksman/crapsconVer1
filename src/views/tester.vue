<template>
   <div class= "is-size-2">
   <h1>Scotts Brain</h1>
   </div>

    <div class="casinos">
      
    <div
     v-for="casino in casinos"
    :key="casino.id"
    class="card mb-4"
    > 
    
  
  <div class="card-content">
    <div class="content is-size-4">
        
       {{casino.content}} 
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
    content: 'Wisdom from the Super Gaming Brain  of Scott Spooner'
  },
  {
    id: 'id2',
    content: 'Today I would like to address the isssue of dice setting . . . if you have greasy little kid hands dont do it!! And look out for Robert DeNiro. If he catches you manipulating the dice he will crush your hand with a hammer like he did to the unfortunate cheater in the movie Casino. '
    
  },
  {
    id: 'id3',
    content: 'I do not think that the live enactment of Custers Last Stand is a good marketing idea for an Indian Casino. .. Several customers were wounded after being shot by arrows! Wet T-Shirt contests are a way better and safer idea!'
  },
  {
    id: 'id3',
    content: 'Children should be allowed into Casinos to gamble..I mean its their money from their Birthday or the Tooth Fairy! Give them a chance to double it!! Come on Parents . . Lighten up!!'
  }
  ])
  </script>
  
  <style lang="scss" scoped>
  
  </style> 