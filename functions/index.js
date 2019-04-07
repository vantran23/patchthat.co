const functions = require('firebase-functions');
const os = require("os");
const cors = require('cors')({ origin: true });
const Busboy = require('busboy');
const fs = require('fs');
const admin = require("firebase-admin");

let config = {
    apiKey: "AIzaSyAjzQWwqBnIpnQXxIcpcU5KY05mrLGH5ls",
    authDomain: "patch-that.firebaseapp.com",
    databaseURL: "https://patch-that.firebaseio.com",
    projectId: "patch-that",
    storageBucket: "patch-that.appspot.com",
    messagingSenderId: "989133513256"
  };

admin.initializeApp(config);


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.uploadFile = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      if (req.method !== "POST") {
        return res.status(500).json({
          message: "Image not allowed"
        });
      }
      const busboy = new Busboy({ headers: req.headers });
      let uploadData = {}
  
      busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
        const filepath = path.join(os.tmpdir(), filename);
        uploadData = { file: filepath, type: mimetype };
        file.pipe(fs.createWriteStream(filepath));
      });
  
      busboy.on("finish", () => {
        const bucket = admin.storage().bucket(); 
        bucket.upload(uploadData.file, {
            uploadType: "media",
            metadata: {
              metadata: {
                contentType: uploadData.type
              }
            }
          })
          .then(() => {
            res.status(200).json({
              message: "Image Uploaded"
            });
          })
          .catch(err => {
            res.status(500).json({
              error: err
            });
          });
      });
      req.pipe(busboy);  
    });
  });
  