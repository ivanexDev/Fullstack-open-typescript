import express from "express";
import patientsService from "../services/patients.service";
import toNewPatient  from "../utils";

const router = express.Router();


router.get("/", (_req,res)=>{
    res.send(patientsService.getAll());
});

router.post("/", (req,res)=>{

    try {
        const newPatient = toNewPatient(req.body);
        const addPatient = patientsService.addPatient(newPatient);
        res.json(addPatient);
        
    } catch (error) {

        if(error instanceof Error){
        res.status(400).send(error.message);}
        
    }


});


export default router;