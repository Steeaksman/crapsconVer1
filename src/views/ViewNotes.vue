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
    <!-- <a href="#" class="card-footer-item">Reviews</a>
    <a href="#" class="card-footer-item">Trip Reports</a>
    <a href="#" class="card-footer-item">Casino Details</a> -->
  </footer>
</div>
    </div>
</template>

<script setup>
 import {ref} from 'vue'
 const notes = ref([
  {
    id: 'id1',
    content: 'We were attacked by wild dogs at the entrance. Stickman was intoxicated! We won every throw and bankrupted the casino!'
  },
  {
    id: 'id2',
    content: 'California Casino, Las Vegas NV Been in Vegas since Wednesday afternoon. Second stay at the California. Cant say enough about this place. It is a no frills not super fancy place, but the customer service is fantastic, they comp really good and the craps play is just as great. They have poor odds 2x and no feature bets $15 min but the dealers are very good and they have a lot of solid rolls there. Many Hawaiians stay here, and they are serious craps players. There is far less riff raff compared to the strip and Fremont Street properties. This place is a craps players dream. Just last night I saw a player (who was aggressive) get is 4 and 10 to table max 2k. Wish I would have been there from the start like he was. It was so fun to watch. This has been a great trip so far. ~ Chris Cooper'
  },
  {
    id: 'id3',
    content: 'This is an Indian Casino with lots of craps tables. Live enactment of Custers Last Stand. Several customers were wounded after being shot by arrows!'
  }
 ])
</script>

<style lang="scss" scoped>

</style>