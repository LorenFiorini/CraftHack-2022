import React, { useState, useEffect } from "react";
import axios from "axios";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";


export const Languages = [
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

const GuideInfo = () => {



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
      profileImg: `https://i.pravatar.cc/${Math.floor(Math.random() * 1000)}`,
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
            <option value="I">V??rker??let</option>
            <option value="II">II</option>
            <option value="III">??buda-B??k??smegyer</option>
            <option value="IV"> ??jpest</option>
            <option value="V">Belv??ros-Lip??tv??ros</option>
            <option value="VI">Ter??zv??ros</option>
            <option value="VII">Erzs??betv??ros</option>
            <option value="VIII">J??zsefv??ros</option>
            <option value="IX">Ferencv??ros</option>
            <option value="X">K??b??nya</option>
            <option value="XI">??jbuda</option>
            <option value="XII">Hegyvid??k</option>
            <option value="XIII">Vizafog??</option>
            <option value="XIV">Zugl??</option>
            <option value="XV">R??kospalota</option>
            <option value="XVI">XVI</option>
            <option value="XVII">R??kosmente</option>
            <option value="XVIII">Pestszentl??rinc</option>
            <option value="XIX">Kispest</option>
            <option value="XX">Pesterzs??bet</option>
            <option value="XXI">Csepel</option>
            <option value="XXII">Budafok-T??t??ny</option>
            <option value="XXIII">Soroks??r</option>
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
