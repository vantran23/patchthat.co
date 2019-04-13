import React, { Component } from 'react';
import { Box } from "gestalt";
import * as firebase from 'firebase';
// import firebase from '../firebase';
import ImageService from '../services/image';

class createPatch extends Component {

    state={
        savedImgURL: '',
    }


    saveImage = (url) => {
        const date = Date();
    
        ImageService.saveImage(url, date);
      }
    
      handleFileInput = (e) => {
          
        // const firstFile = e.target.files[0];
        console.log("here",  e.target.files[0]);
        if(e.target.files.length){
          console.log("there is a file")
          if (e.target.files[0]['name']){
            // DO YOUR FIREBASE LOGIC HERE
            console.log(e.target.files[0]);
            const firstFile = e.target.files[0];
            const root = firebase.storage().ref()
          const newImage = root.child(firstFile.name);
    
        newImage.put(firstFile)
          .then((snapshot) => {
            return snapshot.ref.getDownloadURL()
          })
          .then((url) => {
            console.log('GIVE ME URL', url)
            this.saveImage(url);
            this.setState({
                savedImgURL: url
            })
          })
        .catch((err) => {
          console.log(err);
        })
          }
        }
        // const root = firebase.storage().ref()
        // const newImage = root.child(firstFile.name);
    
        // newImage.put(firstFile)
        //   .then((snapshot) => {
        //     return snapshot.ref.getDownloadURL()
        //   })
        //   .then((url) => {
        //     console.log('GIVE ME URL', url)
        //     this.saveImage(url);
        //     this.setState({
        //         savedImgURL: url
        //     })
        //   })
        // .catch((err) => {
        //   console.log(err);
        // })
        
      }
    
      render() {
    
        return (
          <div className='container'>
            <div className="input-group mb-3">
              <div className="custom-file">
                <input type="file" className="custom-file-input" onClick={this.handleFileInput} />
                <label className="custom-file-label">Upload Image</label>
              </div>
            </div>
          </div>
        );
      }
    }

export default createPatch;