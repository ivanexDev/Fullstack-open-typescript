import { useEffect, useState } from 'react'
import Form from './components/Form'
import { DiaryEntry } from './types'
import { getAllEntries } from './EntryServices'
import Entry from './components/Entry'
import Msg from './components/Msg'

function App() {
  const [entries, setEntries] = useState<DiaryEntry[]>([])
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    getAllEntries()
      .then(res=>setEntries(res))
  },[])

  const handleNewEntry = (res:DiaryEntry[])=>{
    setEntries(entries?.concat(res))
  }
  

return (
    <>
    <h2>Add new entry</h2>
    {message ? <Msg message={message}/>: null}
    <Form setMessage={setMessage} handleNewEntry={handleNewEntry}/>
    <h2>Diary entries</h2>
    <Entry  entries={entries}/>
    </>
  )
}

export default App
