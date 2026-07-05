const express = require("express");
const app = express();
const users = require("./routes/users.js");
const posts = require("./routes/post.js");
// const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

// app.use(cookieParser("secretcode"));
// // whenever cookie req will come it will go to cookieParser middleware then path will be matched
// // then cookie will be parsed

// app.get("/getsignedcookie", (req,res)=>{
//     res.cookie("made-in", "India",{signed:true});
//     res.send("signed cookie sent");
// });

// app.get("/verify", (req,res)=>{
//     console.log(req.signedCookies);
//     res.send("verified");
// });



// app.get("/getcookies", (req,res)=>{
//     res.cookie("namaste","india");
//     res.cookie("greet","hello"); //name-value pair
//     res.send("sent you some cookies!");
// });

// app.get("/greet", (req,res)=>{
//     let {name="anonynmous"} = req.cookies; 
//     res.send(`Hi ${name}`);
// });

// app.get("/", (req,res)=>{
//     console.dir(req.cookies);
//     res.send("Hi, I am root!");
// });

// app.use("/users", users);

// app.use("/posts", posts);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
    secret:"mysupersecretstring",
    resave: false,
    saveUninitialized:true,
}
app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next) =>{
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});




app.get("/register", (req,res)=>{ // this is the way to store informations 
   let {name="anonymous"} = req.query;
   req.session.name = name;
//    res.send(name);
   if(name === "anonymous"){
    req.flash("error", "user not registered");
   }else{
    req.flash("success", "user registered successfully!");
   }

   res.redirect("/hello");
});

app.get("/hello", (req,res)=>{ // this is the way to access stored information
    res.render("page.ejs", {name:req.session.name});
});
// app.get("/reqcount", (req,res)=>{
//   if(req.session.count){// req.session is single session and count track no of times req sent by client
//     req.session.count++;
//   }else{
//     req.session.count = 1;
//   }
//     res.send(`you sent a request ${req.session.count} times`);
// });

// app.get("/test", (req,res)=>{
//     res.send("test  successful!");
// });

app.listen(3000, ()=>{
    console.log("server is listening to 3000");
});