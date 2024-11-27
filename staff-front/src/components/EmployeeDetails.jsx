import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Footer from './Footer';
import back from "C:/Users/rashm/OneDrive/Desktop/staff management/staff management/staff-front/src/assets/backstaff.jpg"; 
import { FaSearch, FaTimes } from 'react-icons/fa';
import Header from './Header';

function StaffDetails() {
  const [users, setUsers] = useState([]);
  const [modelState, setModelState] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("http://localhost:8070/employees/");
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    }
    fetchUsers();
  }, []);

  // Filter users based on the search term
  const filteredUsers = users.filter(user => 
    `${user.Fname} ${user.Lname}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const handleModelOpen = (user) => {
    setSelectedUser(user);
    setModelState(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({ ...selectedUser, [name]: value });
  };

  const updateHandler = async () => {
    try {
      if (!/^EM\d+$/.test(selectedUser.eid)) {
        Swal.fire("Error!", "Employee ID should start with 'EM' followed by numbers.", "error");
        return;
      }

      if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(selectedUser.Fname)) {
        Swal.fire("Error!", "Please enter a valid first name.", "error");
        return;
      }

      if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(selectedUser.Lname)) {
        Swal.fire("Error!", "Please enter a valid last name.", "error");
        return;
      }

      await axios.put(`http://localhost:8070/employees/update/${selectedUser._id}`, selectedUser);
      const updatedUsers = users.map(user => 
        user._id === selectedUser._id ? selectedUser : user
      );
      setUsers(updatedUsers);
      setModelState(false);
      Swal.fire("Updated!", "Employee details have been updated.", "success");
    } catch (error) {
      console.error("Error updating employee:", error.message);
    }
  };

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:8070/employees/delete/${id}`);
      const updatedUsers = users.filter(user => user._id !== id);
      setUsers(updatedUsers);
      Swal.fire("Deleted!", "Employee has been deleted.", "success");
    } catch (error) {
      console.error("Error deleting employee:", error.message);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");  // Clear the search input
  };

  return (
    <div>
      <Header />
    <div
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
        margin: 0,
        padding: '20px'
      }}
    >
      
      <div className="search-container" style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '400px', margin: 'auto' }}>
          <span style={{ padding: '10px', background: '#f0f0f4', border: '1px solid #cccc', borderTopLeftRadius: '40px', borderBottomLeftRadius: '40px' }}>
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search by employee name..."
            value={searchTerm}
            onChange={handleSearch}
            className="form-control"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderLeft: 'none',
              borderTopRightRadius: '40px',
              borderBottomRightRadius: '40px',
            }}
          />
          {searchTerm && (
            <button
              onClick={clearSearch}  // Add the click event to clear search
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                marginLeft: '-35px',
                padding: '10px',
              }}
            >
              <FaTimes />
            </button>
          )}
        </div>
      </div>
      
      <div className="row row-cols-2">
        {filteredUsers.map(user => (
          <EmployeeDetails
            key={user._id}
            user={user}
            handleModelOpen={handleModelOpen}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>
      <Modal show={modelState} onHide={() => setModelState(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            {Object.entries(selectedUser).map(([key, value]) =>
              key !== '_id' && key !== '__v' && (
                <div className="mb-3" key={key}>
                  <label htmlFor={`update${key}`} className="form-label">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <input
                    type="text"
                    id={`update${key}`}
                    className="form-control"
                    name={key}
                    value={value}
                    onChange={handleInputChange}
                  />
                </div>
              )
            )}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={updateHandler}>
            Update
          </button>
        </Modal.Footer>
      </Modal>
      
    </div>
    <Footer />
    </div>
  );
}

function EmployeeDetails({ user, handleModelOpen, deleteHandler }) {
  return (
    <div className="col-md-3 mb-3" style={{ marginTop: "30px", marginLeft: "120px" }}>
      <div className="card border" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="card-header" style={{ backgroundColor: "#B0CBA6" }}>
          <h5 className="card-title">{`${user.Fname} ${user.Lname}`}</h5>
        </div>
        <div className="card-body">
          {Object.entries(user).map(([key, value]) =>
            !['_id', '__v'].includes(key) && (
              <p className="card-text" key={key}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}: </strong>{value}
              </p>
            )
          )}
        </div>
        <div className="card-footer d-flex justify-content-between">
          <button className="btn btn-success" onClick={() => handleModelOpen(user)}>
            Update
          </button>
          <button className="btn btn-danger" onClick={() => deleteHandler(user._id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default StaffDetails;
