import { Gender, NoIdPatient } from "./services/types";

const toNewPatient =(object: unknown):NoIdPatient=>{
    
    if ( !object || typeof object !== 'object' ) {
        throw new Error('Incorrect or missing data');
      }
    
    if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && "occupation" in object
    )  {
        const newPatient: NoIdPatient = {
            name: parseName(object.name),
            dateOfBirth: parseDate(object.dateOfBirth),
            ssn: parseSsn(object.ssn),
            gender: parseGender(object.gender),
            occupation: parseOcupation(object.occupation)
        };

        return newPatient;
    }
    
    throw new Error('Incorrect data: some fields are missing');

};

const parseName = (name: unknown):string =>{
    if(!name || !isString(name)){
        throw new Error('Incorrect or missing name');
    }
    return name;
};

const parseDate = (date: unknown): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};

const parseSsn = (ssn: unknown):string =>{
    if(!ssn || !isString(ssn)){
        throw new Error('Incorrect or missing ssn');
    }
    return ssn;
};

const parseGender = (gender: unknown): Gender => {
    if (!isString(gender) || !isGender(gender)) {
        throw new Error('Incorrect or missing gender: ' + gender);
    }
    return gender;
  };

const parseOcupation = (occupation: unknown):string =>{
    if(!occupation || !isString(occupation)){
        throw new Error('Incorrect or missing occupation');
    }
    return occupation;
};

const isString = (text: unknown): text is string =>{
    return typeof text === "string" || text instanceof String;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const isGender = (param: string): param is Gender => {
    return Object.values(Gender).map(g => g.toString()).includes(param);
};

export default toNewPatient;