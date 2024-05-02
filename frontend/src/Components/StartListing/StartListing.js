import {  useEffect, useState } from "react";
import axios from 'axios';
import "./StartListing.css";


function StartListing() {
    const [file, setFile] = useState() 
    const handleUpload = (e) => {
        console.log(file);
        const formdata = new FormData()
        formdata.append('file', file)
        axios.post('http://localhost:5000/upload', formdata)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:5000/getImage')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <input type="file" onChange={e => setFile(e.target.files[0])}/>
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default StartListing;