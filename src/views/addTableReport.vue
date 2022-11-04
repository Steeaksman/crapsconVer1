<template>
    <h1>addTrip Report</h1>
     <div>
       <form @submit.prevent="handleSubmit">
 
   <div class="field">
   <label for="casinoName" class="label">CasinoName</label>
   <div class="control">
     <input class="input" type="text" name = "casinoName" v-model="casinoName" placeholder="Text input">
   </div>
   </div>
  
   <div class="field">
   <label for="city"  class="label">City</label>
   <div class="control">
     <input class="input" type="text" name = "city" v-model="city" placeholder="Text input">
   </div>
   </div>
   <!-- <div class= "field">
   <label for= "country" class="label">Country</label>
   <div class="control">
     <input class="input" type="text" name = "country" v-model="country" placeholder="Country">
   </div>
   </div> -->
   
 
   <div class="field">
   <label for = "state" class="label">State</label>
   <div class="control">
     <input class="input" type="text" name = "state" v-model="state" placeholder="State">
   </div>
   </div>
   
   <div class="field">
   <label for = 'reportersName' class="label">Reporters Name</label>
   <div class="control">
     <input class="input" type="text" name = "reportersName" v-model="reportersName"  placeholder="Reporters Name">
   </div>
   </div>

   <div class="field">
   <label for = 'reportDate' class="label">Trip Date</label>
   <div class="control">
     <input class="input" type="text" name = "reportDate" v-model="reportDate"  placeholder="TripDate">
   </div>
   </div>

   <div class="field">
   <label for = 'yadayada' class="label">ReportText</label>
   <div class="control">
     <textarea class="textarea" type="text" name = "yadayada" v-model="yadayada"  placeholder="ReportText"></textarea>
   </div>
   </div>






   <div class="control">
     <button class="button is-link">Submit</button>
   </div>
 
 
 
      
       
       
       </form>  
     </div>
 </template>
 
 <script setup>
 import { ref } from 'vue';
 //firebase imports
 import { db } from '../firebase/config'
 import { addDoc, collection } from 'firebase/firestore'
 
 const casinoName = ref('')
  const city = ref('')
 const state = ref('')
 const reportersName = ref('')
 const reportDate = ref('')
 const yadayada = ref('')
 
 const handleSubmit = async () => {
     const colRef =  collection(db, 'tableReports')
 
     await addDoc(colRef, {
         casinoName: casinoName.value,
         city: city.value,
         state: state.value,
         reportersName: reportersName.value,
         reportDate: reportDate.value,
         yadayada: yadayada.value
     })
 
     //reset the form
     casinoName.value = ''
         city.value = ''
         state.value = ''
         reportersName.value = ''
         reportDate.value = ''
         yadayada.value = ''
 
        
 
 }
 
 
 
 </script>
 
 <style lang="scss" scoped>
 
 </style>