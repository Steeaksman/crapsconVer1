import { ref, watchEffect} from 'vue'

//firebase imports
import {db} from '../firebase/config'
//collection is collection name. onSnapshot is used to setup a 
// realtime listener to a specific collection instead of getDocs function.
import {collection, onSnapshot} from 'firebase/firestore'
import { createAssignmentExpression } from '@vue/compiler-core'

const getCollection = (c) => {
    const documents = ref(null)

    //collection reference
    let colRef = collection(db, c)

const unsub = onSnapshot(colRef, snapshot => {
 let results = []
 snapshot.docs.forEach(doc => {
    results.push({ ...doc.data(), id: doc.id})
 }) 
 //update values of the const documents = ref(null)
 documents.value = results 
})  

watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
})

return {documents}
}

export default getCollection