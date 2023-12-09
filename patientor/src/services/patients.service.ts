import patients from "../data/patients";
import { NoIdPatient, NoSsnPatient, Patient } from "./types";
import { v1 as uuid } from 'uuid';


const getAll = ():NoSsnPatient[]=>{

    return patients.map(({dateOfBirth,gender,id,occupation, name})=>({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};

const addPatient = (patient: NoIdPatient): Patient=>{


    const newPatient = {

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        id: uuid(),
        ...patient
      };
    
      patients.push(newPatient);
      return newPatient;
};


export default {
    getAll,
    addPatient
};