<template>
    <div class="casinos">
    <!-- this is the  v-for loop div   -->
    <div
     v-for="casino in casinos"
    :key="doc.id"
    class="card mb-4"
    > 
    
  
  <div class="card-content">
  <!-- Here i add the data that is displayed  in the card. 
  It has the class of content and is sourced from the casinos array ref -->
    <div class="content is-size-4">
       <!-- {{docs}} 
       {{casinos.city}}  -->
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

  import {db} from '../firebase/config'
  import {collection,getDocs} from 'firebase/firestore'

  
 


  const casinos = ref([])

  const colRef = collection (db, 'casinos')

getDocs(colRef)
.then(snapshot => {
    let casinos = []
    snapshot.docs.forEach(doc => {
        casinos.push({ ...doc.data(), id: doc.id})
    })
    casinos.value = casinos
    console.log(casinos)
})

  </script>
  
  <style lang="scss" scoped>
  
  </style> 