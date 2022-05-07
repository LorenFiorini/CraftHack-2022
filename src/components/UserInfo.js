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
    fetch("dbReal.json", {
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

        <div className="guides">
          {tourData.map((tour) => (
            <div key={tour.id} className="guides-single">
              <div className="guides-single_top">
                <div className="photo col-4">
                  <img className="img-fluid" src={tour.img} alt="divImg" />
                </div>
                <div className=" col ">
                  <p>
                    <strong>{tour.name}</strong>
                  </p>
                  <div className="svg-rating">
                    {[...Array(5)].map((elementInArray, index) => {
                      return (
                        <span
                          key={index}
                          className={
                            index <= tour.rating - 1 ? "filled" : "not-filled"
                          }
                        >
                          {elementInArray}
                          <svg
                            fill="currentColor"
                            width="13"
                            height="13"
                            viewBox="0 0 22 22"
                            class="star-svg"
                          >
                            <path
                              fill="currentColor"
                              stroke="none"
                              stroke-miterlimit="10"
                              stroke-width="0"
                              d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                            ></path>
                          </svg>
                        </span>
                      );
                    })}
                  </div>

                  

                  <p> {`${tour.rating} | ${tour.totalVotes}`} Reviews</p>
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
                      <span key={lang}>{lang}</span>
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
    </>
  );
};

export default UserInfo;
