var fs = require('fs'),
    path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

var app = express();
var port = 7070;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

var fileRouter = express.Router();

fileRouter.route('/allFiles')
    .get(function(req, res) {
        var formatedFiles = dirTree('E:\\Work\\MSSB\\Test Folder')
        res.json(formatedFiles);
    })

    .post(function(req,res){
        var path = req.body.path;
        console.log(path);
       // var formattedPath = path.replace(/\\/g, "\\\\");
        //console.log(formattedPath);
        var formatedFiles = dirTree(path)
        res.json(formatedFiles);
})

fileRouter.route('/readFile')
    .get(function(req, res) {
        var contents = fs.readFileSync('E:\\Work\\MSSB\\Test Folder\\Test subFolder\\a.json', 'utf8');
        console.log(contents);
        res.json(contents);
    })

    .post(function(req,res){
        var files = req.body;
        var fileContents = [];
        for(var i=0;i<files.length; i++){
            fileContents.push(readFile(files[i].path));
        }
        res.json(fileContents)
    })
    

function dirTree(filename) {
    var stats = fs.lstatSync(filename),
        info = {
            path: filename,
            name: path.basename(filename)
        };

    if (stats.isDirectory()) {
        info.type = "folder";
        info.children = fs.readdirSync(filename).map(function(child) {
            return dirTree(filename + '/' + child);
        });
    } else {
        info.type = "file";
    }
    return info;
}

function readFile(fileName){
    var contents = JSON.parse(fs.readFileSync(fileName, 'utf8'));
    return (contents);    
}

app.use('/api', fileRouter);


app.listen(port, function() {
    console.log('Running on port no:' + port);
});