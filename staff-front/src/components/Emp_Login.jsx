import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import LogHeader from './Emp_Login_Header';
import Footer from './Footer';
import backimg from '../assets/backimg.png'; 

function Emp_Login() {
    const [eid, setEid] = useState("");  // Initialize state variables
    const [email, setEmail] = useState("");
    const navigate = useNavigate();  // For navigation

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Make API call for login
        axios.post('http://localhost:8070/employees/login', { eid, email })
            .then(result => {
                // Check the response message
                if (result.data.message === "Login successful") {
                    navigate('/EmployeeDashboard'); // Navigate only on successful login
                } else {
                    alert(result.data.error); // Show error message
                }
            })
            .catch(err => {
                console.error("Login error:", err);
                alert("An error occurred during login.");
            });
    };

    // Handle form inputs
    const handleEidChange = (e) => setEid(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);

    return (
        <div style={{ 
            marginBottom: "0px",
            backgroundImage: `url(${backimg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            marginTop: '0px'
        }}>
            <LogHeader />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'150px', marginBottom: '150px' }}>
            
            <div style={{ padding: '40px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', maxWidth: '800px', width: '100%', height: '400px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Employee Login</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px',  marginTop:'60px'  }}>
                        <div style={{ flex: 1, marginRight: '10px'}}>
                            <label htmlFor="eid" style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>Employee ID</label>
                            <input
                                type="text"
                                id="eid"
                                name="eid"
                                placeholder="Enter your Employee ID"
                                value={eid}
                                onChange={handleEidChange}
                                required
                                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label htmlFor="email" style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                            />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', marginTop:'40px'  }}>
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <button type="button" style={{ color: '#007BFF', fontSize: '14px', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>Forgot password?</button>
                    </div>
                    <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: "#198754", color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Login</button>
                </form>
            </div>
        </div>
            <Footer/>
        </div>
    );
}

export default Emp_Login;  // Ensure default export
