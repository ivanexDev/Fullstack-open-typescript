import axios from "axios";
import { DiaryEntry, NoIdDiaryEntry } from "./types";

const baseUrl = "http://localhost:3000/api/diaries"

export const getAllEntries = ()=>{
    return axios
        .get<DiaryEntry[]>(baseUrl)
        .then(res=>res.data)
}

export const createEntry = (object: NoIdDiaryEntry)=>{
    return axios
        .post<DiaryEntry[]>(baseUrl, object)
        .then(res=>res.data)
}