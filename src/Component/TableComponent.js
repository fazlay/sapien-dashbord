import React from "react";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const TableComponent = () => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Lead Date</th>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
            <th scope="col">Email</th>
            <th scope="col">Source</th>
            <th scope="col">Last Updated</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">May 26, 2019</th>
            <td>Shaivam Bhwal</td>
            <td>+91987654321</td>
            <td>dummy@gmail.com</td>
            <td>website</td>
            <td>25 June 2021</td>
            <td> New</td>
            <td>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" varient={light}>
                  <FontAwesomeIcon icon={faEllipsisV} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
