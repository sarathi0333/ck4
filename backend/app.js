const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var fs = require('fs');
var path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './gallery/upload/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({ 
    storage: storage,
    onError: function (err, next) {
        res.json({
            status: "failure",
            data: {
                message: err
            }
        })
        next(err);
    }
 });

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/gallery', express.static(path.join(__dirname, 'gallery')));


//show all images in folder upload to json
app.get('/images', function(req, res) {
    const images = fs.readdirSync('gallery/upload')
    var sorted = [];
    for (let item of images) {
        if(item.split('.').pop() === 'png' 
        || item.split('.').pop() === 'jpg' 
        || item.split('.').pop() === 'jpeg' 
        || item.split('.').pop() === 'svg') {
            let temp = {
                "image" : `/gallery/upload/${item}`,
            }
            sorted.push(temp);
        }
    }
    res.send(sorted);
})

app.post('/upload', upload.single('image'), function(req, res, next) {
    res.send({"image": `/gallery/upload/${req.file.filename}`});
})


app.listen(3000, function() {
    console.log("App running on port 3000");
})