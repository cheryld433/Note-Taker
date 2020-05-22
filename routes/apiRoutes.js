const fs = require("fs");
const savedNote = require("../db/db.json");

module.exports = function(app) {

    function writeToDBase(notes){
        
        notes = JSON.stringify(notes);
        console.log (notes);
        fs.writeFileSync("./db/db.json", notes, function(err){
            if (err) {
                return console.log(err);
            }
        });

        app.get("/api/notes", function(req, res){
            res.json(savedNote);
        });

        app.post("/api/notes", function(req, res){

            if (savedNote.length == 0){
                req.body.id = "0";
            } else{
                req.body.id = JSON.stringify(JSON.parse(savedNote[savedNote.length - 1].id) + 1);
            }
            
            console.log("id:" + req.body.id);
    
            savedNote.push(req.body);
            console.log(savedNote);
            res.json(req.body);
        });
    
    }



}