<template>
    <div>
opening page
{{casinoStore.name}}
    </div>
</template>

<script setup>

// import mount
import {onMounted} from 'vue'


//Store Stuff
//import the store-------------------------------
import {useCasinoList} from '../stores/CasinoStore'

//invoke and return the store-----------------------------
const casinoStore = useCasinoList()

//------------------------------------------------------



  onMounted(() => {
    console.log("Hotdamm!!I got this mounted hook thing down!!!");
})

</script>

<style lang="scss" scoped>

</style>