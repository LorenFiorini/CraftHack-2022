import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import FilteredItems from "./FilteredItems";

const UserInfo = ({}) => {
  const [results, setResults] = useState([]);
  const [filterClick, setFilterClick] = useState(false);

  const handleClose = () => setFilterClick(false);
  const handleShow = () => setFilterClick(true);


  useEffect(() => {
    axios.get("http://localhost:3001/guids").then((response) => {
      setResults(response.data);
    });
  }, []);

  return (
    <div>
      <button onClick={ handleShow}>Filter It</button>

      <Modal show={filterClick} onHide={handleClose}>
      <FilteredItems/>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {results.map((result) => (
        <div key={result.id}>
          <div>
            <img src="" alt="divImg" />
            <div>
              {/* <p>{result.description}</p> */}
              {/* {`*${result.rating}${results.total}`} */}
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="avatar" />
              <p>{result.name}</p>
            </div>
            <div>{/* {result.cost} */}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserInfo;
