import React, { useState, useEffect } from "react";
import axios from "axios";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";

const GuideInfo = () => {
  const Languages = [
    { label: "Albanian", value: "Albanian" },
    { label: "Arabic", value: "Arabic" },
    { label: "English", value: "English" },
    { label: "Spanish", value: "Spanish" },
  ];

  useEffect(() => {
    axios.get("http://localhost:3001/guids").then((response) => {
      setGuids(response.data);
    });
  }, []);

  const [guids, setGuids] = useState([]);
  const [newGuid, setNewGuid] = useState("");
  const [newName, setNewName] = useState("");
  const [newLanguage, setNewLanguage] = useState([]);
  const [newDate, setNewDate] = useState("");
  const [newArea, setNewArea] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const addGuid = (event) => {
    event.preventDefault();
    const guidObject = {
      name: newName,
      languages: newLanguage,
      date: newDate,
      area: newArea,
      rating: 0,
      description: newDescription,
      pricePerHour: 2000,
      rating: (Math.random() * 5).toFixed(2),
      totalVotes: Math.floor(Math.random() * (220 - 55 + 1) + 55),
    };

    if (
      newName === "" ||
      newLanguage === "" ||
      newDate === "" ||
      newArea === ""
    ) {
      alert("please fill all the fields");
      return;
    }
    axios.post("http://localhost:3001/guids", guidObject).then((response) => {
      console.log(response);
      setGuids(guids.concat(response.data));
      setNewName("");
      setNewLanguage([]);
      setNewDate("");
      setNewArea("");
      setNewDescription("");
      setNewGuid(guidObject);
    });
    console.log(newGuid);
  };

  const nameChangeHandler = (event) => {
    setNewName(event.target.value);
  };
  const languageChangeHandler = (e) => {
    setNewLanguage(e.split(","));
  };
  const dateChangeHandler = (event) => {
    setNewDate(event.target.value);
  };
  const areaChangeHandler = (event) => {
    setNewArea(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setNewDescription(event.target.value);
  };

  return (
    <>
      <form onSubmit={addGuid}>
        <div>
          <label>Name</label>
          <input type="text" value={newName} onChange={nameChangeHandler} />
        </div>
        <div>
          <h4>Languages</h4>
          {newLanguage}
        </div>

        <MultiSelect
          onChange={languageChangeHandler}
          value={newLanguage}
          options={Languages}
        />
        <div>
          <label>
            Description:
            <textarea
              value={newDescription}
              onChange={descriptionChangeHandler}
            />
          </label>
        </div>
        <div>
          <label>pick a date:</label>
          <input
            type="date"
            name="date"
            value={newDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div>
          <label>area</label>
          <select
            name="area"
            placeholder="select a district"
            value={newArea}
            onChange={areaChangeHandler}
          >
            <option disabled value="">
              Select...
            </option>
            <option value="I">Várkerület</option>
            <option value="II">II</option>
            <option value="III">Óbuda-Békásmegyer</option>
            <option value="IV"> Újpest</option>
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default GuideInfo;
