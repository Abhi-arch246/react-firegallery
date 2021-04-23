import React, { useState } from 'react'
import Progress from './Progress'
function Form() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];

    const handleChange = (e) => {
        let data = e.target.files[0]
        if (data && types.includes(data.type)) {
            setFile(data)
            setError('')
        }
        else {
            setFile(null)
            setError('Please check the file type only PNG or JPEG are accepted')
        }
    }
    return (
        <div className="d-flex justify-content-center">
            <div className="col-md-8 p-3 mt-3">
                <input className="form-control form-control-lg" type="file" onChange={handleChange} />


                {error && <div className="text-danger">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <Progress file={file} setFile={setFile} />}
            </div>


        </div>
    )
}

export default Form
