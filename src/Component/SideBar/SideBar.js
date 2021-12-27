import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../index.css";
import {
  faCoffee,
  faHome,
  faDashbord,
  faColumns,
  faCog,
  faBookmark,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faFirstOrder } from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";

const SideBar = () => {
  const [show, setShow] = useState(false);

  const sideBarHandler = () => {
    setShow(!show);
    console.log("inside toggle button");
  };
  return (
    <>
      <div className="vh-100  text-white bg-dark" style={{ width: "45px" }}>
        <Button className="mt-2" onClick={sideBarHandler}>
          {" "}
          <FontAwesomeIcon className="" icon={faBars} inverse />
        </Button>
      </div>

      <div className={show ? "nav-menu active" : "nav-menu"}>
        <div
          className="d-flex flex-column vh-100 flex-shrink-0 p-3 text-white bg-dark"
          style={{ width: "250px" }}
        >
          <a
            className="position-absolute top-0 end-0 m-2 close-btn"
            onClick={sideBarHandler}
          >
            {" "}
            <FontAwesomeIcon className="" icon={faTimes} inverse />
          </a>

          {/* <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg class="bi me-2" width="40" height="32">
         
          </svg>
          <span class="fs-4">BBBootstrap</span>
        </a>
        <hr /> */}
          <ul class="nav nav-pills flex-column mb-auto text-start ps-4 pt-4">
            <li class="nav-item">
              <a href="#" class="nav-link active" aria-current="page">
                <FontAwesomeIcon icon={faHome} inverse />
                <span class="ms-2">Home</span>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <i class="fa fa-dashboard"></i>
                <FontAwesomeIcon icon={faColumns} inverse />
                <span class="ms-2">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <FontAwesomeIcon icon={faFirstOrder} inverse />
                <span class="ms-2">My Orders</span>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <FontAwesomeIcon icon={faCog} inverse />
                <span class="ms-2">Settings</span>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <FontAwesomeIcon icon={faBookmark} inverse />
                <span class="ms-2">Bookmarks</span>
              </a>
            </li>
          </ul>
          <hr />
          <div class="dropdown">
            <a
              href="#"
              class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt=""
                width="32"
                height="32"
                class="rounded-circle me-2"
              />
              <strong> John W </strong>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-dark text-small shadow"
              aria-labelledby="dropdownUser1"
            >
              <li>
                <a class="dropdown-item" href="#">
                  New project
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
