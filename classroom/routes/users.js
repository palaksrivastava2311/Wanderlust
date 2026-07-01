const express = require("express");
const router = express.Router();

//Index Route
router.get("/", (req,res)=>{
    res.send("GET for users");
});

//Show Route
router.get("/:id", (req,res)=>{
    res.send("GET for show users");
});

// create
router.post("/",(req,res)=>{
    res.send("POST for users");
});

//Delete- users
router.delete("/:id",(req,res)=>{
    res.send("Delete for users id");
});

module.exports = router;