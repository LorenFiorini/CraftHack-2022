import React, { useState,useEffect } from 'react';
import axios from 'axios'



const GuideInfo = () =>{

    useEffect(() => {
        axios
          .get('http://localhost:3001/guids').then(response => {
            setGuids(response.data)
          })
      }, [])

    const [guids , setGuids] = useState([]);
    const [newGuid, setNewGuid] = useState("");
    const [newName, setNewName] = useState("")
    const [newLanguage, setNewLanguage] = useState("");
    const [newDate, setNewDate] = useState("");
    const [newArea, setNewArea] = useState("");

    const addGuid = (event) => {
        event.preventDefault()
        const guidObject = {
            name: newName,
            language: newLanguage,
            date: newDate,
            area: newArea,
        }
        axios
        .post('http://localhost:3001/guids', guidObject)
        .then(response => {
          console.log(response)
          setGuids(guids.concat(response.data))
          setNewName('')
          setNewLanguage('')
          setNewDate('')
          setNewArea('')
          setNewGuid(guidObject)
        })
        console.log(newGuid)
    }

    const nameChangeHandler =(event) => {
        setNewName(event.target.value)
    }
    const languageChangeHandler =(event) => {
        setNewLanguage(event.target.value)
    }
    const dateChangeHandler =(event) => {
        setNewDate(event.target.value)
    }
    const areaChangeHandler =(event) => {
        setNewArea(event.target.value)
    }


  return (
    <form onSubmit={addGuid}>
        <div>
            <label>Name</label>
            <input type="text" value={newName} onChange={nameChangeHandler} />
            </div>
        <div>
            <label >languages</label>
            <select value={newLanguage} onChange={languageChangeHandler} name='languages' placeholder='select a country'>
                <option value="albanian">Albanian</option>
                <option value="arabic">Arabic</option>
                <option value="armenian">Armenian</option>
                <option value="basque">Basque</option>
                <option value="bangali">Bengali</option>
            </select>
        </div>
        <div>
            <label >pick a date:</label>
            <input type="date" name="date" value={newDate} onChange={dateChangeHandler}/>            
        </div>
        <div>
            <label>area</label>
            <select name='area' placeholder='select a district' value={newArea} onChange={areaChangeHandler}>
                <option value="I">Várkerület</option>
                <option value="II">II</option>
                <option value="III">Óbuda-Békásmegyer</option>
                <option value="IV">	Újpest</option>
                <option value="V">Belváros-Lipótváros</option>
                <option value="VI">Terézváros</option>
                <option value="VII">Erzsébetváros</option>
                <option value="VIII">Józsefváros</option>
                <option value="IX">Ferencváros</option>
                <option value="X">Kőbánya</option>
                <option value="XI">Újbuda</option>
                <option value="XII">Hegyvidék</option>
                <option value="XIII">Vizafogó</option>
                <option value="XIV">Zugló</option>
                <option value="XV">Rákospalota</option>
                <option value="XVI">XVI</option>
                <option value="XVII">Rákosmente</option>
                <option value="XVIII">Pestszentlőrinc</option>
                <option value="XIX">Kispest</option>
                <option value="XX">Pesterzsébet</option>
                <option value="XXI">Csepel</option>
                <option value="XXII">Budafok-Tétény</option>
                <option value="XXIII">Soroksár</option>
            </select>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
    </form>
  )
}

export default GuideInfo