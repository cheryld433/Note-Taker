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
    
    }



}