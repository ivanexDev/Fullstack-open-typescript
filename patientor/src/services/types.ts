export enum Gender{
    male = "male",
    female = "female",
    other = "other"
}

export interface Diagnose{
    code: string,
    name: string,
    latin?: string
}

// export type noLatinDiagnose = Omit<Diagnose, "latin">;

export interface Entry{
    
}

export interface Patient{
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: Gender,
    occupation: string
    entries:Entry[]
}

export type NoSsnPatient = Omit<Patient,"ssn">;
export type NoIdPatient = Omit<Patient,"id">;