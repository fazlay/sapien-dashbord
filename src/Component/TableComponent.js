import React, { useState } from "react";
import { Dropdown, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const TableComponent = () => {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
    
     <FontAwesomeIcon icon={faEllipsisV}/>
    </a>
  ));
  
  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');
  
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
       
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );
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
    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
      Custom toggle
    </Dropdown.Toggle>

    <Dropdown.Menu as={CustomMenu}>
      <Dropdown.Item eventKey="1" active>Edit</Dropdown.Item>
      <Dropdown.Item eventKey="2">View</Dropdown.Item>
      <Dropdown.Item eventKey="3" >
        Delete
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
