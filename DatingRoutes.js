const { Router} =require("express");
const { getDating, saveDating, deleteDating, editDating } = require("./DatingController");

const router= Router();


router.get("/", getDating);
router.post("/saveDating", saveDating);
router.post("/deleteDating", deleteDating);
router.post("/editDating", editDating);


module.exports = router
