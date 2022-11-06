<template>
    <h1>addscottsBrain</h1>
     <div>
       <form @submit.prevent="handleSubmit">
 
   <div class="field">
   <label for="subject" class="label">Headline</label>
   <div class="control">
     <input class="input" type="text" name = "subject" v-model="subject" placeholder="Text input">
   </div>
   </div>
  

   <div class="field">
   <label for = 'date' class="label">Post Date</label>
   <div class="control">
     <input class="input" type="text" name = "date" v-model="date"  placeholder="Post date">
   </div>
   </div>

   <div class="field">
   <label for = 'yada' class="label">Post Text</label>
   <div class="control">
     <textarea class="textarea" type="text" name = "yada" v-model="yada"  placeholder="Post Text"></textarea>
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
 
 
 const subject = ref('')
 const date = ref('')
 const yada = ref('')
 
 const handleSubmit = async () => {
     const colRef =  collection(db, 'scottsBrain')
 
     await addDoc(colRef, {
         subject: subject.value,
         date: date.value,
         yada: yada.value
     })
 
     //reset the form
         subject.value = ''
         date.value = ''
         yada.value = ''
         
 
        
 
 }
 
 
 
 </script>
 
 <style lang="scss" scoped>
 
 </style>