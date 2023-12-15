import {ChangeEvent, useState} from "react";
import { createEntry } from "../EntryServices";
import { DiaryEntry, NoIdDiaryEntry } from "../types";

interface FormProps{
    handleNewEntry: (res: DiaryEntry[])=>void
    setMessage: (err: string | null)=>void
}

const Form:React.FC<FormProps> = ({handleNewEntry, setMessage}) => {
    const [date, setDate] = useState("")
    const [visibility, setVisibility] = useState("")
    const [weather, setWeather] = useState("")
    const [comment, setComment] = useState("")

    const handeData = (e:ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.id)

        switch (e.target.id) {
            case "date":
                return setDate(e.target.value)
            case "visibility":
                return setVisibility(e.target.value)
            case "weather":
                return setWeather(e.target.value)
            default:
                return setComment(e.target.value)

        }
    }

    const handleVisibility = (value:string) => {
      console.log(value)
      setVisibility(value)
    }

    const handleWeather = (value:string) => {
      console.log(value)
      setWeather(value)
    }

    const newEntry = (event: React.SyntheticEvent)=>{
        event.preventDefault()
        console.log({
            date,
            visibility,
            weather,
            comment,
        })
        const entryObject: NoIdDiaryEntry ={
            date,
            visibility,
            weather,
            comment,
        }
        createEntry(entryObject)
            .then(res=>{
              handleNewEntry(res)
              setMessage("Entry added")
              setTimeout(()=>{
                setMessage(null)
              }, 3000)
            
            })
            .catch(err=>{
              console.log(err.response.data)
              setMessage(err.response.data)
              setTimeout(()=>{
                setMessage(null)
              }, 3000)
            })
    }  


  return (
    <form onSubmit={(e)=>{newEntry(e)}} action="">
      <div>
        <label htmlFor="date">date</label>
        <input onChange={handeData} value={date} type="date" id="date" />
      </div>
      <div>
        <label htmlFor="visibility">visibility </label>
        great          <input type="radio" name="visibility"
          onChange={() => handleVisibility('great')} />
        good    <input type="radio" name="visibility"
          onChange={() => handleVisibility('good')} />
        ok <input type="radio" name="visibility"
          onChange={() => handleVisibility('ok')} />
                poor <input type="radio" name="visibility"
          onChange={() => handleVisibility('poor')} />
      </div>




      <div>
        <label htmlFor="weather">weather </label>
        sunny          <input type="radio" name="weather"
          onChange={() => handleWeather('sunny')} />
        rainy    <input type="radio" name="weather"
          onChange={() => handleWeather('rainy')} />
        cloudy <input type="radio" name="weather"
          onChange={() => handleWeather('cloudy')} />
                stormy <input type="radio" name="weather"
          onChange={() => handleWeather('stormy')} />
                          windy <input type="radio" name="weather"
          onChange={() => handleWeather('windy')} />
      </div>
      <div>
        <label htmlFor="comment">comment</label>
        <input onChange={handeData}  value={comment} type="text" id="comment"/>
      </div>
      <button>add</button>
    </form>
  );
};

export default Form;
