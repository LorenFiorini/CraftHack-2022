import React, { useState } from 'react'
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import { Languages } from './GuideInfo';

const FilteredItems = () => {

    const [newLanguage, setNewLanguage] = useState([]);

  return (
    <div className='filter-model'><div className='p-2'>
<p>Filter by</p>
        <div>
            <label>languages</label>
            <MultiSelect
            onChange={(e)=> setNewLanguage(e.split(',')) }
            value={newLanguage}
            options={Languages}
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
    </div></div>
  )
}

export default FilteredItems