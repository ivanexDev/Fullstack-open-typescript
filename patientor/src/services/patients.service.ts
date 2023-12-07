import patients from "../data/patients";
import { NoSsnPatient } from "./types";


const getAll = (): NoSsnPatient[]=>{

    return patients.map(({id,name,occupation,dateOfBirth,gender})=>({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};


export default {
    getAll
};