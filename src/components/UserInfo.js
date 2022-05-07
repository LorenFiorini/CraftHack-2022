import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import FilteredItems from "./FilteredItems";

const UserInfo = () => {
  const [filterClick, setFilterClick] = useState(false);
  const [tourData, setTourData] = useState([]);
  const handleClose = () => setFilterClick(false);
  const handleShow = () => setFilterClick(true);

  const getData = () => {
    fetch("db.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (res) {
        console.log(res.guides);
        setTourData(res.guides);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="scrollable">
        <div className="guide-login text-white">
          <a className="text-white" href="/guidinfo">
            Login as a guide
          </a>
        </div>
        <div className="filter-sort">
          <div className="filter">
            <button onClick={handleShow}>Filter</button>
          </div>
          <div className="sort">
            <button onClick={handleShow}>Sort</button>
          </div>
        </div>
        <Modal show={filterClick} onHide={handleClose}>
          <FilteredItems />
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
        <div className="guides">
          {tourData.map((tour) => (
            <div key={tour.id} className="guides-single">
              <div className="guides-single_top">
                <div className="photo col-4">
                  {" "}
                  <img className="img-fluid" src={tour.img} alt="divImg" />
                </div>
                <div className=" col">
                  <p>
                    <strong>{tour.name}</strong>{" "}
                  </p>

                  <p> {`Rating: *${tour.rating}${tour.totalVotes}`}</p>
                  <p>District: {tour.area}</p>
                </div>
              </div>
              <div className="guides-single_bottom">
                <div>
                  <p>
                    <small>{tour.description}</small>
                  </p>
                  <div className="guides-languages">
                    {tour.languages.map((lang) => (
                      <span>{lang}</span>
                    ))}
                  </div>
                  <div className="d-flex footer-guide">
                    {" "}
                    <p>
                      From <br />
                      <strong>{tour.date}</strong>{" "}
                    </p>
                    <div className="view-more">
                      <button>View Offer</button>{" "}
                    </div>
                    {/* <span>
                       {tour.pricePerHour}<span>HUF</span> 
                    </span> */}
                  </div>
                  {/* <div className="view-more"><button>View Offer</button> </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserInfo;
