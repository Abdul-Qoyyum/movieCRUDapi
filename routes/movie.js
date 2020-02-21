const Movie = require("../models/movie");
const express = require("express");
const router = express.Router();

router.route("/movies")
      .get((req, res) =>{
      Movie.find((err, movies) => {
       if(err){
         return res.send(err);
       }

       res.json(movies);

     });

    })
    .post((req, res) => {
     let movies =  new Movie(req.body);
     movies.save(err => { 
       if(err){
        return res.send(err);
          }
       });

     res.send({message : "Movie added."});
     
    })
    
module.exports = router;
