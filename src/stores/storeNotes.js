// stores/counter.js
import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
        notes: [
            {
                id: 'id1',
                content: 'Wind Creek Casino & Hotel   My Cousin Vinny, Alabama'
              },
              {
                id: 'id2',
                content: 'Indiana Grand Casino Anderson Indiana'
              },
              {
                id: 'id3',
                content: 'Hard Rock Hotel & Casino Sioux City.'
              }

         ]
        }
  }
  
  
})