import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import TableComponent from "./TableComponent";

function DashBord() {
  return (
    <>
      <h1>Client</h1>
      <ul class="nav nav-tabs">
        <li class="nav-item border-top-0  ">
          <a class="nav-link border-top-0 active" aria-current="page" href="#">
            Client
          </a>
        </li>
        <li class="nav-item border-top-0 ">
          <a class="nav-link" href="#">
            Tab
          </a>
        </li>
        <li class="nav-item border-top-0 ">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
      </ul>
      <div className=" d-flex pt-4">
        <FontAwesomeIcon icon={faSearch} className="mt-2 " />
        <div class="input-group w-25 ps-4">
          <input
            type="text"
            class="form-control"
            placeholder="Search your Client"
          />
          <button class="btn btn-outline-secondary" type="button">
            Search
          </button>
        </div>
      </div>
      <TableComponent></TableComponent>
    </>
  );
}

export default DashBord;
