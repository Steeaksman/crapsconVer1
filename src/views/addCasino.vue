<template>
   <h1>addCasino</h1>
    <div>
      <form @submit.prevent="handleSubmit">

  <div class="field">
  <label for="casino" class="label">Casino</label>
  <div class="control">
    <input class="input" type="text" name = "casino" v-model="casino" placeholder="Text input">
  </div>
  </div>
 
  <div class="field">
  <label for="city"  class="label">City</label>
  <div class="control">
    <input class="input" type="text" name = "city" v-model="city" placeholder="Text input">
  </div>
  </div>
  <div class= "field">
  <label for= "country" class="label">Country</label>
  <div class="control">
    <input class="input" type="text" name = "country" v-model="country" placeholder="Country">
  </div>
  </div>
  

  <div class="field">
  <label for = "state" class="label">State</label>
  <div class="control">
    <input class="input" type="text" name = "state" v-model="state" placeholder="State">
  </div>
  </div>
  
  <div class="field">
  <label for = 'website' class="label">Website</label>
  <div class="control">
    <input class="input" type="text" name = "website" v-model="website"  placeholder="Website">
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

const casino = ref('')
 const casino_type = ref('')
const city = ref('')
const state = ref('')
const country = ref('')
const website = ref('')

const handleSubmit = async () => {
    const colRef =  collection(db, 'casinos')

    await addDoc(colRef, {
        casino: casino.value,
        // casino_type: casino_type.value
        city: city.value,
        state: state.value,
        country: country.value,
        website: website.value
    })

    //reset the form
        casino.value = ''
        casino_type.value = ''
        city.value = ''
        state.value = ''
        country.value = ''
        website.value = ''

       

}



</script>

<style lang="scss" scoped>

</style>