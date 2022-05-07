import React from 'react'

const FilteredItems = () => {
  return (
    <div>
      <div>
            <label>Name</label>
            <input type="text" 
            // value={newName} onChange={nameChangeHandler} 
            />
        </div>
        <div>
            <label>languages</label>
            <select name='languages' 
            // value={newLanguage} onChange={languageChangeHandler}
            >
                <option disabled value="">Select a country</option>
                <option value="SQ">Albanian</option>
                <option value="AR">Arabic</option>
                <option value="HY">Armenian</option>
                <option value="EU">Basque</option>
                <option value="BN">Bengali</option>
            </select>
        </div>
        <div>
            <label>pick a date:</label>
            <input type="date" name="date" 
            // value={newDate} onChange={dateChangeHandler}
            />            
        </div>
        <div>
            <label >area</label>
            <select name='area' placeholder='select a district' 
            // value={newArea} onChange={areaChangeHandler}
            >
                <option value="I">Várkerület</option>
                <option value="II">-</option>
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
                <option value="XVI">-</option>
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
            <button>Search</button>
        </div>
    </div>
  )
}

export default FilteredItems