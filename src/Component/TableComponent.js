import React, { useState } from "react";
import { Badge, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import ShowModal from "./ShowModal";

const userInfo = [
  {
    id: 1023,
    notSeen: true,
    date: " May 26, 2019",
    time: "8.00 PM",
    name: "Sharukh Bhwal",
    mobile: "+91987654321",
    email: "object@gmail.com",
    website: "object.com",
    lastUpdate: "25 June 2021",
    status: "New",
  },
  {
    id: 1024,
    notSeen: false,
    date: " May 26, 2019",
    time: "8.00 PM",
    name: "Shaivam false",
    mobile: "+91987654321",
    email: "dummy@gmail.com",
    website: "website",
    lastUpdate: "25 June 2021",
    status: "New",
  },
];

const TableComponent = () => {
  const [usersInfo, setUsersInfo] = useState(userInfo);
  const [show, setShow] = useState(false);
  //----------------------------------------------------------------------------------handlers
  const handleShow = () => {
    setShow(true);
    console.log("indide Modal handler");
  };

  const deleteHandler = (id) => {
    const newUserList = userInfo.filter((user) => user.id !== id);
    setUsersInfo(newUserList);
    console.log(id);
  };

  //---------------------------------------------------------------------------------------handlers
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <FontAwesomeIcon icon={faEllipsisV} />
    </a>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [value, setValue] = useState("");

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
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
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
          {usersInfo.map((user) => (
            <tr className="shadow rounded-3">
              <th className="py-4 position-relative " scope="row">
                {user.notSeen && (
                  <span class="badge px-4 rounded-top badge-notification top-0 start-0 bg-danger position-absolute">
                    Not Seen
                  </span>
                )}
                {user.date}
                <br />
                <span className="fw-light pt-2"> {user.time}</span>
              </th>
              <td className="py-4">{user.name}</td>
              <td className="py-4">{user.mobile}</td>
              <td className="py-4">{user.email}</td>
              <td className="py-4">{user.website}</td>
              <td className="py-4">{user.lastUpdate}</td>
              <td className="py-4"> {user.status}</td>
              <td className="py-4">
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    id="dropdown-custom-components"
                  >
                    Custom toggle
                  </Dropdown.Toggle>

                  <Dropdown.Menu as={CustomMenu}>
                    <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                    <Dropdown.Item
                      eventKey="2"
                      onClick={() => {
                        handleShow();
                      }}
                    >
                      View
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        deleteHandler(user.id);
                      }}
                      eventKey="3"
                    >
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <ShowModal show={show} setShow={setShow}></ShowModal>
              </td>
            </tr>
          ))}

          <tr className="shadow rounded-3">
            <th className="py-4 position-relative " scope="row">
              May 26, 2019
              <br />
              <span className="fw-light pt-2"> 8.00 AM</span>
            </th>
            <td className="py-4 ">Shaivam Bhwal</td>
            <td className="py-4">+91987654321</td>
            <td className="py-4">dummy@gmail.com</td>
            <td className="py-4">website</td>
            <td className="py-4">25 June 2021</td>
            <td className="py-4"> New</td>
            <td className="py-4">
              <Dropdown>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id="dropdown-custom-components"
                >
                  Custom toggle
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu}>
                  <Dropdown.Item eventKey="1" active>
                    Edit
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2">View</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Delete</Dropdown.Item>
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
