import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom
import axios from 'axios';
import Swal from 'sweetalert2';
import Footer from './Footer';
import bgImage from '../assets/Sback.jpg';
import Header from './Header';

function SalaryAssign() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        employeeID: "",
        name: "",
        basicamount: "",
        othours: "",
        amountperhour: "",
        month: "",
        amount: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Calculate amount dynamically when the relevant fields change
        let amount = calculateAmount(name, value);
        setInputs(prevState => ({
            ...prevState,
            [name]: value,
            amount: isNaN(amount) ? '' : amount.toFixed(2) // Format amount to 2 decimal places
        }));
    };

    const calculateAmount = (name, value) => {
        const { basicamount, othours, amountperhour } = inputs;
        // Re-calculate the total amount based on changes in relevant fields
        switch (name) {
            case 'basicamount':
                return parseFloat(value) + (parseFloat(othours) || 0) * (parseFloat(amountperhour) || 0);
            case 'othours':
                return (parseFloat(basicamount) || 0) + (parseFloat(value) || 0) * (parseFloat(amountperhour) || 0);
            case 'amountperhour':
                return (parseFloat(basicamount) || 0) + (parseFloat(othours) || 0) * (parseFloat(value) || 0);
            default:
                return parseFloat(basicamount) + (parseFloat(othours) || 0) * (parseFloat(amountperhour) || 0);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation to ensure all required fields are filled
        const { employeeID, name, basicamount, othours, amountperhour, month } = inputs;
        if (!employeeID || !name || !basicamount || !othours || !amountperhour || !month) {
            Swal.fire("Error", "All fields are required", "error");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8070/salary/addsalary", inputs); // Adjust the endpoint if needed
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully added salary",
                showConfirmButton: false,
                timer: 1500
            });
            console.log(response.data);
            navigate('/salarydetails');
        } catch (error) {
            console.error("Error adding salary:", error.message);
            Swal.fire("Error", "There was an error adding the salary", "error");
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
                    <div className="container form-container" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", paddingTop: "30px", paddingBottom: "50px", borderRadius: "10px", marginTop: "30px", marginBottom: "100px", width: "800px" }}>
                        <div className="row justify-content-center">
                            <div className="col-md-9">
                            <form onSubmit={handleSubmit} id='salaryForm'>
                            <h2 style={{ padding: '30px', textAlign: 'center' }}>Assign Salary</h2>
                            <div className='mb-3'>
                                <label htmlFor='employeeID' className='form-label'>Employee ID</label>
                                <input
                                    type='text'
                                    id='employeeID'
                                    name='employeeID'
                                    onChange={handleChange}
                                    value={inputs.employeeID}
                                    className='form-control'
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='name' className='form-label'>Name</label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    onChange={handleChange}
                                    value={inputs.name}
                                    className='form-control'
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='basicamount' className='form-label'>Basic Amount</label>
                                <input
                                    type='number' // Changed to number type
                                    id='basicamount'
                                    name='basicamount'
                                    onChange={handleChange}
                                    value={inputs.basicamount}
                                    className='form-control'
                                    min="0" // Ensures positive numbers
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='othours' className='form-label'>OT Hours</label>
                                <input
                                    type='number' // Changed to number type
                                    id='othours'
                                    name='othours'
                                    onChange={handleChange}
                                    value={inputs.othours}
                                    className='form-control'
                                    min="0" // Ensures positive numbers
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='amountperhour' className='form-label'>Amount per OT Hour</label>
                                <input
                                    type='number' // Changed to number type
                                    id='amountperhour'
                                    name='amountperhour'
                                    onChange={handleChange}
                                    value={inputs.amountperhour}
                                    className='form-control'
                                    min="0" // Ensures positive numbers
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='month' className='form-label'>Month</label>
                                <input
                                    type='text'
                                    id='month'
                                    name='month'
                                    onChange={handleChange}
                                    value={inputs.month}
                                    className='form-control'
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='amount' className='form-label'>Total Amount</label>
                                <input
                                    type='text'
                                    id='amount'
                                    name='amount'
                                    onChange={handleChange}
                                    value={inputs.amount}
                                    className='form-control'
                                    readOnly // Prevent manual editing of calculated amount
                                />
                            </div>
                            <div className='d-grid gap-2'>
                                <button type='submit' className='btn btn-primary'
                                            style={{ 
                                            textAlign: 'center', 
                                            background: "#198754", 
                                            border: '0px', 
                                            color: 'white', // Optional: change text color
                                            padding: '10px', // Optional: add some padding
                                            borderRadius: '6px', // Optional: add border radius
                                            }}>Assign</button>
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

export default SalaryAssign;
