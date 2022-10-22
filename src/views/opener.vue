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
//when page first loads this array is empty
const casinos = ref([])

const colRef = collection(db, 'casinos')

getDocs(colRef)
  .then(snapshot => {
    let docs = []
    snapshot.docs.forEach(doc => {
     docs.push({ ...doc.data(), id:doc.id})   
    })
    casinos.value = docs
  })

  onMounted(() => {
    console.log("Hotdamm!!I got this mounted hook thing down!!!");
})

</script>

<style lang="scss" scoped>

</style>