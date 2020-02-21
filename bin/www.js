const app = require("../app");

const db = new Datastore({
   filename : '../collections/movies.db',
   autoload : true,
   timestampData : true
  });

app.set("port", process.env.PORT || 8000);
app.listen(app.get('port'),()=>{
console.log(`App is listening on port ${server.address().port} `);
});
