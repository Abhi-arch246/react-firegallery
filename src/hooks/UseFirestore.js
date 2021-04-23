import { useState, useEffect } from 'react'
import { projectFire } from '../firebase/Config'
function UseFirestore(collection) {
    const [docs, setDocs] = useState([])

    useEffect(() => {
        const imgs = projectFire.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id })
                })
                setDocs(documents)
            })
        return () => imgs()
    }, [collection])

    return { docs }
}

export default UseFirestore
