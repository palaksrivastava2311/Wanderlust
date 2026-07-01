const express = require("express");
const router = express.Router();

//Posts
//Index Route
router.get("/", (req,res)=>{
    res.send("GET for posts");
});

//Show Route
router.get("/:id", (req,res)=>{
    res.send("GET for show posts");
});

// create
router.post("/",(req,res)=>{
    res.send("POST for posts");
});

//Delete- users
router.delete("/:id",(req,res)=>{
    res.send("Delete for post id");
});

module.exports = router;