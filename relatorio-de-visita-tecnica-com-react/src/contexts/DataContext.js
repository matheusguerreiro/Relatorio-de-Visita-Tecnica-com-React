import { createContext } from "react";

// hook
import { useFetch } from '../hooks/useFetch'

let cors = 'tl_34d9e98'
let token = '379238b5-705c-48bc-b8c9-27e26676b417'

export const DataContext = createContext()

export const DataContextProvider = ({children}) => {

  const {data, load} = useFetch(`https://justcors.com/${cors}/https://farmbox.cc/api/public/content_details.json?token=${token}`)

  const {data: notesData, load: notesLoad} = useFetch(`https://justcors.com/${cors}/https://farmbox.cc/api/public/technical_visit_report/notes.json?token=${token}`)

  const {data: plantationsData, load: plantationsLoad} = useFetch(`https://justcors.com/${cors}/https://farmbox.cc/api/public/technical_visit_report/plantations.json?token=${token}`)

  const {data: data2, load: load2} = useFetch(`https://justcors.com/${cors}/https://farmbox.cc/api/public/technical_visit_report/farm.json?token=${token}`)

  return (
    <DataContext.Provider value={{data, notesData, plantationsData, data2, load, notesLoad, plantationsLoad, load2}}>
      {children}
    </DataContext.Provider>
  )

}