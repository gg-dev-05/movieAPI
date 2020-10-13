var express = require("express");
const axios = require('axios').default;

var app = express();
app.set("view engine", "ejs");

// Make a request for a user with a given ID


app.get("/", function(req, res){
    res.render("search");
})

app.get("/results", function (req, res) {
    var search = req.query.search;
    console.log("search is " + search);
    var url = `http://www.omdbapi.com/?apikey=thewdb&s=${search}`;
    console.log(url);
    var data;
    axios.get(url)
        .then(function (response){
            var results = response.data.Response;
            if(results.toLowerCase() == "true"){
                data = response.data.Search;
                res.render("results", {data: data, search: search});

            }
            else {
                res.render("failed", {search: search});
            }
        })
        .catch(function(error){
            console.log("Failed")
        })
        .then(function(){
            
        });
        
    
});

app.get("*", function(req, res){
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server started on port " + process.env.PORT || 3000);
});