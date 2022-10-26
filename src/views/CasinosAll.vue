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
import {ref} from 'vue'

// import mount
import {onMounted} from 'vue'


//Store Stuff
//import the store-------------------------------
import {useCasinoList} from '../stores/CasinoStore'

import {db} from '../firebase/config'
import { collection, getDocs } from 'firebase/firestore'


//invoke and return the store-----------------------------
const casinoStore = useCasinoList()



//------------------------------------------------------

//Set a ref called casinos to store the fetched data in an array. 
//When page first loads this array is empty.It is populated after
//data is parsed from the database with the casinos.value = docs command.

const casinos = ref([])

//The collection function calls the firebase database and collection used
//when fetching the data.Save the function as a ref const called colRef.

const colRef = collection(db, 'casinos')

//now we can fetch documents from the collection using the colRef const.
//We use the getDocs firebase function passing in the colRef const as guide to 
//db name and collection name.

getDocs(colRef)
.then(snapshot => {
  let docs = []
  snapshot.docs.forEach(doc => {
   docs.push({ ...doc.data(), id:doc.id})   
  })
  //set the contents of the casinos array which was empty when 
  //created to the contents of the  docs variable.

  casinos.value = docs
})

onMounted(() => {
  console.log("Hotdamm!!I got this mounted hook thing down!!!");
})

</script>

<style lang="scss" scoped>

</style>