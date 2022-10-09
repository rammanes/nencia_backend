const multer = require('multer');

const storage = multer.diskStorage({
    filename: function(req, file, callback) {
        callback(null, Date.now() + file.originalname);
    }
});

// This function is for filtering the files that are being upload to only be the specified types of 'images' & 'pdf'.
const imageFilter = function(req, file, cb) {
    // accept image & pdf files only
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/i)) {
      return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
  };
  
const upload = multer({
    storage
})

module.exports = upload;