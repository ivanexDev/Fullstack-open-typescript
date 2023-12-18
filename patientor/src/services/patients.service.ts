import patients, {data} from "../data/patients";
import { NoIdPatient, NoSsnPatient, Patient } from "./types";
import { v1 as uuid } from 'uuid';


const getAll = ():NoSsnPatient[]=>{

    return patients.map(({dateOfBirth,gender,id,occupation, name, entries})=>({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
        entries,
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

const getPatient = (id:string): Patient=>{

    const patient = data.filter(patient=> patient.id === id);

    return patient[0];

};


export default {
    getAll,
    addPatient,
    getPatient
};