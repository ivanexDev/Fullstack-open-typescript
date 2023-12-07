export interface Diagnose{
    code: string,
    name: string,
    latin?: string
}

// export type noLatinDiagnose = Omit<Diagnose, "latin">;

export interface Patient{
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: string,
    occupation: string
}

export type NoSsnPatient = Omit<Patient,"ssn">;