
import { defineStore } from 'pinia'
import { db } from "@/js/firebase"

export const useCasinoStuff = defineStore('casinoStuff', {
    state: () => ({
        name: 'donny'
        town: 'Sherman Oaks'

    }),
    getters: {

   //getters go here

    },

actions: {

//actions go here

}

}

});  