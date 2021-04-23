import { useState, useEffect } from 'react'
import { projectStorage, projectFire, timestamp } from '../firebase/Config'

function UseStorage(file) {
    const [progress, setProgress] = useState(0)
    const [err, setErr] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFire.collection('images')
        storageRef.put(file).on('state_changed', (snap) => {
            let percent = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percent)
        }, (err) => {
            setErr(err)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            const createdAt = timestamp()
            collectionRef.add({ url, createdAt })
            setUrl(url)
        })
    }, [file])
    return (
        { progress, url, err }
    )
}

export default UseStorage
