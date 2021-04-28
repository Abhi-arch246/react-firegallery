import React from 'react'
import UseFirestore from '../hooks/UseFirestore'

function ImagesList() {
    const { docs } = UseFirestore('images')
    console.log(docs);
    return (
        <div>
            {docs && docs.map(doc => (
                <div className="single-img row d-inline p-1" key={doc.id}>
                    <img className="col-md-4 rounded" src={doc.url} alt="img" width="80" height="350" />

                </div>

            ))}
        </div>
    )
}

export default ImagesList
