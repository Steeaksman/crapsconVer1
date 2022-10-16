
import { defineStore } from 'pinia'
import { db } from "@/js/firebase"
//defineStore is where you create the store,
// set the unique name for the store (casinolist)
//and create an object that holds the state

//to export the file so it can be used on other pages we
//store the results of the defineStore function in a Constant and export it

export const useCasinoList = defineStore('casinoList', {
    state: () => ({      
                casinos: [
                /*  {
                       id: 'id1',
                      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa commodi sint ut ullam culpa nulla molestiae sunt quia qui maxime.'
                     },
                     {
                       id: 'id2',
                       content: 'This is a shorter note! Woo!'
                     }  */
                  ]
                                
              }),

              getters: {
                
              },
              actions: {
                
              },
            })