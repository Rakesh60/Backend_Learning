const express=require("express");
const noteController=require('../controller/notes');
const router=express.Router();

router.get('/',noteController.getNotes)
.post('/',noteController.createNotes)

exports.noteRouter=router