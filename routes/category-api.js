const express = require("express");
const statCont = require("../controller/state");

const router = express.Router();

router.post("/33207798/add-category", statCont.createCategory);

//post the category json data to html file show it out 

router.get("/33207798/list-category", statCont.showAllCategory);

module.exports = router;