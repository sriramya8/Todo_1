const express= require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");
var items=[];
var workitems=[];
var work="Work"
app.get("/",function(req,res){
    var d= new Date();
    var options={weekday:"long", year:"numeric", month:"long", day:"numeric" };
    var i= d.toLocaleDateString("en-US",options);
    res.render("list",{day:i , item:items});
})
app.post("/",function(req,res){
    var item = req.body.item;
    if(req.body.okbutton==="work"){
        
        workitems.push(item);
        res.redirect("/work");
    }
    else{
      
        items.push(item);
        res.redirect("/");
    }
   
});
app.get("/work",function(req,res){
    res.render("list",{day:work, item:workitems})
})
app.listen(3000,function(){
    console.log("Server is ready");
})