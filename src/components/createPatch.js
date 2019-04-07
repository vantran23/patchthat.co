import React, { Component } from 'react';
import axios from 'axios'

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
        axios.postt('');
    }


    render() {
        return (
            <div className="createPatch">
            <input type="file" onChange={this.fileSelectedHandler}/>
            <button onClick={this.fileUploadHandler}>Upload Artwork</button>
            </div>

        )
    }
}

export default createPatch;