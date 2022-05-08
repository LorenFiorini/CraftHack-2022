import React, { useState, useEffect } from "react";
import axios from "axios";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";

const GuideInfo = () => {
  const Languages = [
    { label: "English", value: "English" },
    { label: "Hungarian", value: "Hungarian" },
    { label: "French", value: "French" },
    { label: "German", value: "German" },
    { label: "Persian", value: "Persian" },
    { label: "Arabic", value: "Arabic" },
    { label: "Chinese", value: "Chinese" },
    { label: "Spanish", value: "Spanish" },
    { label: "Urdu", value: "Urdu" },
    { label: "Bengali", value: "Bengali" },
    { label: "Portuguese", value: "Portuguese" },
    { label: "Russian", value: "Russian" },
    { label: "Japanese", value: "Japanese" },
    { label: "Javanese", value: "Javanese" },
    { label: "Punjabi", value: "Punjabi" },
    { label: "Wu", value: "Wu" },
    { label: "Telugu", value: "Telugu" },
    { label: "Vietnamese", value: "Vietnamese" },
    { label: "Marathi", value: "Marathi" },
    { label: "Korean", value: "Korean" },
    { label: "Tamil", value: "Tamil" },
    { label: "Italian", value: "Italian" },
    { label: "Turkish", value: "Turkish" },
    { label: "Cantonese", value: "Cantonese" },

  ];


  const [guides, setGuides] = useState([]);
  const [newGuide, setnewGuide] = useState("");
  const [newName, setNewName] = useState("");
  const [newLanguage, setNewLanguage] = useState([]);
  const [newDate, setNewDate] = useState(new Date());
  const [newArea, setNewArea] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/guides").then((response) => {
      setGuides(response.data);
    });
  }, []);

  const addGuide = (event) => {
    event.preventDefault();
    const guidObject = {
      name: newName,
      languages: newLanguage,
      date: newDate,
      area: newArea,
      description: newDescription,
      pricePerHour: 2000,
      rating: (Math.random() * 5).toFixed(2),
      totalVotes: Math.floor(Math.random() * (220 - 55 + 1) + 55),
      proileImg: `https://i.pravatar.cc/${Math.floor(Math.random() * 1000)}`,
    };

    if (
      newName === "" ||
      newLanguage === "" ||
      newDate === "" ||
      newArea === "" ||
      newDescription === ""
    ) {
      alert("please fill all the fields");
      return;
    }
    axios.post("http://localhost:3001/guides", guidObject).then((response) => {
      console.log(response);
      setGuides(guides.concat(response.data));
      setNewName("");
      setNewLanguage([]);
      setNewDate("");
      setNewArea("");
      setNewDescription("");
      setnewGuide(guidObject);
    });
    console.log(newGuide);
  };

  const dateChangeHandler = (event) => {
    setNewDate(event.value);
  };
  const nameChangeHandler = (event) => {
    setNewName(event.target.value);
  };
  const languageChangeHandler = (e) => {
    setNewLanguage(e.split(","));
  };

  const areaChangeHandler = (event) => {
    setNewArea(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setNewDescription(event.target.value);
  };

  return (
    <>
      <div className="title">
        <p className="text-white">GUIDE - New Tour Post</p>
      </div>
      <form onSubmit={addGuide} className="guide-page">
        <div className="name_sect">
          <label>Name</label>
          <input type="text" value={newName} onChange={nameChangeHandler} />
        </div>
        <div className="name_sect">
          <label>Languages</label>
          <MultiSelect
            onChange={languageChangeHandler}
            value={newLanguage}
            options={Languages}
          />
        </div>

        <div className="name_sect">
          <label>Description </label>
          <textarea
            value={newDescription}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className="name_sect">
          <label>Pick a date:</label>
          <input
            type="date"
            name="date"
            value={newDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="name_sect">
          <label>Area</label>
          <select
            name="rea"
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
