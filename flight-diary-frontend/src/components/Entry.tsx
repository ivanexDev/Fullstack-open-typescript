import { DiaryEntry } from "../types"
interface EntryProps{
  entries: DiaryEntry[]
}

const Entry: React.FC<EntryProps> = ({entries}) => {
  return (
    <>
        {entries.map(entry => {
            return (
                <div key={entry.id}>
                    <h3>{entry.date}</h3>
                    <p>visibility: {entry.visibility}</p>
                    <p>weather: {entry.weather}</p>
                </div>
            )
        })}
    </>
  )
}

export default Entry