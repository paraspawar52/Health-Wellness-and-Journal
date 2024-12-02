import React, { useState } from 'react'
import { createContext } from 'react'
 export const dataProvider=createContext()
const Store = ({children}) => {
    let [store,setStore]=useState([])
    let [data, setData] = useState({ day: "", meal: "", calories: "", breakfast:"",lunch:"",dinner:"" });

    const [submissions, setSubmissions] = useState([]);

  return (
    <dataProvider.Provider value={{store,setStore,data,setData,submissions,setSubmissions}}>
    {children}

    </dataProvider.Provider>
  
  )
}

export default Store