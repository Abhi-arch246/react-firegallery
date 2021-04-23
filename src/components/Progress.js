import React, { useEffect } from 'react'
import UseStorage from '../hooks/UseStorage'

function Progress({ file, setFile }) {
    const { url, progress } = UseStorage(file)

    useEffect(() => {
        if (url)
            setFile(null);
    }, [url, setFile])
    return (
        <>
            <div className="progress-bar bg-danger" style={{ width: progress + '%' }}></div>
            <h6 className=" p-2 text-center text-weight-bold">{Math.floor(progress) + '%'}</h6>
        </>


    )
}

export default Progress
