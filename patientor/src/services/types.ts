export interface Diagnose{
    code: string,
    name: string,
    latin?: string
}

export type noLatinDiagnose = Omit<Diagnose, "latin">;