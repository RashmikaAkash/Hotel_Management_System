import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Footer from './Footer';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import back from "C:/Users/rashm/OneDrive/Desktop/staff management/staff management/staff-front/src/assets/SDback.jpg";
import Header from './Header';

function SalaryDetails() {
  const [salaries, setSalaries] = useState([]);
  const [modelState, setModelState] = useState(false);
  const [selectedSalary, setSelectedSalary] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSalaries, setFilteredSalaries] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    async function fetchSalaries() {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8070/salary/getsal/');
        setSalaries(response.data);
        setFilteredSalaries(response.data); // Initialize with full data
      } catch (error) {
        console.error('Error fetching salaries:', error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchSalaries();
  }, []);

  // Apply search filtering whenever searchTerm or salaries change
  useEffect(() => {
    const filtered = salaries.filter(salary => 
      salary.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSalaries(filtered);
  }, [searchTerm, salaries]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleModelOpen = (salary) => {
    setSelectedSalary(salary);
    setModelState(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedSalary({ ...selectedSalary, [name]: value });
  };

  const updateHandler = async () => {
    try {
      await axios.put(`http://localhost:8070/salary/updatesal/${selectedSalary._id}`, selectedSalary);
      const updatedSalaries = salaries.map(salary => salary._id === selectedSalary._id ? selectedSalary : salary);
      setSalaries(updatedSalaries);
      setFilteredSalaries(updatedSalaries);
      setModelState(false);
      Swal.fire("Updated!", "Salary details have been updated.", "success");
    } catch (error) {
      console.error("Error updating salary details:", error.message);
    }
  };

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:8070/salary/deletesalary/${id}`);
      const updatedSalaries = salaries.filter(salary => salary._id !== id);
      setSalaries(updatedSalaries);
      setFilteredSalaries(updatedSalaries);
      Swal.fire("Deleted!", "Salary details have been deleted.", "success");
    } catch (error) {
      console.error("Error deleting salary details:", error.message);
    }
  };

  const handlePrint = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text('Salary Report', 14, 15);
    doc.autoTable({
      head: [['Employee ID', 'Name', 'Month', 'Amount']],
      body: filteredSalaries.map(salary => [salary.employeeID, salary.name, salary.month, salary.amount]),
      startY: 20
    });
    doc.save('SalaryReport.pdf');
  };

  const handleModalClose = () => {
    setModelState(false);
    setSelectedSalary({});
  };

  return (
    <div 
      className="background-staff-image"
      style={{
        marginBottom: "0px",
        backgroundImage: `url(${back})`, // Correctly use `back` here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        marginTop: '0px'
      }}
    >
      <Header />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <div className="Msearch-container">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  style={{
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: '30px',
                    paddingLeft: '40px',
                    height: '50px',
                    border: '1px solid #ccc',
                    borderRadius: '40px',
                  }}
                />
              </div>
            </div>
            {loading ? (
              <p>Loading...</p> // Show loading message when data is being fetched
            ) : (
              <div>
                <table className="table table-bordered text-center" 
                    style={{ 
                        marginBottom: "50px", 
                        borderRadius: "15px",  // Add border radius
                        overflow: "hidden"     // Ensure corners are clipped
                    }}>
                    <thead>
                        <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Month</th>
                        <th>Amount</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSalaries.map(salary => (
                        <tr key={salary._id}>
                            <td>{salary.employeeID}</td>
                            <td>{salary.name}</td>
                            <td>{salary.month}</td>
                            <td>{salary.amount}</td>
                            <td>
                            <button 
                                style={{ marginRight: '15px' }} 
                                className="btn btn-success mr-2" 
                                onClick={() => handleModelOpen(salary)}
                            >
                                Update
                            </button>
                            <button 
                                className="btn btn-danger" 
                                onClick={() => deleteHandler(salary._id)}
                            >
                                Delete
                            </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>

                
                <button type="button" className="btn btn-warning" onClick={handlePrint} style={{ marginBottom: "50px" }}>
                  Download Report
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal for updating salary details */}
      <Modal show={modelState} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Salary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            {Object.entries(selectedSalary).map(([key, value]) =>
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

      <Footer />
    </div>
  );
}

export default SalaryDetails;
