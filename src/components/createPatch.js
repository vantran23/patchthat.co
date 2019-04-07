import React, { Component } from 'react';
import { Box } from "gestalt";
import axios from 'axios';

class createPatch extends Component {
    state = {
        selectedFile: null
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        axios.post('https://us-central1-patch-that.cloudfunctions.net/uploadFile');
    }


    render() {
        return (
        <Box>
            <div className="createPatch">
            <input type="file" onChange={this.fileSelectedHandler}/>
            <button onClick={this.fileUploadHandler}>Upload Artwork</button>
            </div>
        </Box>

        )
    }
}

export default createPatch;