const Movie = require("../models/movie");
const express = require("express");
const router = express.Router();

router.route("/movies")
      .get((req, res) =>{
      Movie.find({},(err, movies) => {
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

    });


    router.route("/movies/:id")
       .get((req, res) => {
         //get a movie by its id
         Movie.findOne({_id : req.params.id},(err, movie)=>{
           if(err){
              return res.send(err);
          }
             res.json(movie);
        });
      })
       .post((req,res)=>{
         //update a movie by id
       Movie.findOne({_id : req.params.id},(err, movie) => {
        if(err){
         return res.send(err);
        }

      for(let prop in req.body){
        movie[prop] = req.body[prop];
      }

         movie.save(err => {
           if(err){
            return res.send(err);
            }
          });
           res.json("Movie updated");

        });
      })
       .delete((req,res) => {
        Movie.findOne({_id : req.params.id},(err, movie) => {
         if(err){
          return  res.send(err);
          }

       movie.deleteOne((err, trash)=>{
           if(err){
            return res.send(err);
           }
           res.json({message : "Movie deleted!"});
          });

        });

      });



module.exports = router;
