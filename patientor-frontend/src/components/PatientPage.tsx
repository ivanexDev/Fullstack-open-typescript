import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import patientService from "../services/patients";
import { Patient } from "../types";
import { Female, Male, Transgender } from '@mui/icons-material';


const PatientPage = () => {

    const {id} = useParams();
    const [info, setInfo] =  useState<Patient | null>(null);

    useEffect(()=>{
        if(id){
            const fetchPatien = async () => {
                const patient = await patientService.getPatient(id);
                setInfo(patient);
              };
              fetchPatien();
        }
    },[]);

    useEffect(()=>{
        console.log(info);
    },[info]);

    const icon = ()=>{
        switch (info?.gender) {
            case "male":
                return <Male/>;
            case "female":
                return <Female/>;
            default:
                return <Transgender/>;
        }
    };


  return (
    <>
    <h2><strong>{info?.name}</strong> {icon()} </h2>
    <p>ssh: {info?.ssn}</p>
    <p>ocupation: {info?.occupation}</p>
    </>
  );
};

export default PatientPage;