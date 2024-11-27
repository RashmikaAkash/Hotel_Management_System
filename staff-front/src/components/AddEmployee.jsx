import React, { useState } from 'react'; // Importing useState from React
import axios from 'axios'; // Importing axios for HTTP requests
import Footer from './Footer';
import bgImage from '../assets/bgreg.jpg'; 
import Header from './Header';

export default function AddEmployee() {
    const [eid, setid] = useState("");
    const [Fname, setFName] = useState("");
    const [Lname, setLName] = useState("");
    const [Gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [NIC, setNIC] = useState("");
    const [Email, setEmail] = useState("");
    const [JobType, setJobType] = useState("");
    const [ContactNum, setContactNum] = useState("");
    const [Address, setAddress] = useState("");
    const [City, setCity] = useState("");
    const [DOB, setDOB] = useState(""); // New state for Date of Birth
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(""); // Error state

    // Email and contact number validation functions
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateContactNum = (contact) => {
        const contactRegex = /^[0-9]{10}$/; // Exactly 10 digits
        return contactRegex.test(contact);
    };

    const sendData = async (e) => {
        e.preventDefault();

        // Simple validation
        if (!Fname || !Lname || !Email || !ContactNum || !DOB) {
            alert("Please fill in all required fields.");
            return;
        }

        // Email validation
        if (!validateEmail(Email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Contact number validation
        if (!validateContactNum(ContactNum)) {
            alert("Contact number should be exactly 10 digits.");
            return;
        }

        const newEmp = {
            eid,
            Fname,
            Lname,
            Gender,
            age,
            NIC,
            Email,
            JobType,
            ContactNum,
            Address,
            City,
            DOB // Including Date of Birth in the new employee object
        };

        setLoading(true); // Start loading
        setError(""); // Clear any previous error

        try {
            await axios.post("http://localhost:8070/employees/add", newEmp);
            alert("Employee Added");
            // Clear input fields after successful submission
            setid("");
            setFName("");
            setLName("");
            setGender("");
            setAge("");
            setNIC("");
            setEmail("");
            setJobType("");
            setContactNum("");
            setAddress("");
            setCity("");
            setDOB(""); // Clear the DOB field
        } catch (err) {
            console.error(err);
            setError("Error adding employee: " + (err.response?.data?.error || err.message));
            alert(error);
        } finally {
            setLoading(false); // End loading
        }
    };

    return (
        <div style={{ 
            marginBottom: "0px",
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            marginTop: '0px'
        }}>
            <Header />

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="container form-container" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", paddingTop: "30px", paddingBottom: "50px", borderRadius: "10px", marginTop: "30px", marginBottom: "100px" }}>
                        <div className="row justify-content-center">
                            <div className="col-md-9">
                                <form onSubmit={sendData}>
                                    <h2 style={{ padding: '30px', textAlign: 'center' }}>Register Employee</h2>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="EID">Employee ID</label>
                                        <input type="text" className="form-control" id="EID" placeholder="Enter Employee ID"
                                            value={eid}
                                            onChange={(e) => setid(e.target.value)} required />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="EFname">Employee First Name</label>
                                        <input type="text" className="form-control" id="EFname" placeholder="Enter Employee First Name"
                                            value={Fname}
                                            onChange={(e) => setFName(e.target.value)} required />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="ELname">Employee Last Name</label>
                                        <input type="text" className="form-control" id="ELname" placeholder="Enter Employee Last Name"
                                            value={Lname}
                                            onChange={(e) => setLName(e.target.value)} required />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="gender">Gender</label>
                                        <select className="form-control" id="gender"
                                            value={Gender}
                                            onChange={(e) => setGender(e.target.value)}>
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="EAge">Employee Age</label>
                                        <input type="number" className="form-control" id="EAge" placeholder="Enter Employee Age"
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)} required />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="NIC">NIC</label>
                                        <input type="text" className="form-control" id="NIC" placeholder="Enter Employee NIC"
                                            value={NIC}
                                            onChange={(e) => setNIC(e.target.value)} required />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="dob">Date of Birth</label> {/* New Date of Birth field */}
                                        <input type="date" className="form-control" id="dob" placeholder="Enter Date of Birth"
                                            value={DOB}
                                            onChange={(e) => setDOB(e.target.value)} required />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="email">Email</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter Employee Email"
                                            value={Email}
                                            onChange={(e) => setEmail(e.target.value)} required />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="jobTitle">Job Title</label>
                                        <select className="form-control" id="jobTitle"
                                            value={JobType}
                                            onChange={(e) => setJobType(e.target.value)}>
                                            <option value="">Select Job Title</option>
                                            <option value="executiveChef">Executive Chef</option>
                                            <option value="foodAndBeverageManager">Food and Beverage Manager</option>
                                            <option value="manager">Manager</option>
                                            <option value="assistantHotelManager">Assistant Hotel Manager</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="contactNum">Contact Number</label>
                                        <input type="tel" className="form-control" id="contactNum" placeholder="Enter Contact Number"
                                            value={ContactNum}
                                            onChange={(e) => setContactNum(e.target.value)} required />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="address">Address</label>
                                        <input type="text" className="form-control" id="address" placeholder="Enter Address"
                                            value={Address}
                                            onChange={(e) => setAddress(e.target.value)} />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="city">City</label>
                                        <input type="text" className="form-control" id="city" placeholder="Enter City"
                                            value={City}
                                            onChange={(e) => setCity(e.target.value)} />
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                        <button type="submit" className="btn btn-primary" style={{ width: '30%' }} disabled={loading}>
                                            {loading ? 'Loading...' : 'Submit'}
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
