
import { defineStore } from 'pinia'
//import { db } from "@/js/firebase"
//defineStore is where you create the store,
// set the unique name for the store (casinolist)
//and create an object that holds the state

//to export the file so it can be used on other pages we
//store the results of the defineStore function in a Constant and export it
//the useCasinoList const is
export const useCasinoList = defineStore('casinoList', {
    state: () => ({      
                casinos: [
                  {
                    id: 'id1',
                    content: 'Wind Creek Casino & Hotel Atmore     Alabama'
                  },
                  {
                    id: 'id2',
                    content: 'Bronco Billys Casino     Horseshit,Idaho'
                  },
                  {
                    id: 'id3',
                    content: 'Indian Casino  Custers Last Stand, Wyoming. '
                  }
                  ],
                name: 'Donaldo'                
              }),

              getters: {
                
              },
              actions: {
               getCasinos() {
                console.log('casinos')
               } 
              },
            })