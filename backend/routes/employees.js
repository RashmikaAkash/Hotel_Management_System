const express = require("express");
const router = express.Router();
const Employee = require("../models/EmpDetails"); // Ensure this path is correct
const Salary = require("../models/salary"); // Import the Salary model



// Login
router.post('/login', (req, res) => {
    const { eid, email } = req.body; // Ensure the field names match those in the front end

    // Check for missing fields
    if (!eid || !email) {
        return res.status(400).json({ error: "Employee ID and Email are required." });
    }

    Employee.findOne({ eid: eid })
        .then(user => {
            if (user) {
                // Check if the email matches
                if (user.Email === email) {
                    res.status(200).json({ message: "Login successful", user }); // Respond with user data if needed
                } else {
                    res.status(401).json({ error: "Invalid credentials" }); // Unauthorized error
                }
            } else {
                res.status(404).json({ error: "No records found" }); // Not found error
            }
        })
        .catch(err => {
            console.error("Error during login:", err);
            res.status(500).json({ error: "Internal server error" });
        });
});





// Add a new employee
router.post("/add", async (req, res) => {
    const { eid, Fname, Lname, Gender, age, NIC, Email, JobType, ContactNum, Address, City, DOB } = req.body;

    const newEmployee = new Employee({
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
        DOB
    });

    try {
        await newEmployee.save();
        res.status(201).json({ message: "Employee Added." });
    } catch (err) {
        console.error("Error adding employee:", err);
        res.status(500).json({ error: err.message });
    }
});

// Get all employees
router.get("/", async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (err) {
        console.error("Error fetching employees:", err);
        res.status(500).json({ error: err.message });
    }
});

// Update an employee
router.put("/update/:id", async (req, res) => {
    const empId = req.params.id;
    const { eid, Fname, Lname, Gender, age, NIC, Email, JobType, ContactNum, Address, City, DOB } = req.body; // Include DOB here

    const updateEmployee = {
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
        DOB // Make sure DOB is included
    };

    try {
        const updated = await Employee.findByIdAndUpdate(empId, updateEmployee, { new: true });
        if (!updated) {
            return res.status(404).json({ error: "Employee not found" });
        }
        res.status(200).json({ message: "Employee Updated", updatedEmployee: updated });
    } catch (err) {
        console.error("Error updating employee:", err);
        res.status(500).json({ error: err.message });
    }
});

// Delete an employee
router.delete("/delete/:id", async (req, res) => {
    const empId = req.params.id;

    try {
        const deleted = await Employee.findByIdAndDelete(empId);
        if (!deleted) {
            return res.status(404).json({ error: "Employee not found" });
        }
        res.status(200).json({ message: "Employee Deleted" });
    } catch (err) {
        console.error("Error deleting employee:", err.message);
        res.status(500).json({ error: err.message });
    }
});

// Get an employee by ID
router.get("/get/:id", async (req, res) => {
    const empId = req.params.id;

    try {
        const employee = await Employee.findById(empId);
        if (!employee) {
            return res.status(404).json({ error: "Employee not found" });
        }
        res.status(200).json({ message: "User fetched", employee });
    } catch (err) {
        console.error("Error fetching employee:", err.message);
        res.status(500).json({ error: err.message });
    }
});

// Staff salary routes
router.post("/addsalary", async (req, res) => {
    const { employeeID, name, basicamount, othours, amountperhour, month, amount } = req.body;

    // Input validation
    if (!employeeID || !name || !basicamount || !othours || !amountperhour || !month || !amount) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const newSalary = new Salary({
        employeeID,
        name,
        basicamount,
        othours,
        amountperhour,
        month,
        amount
    });

    try {
        await newSalary.save();
        res.status(201).json({ message: "Salary assigned successfully" });
    } catch (err) {
        console.error("Error assigning salary:", err);
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: err.message });
        }
        res.status(500).json({ error: "Error assigning salary" });
    }
});

// Get all salaries
router.get("/getsal", async (req, res) => {
    try {
        const salaries = await Salary.find();
        res.status(200).json(salaries);
    } catch (err) {
        console.error("Error retrieving salaries:", err);
        res.status(500).json({ error: "Error retrieving salaries" });
    }
});

// Get salary by ID
router.get("/getsalary/:id", async (req, res) => {
    try {
        const salary = await Salary.findById(req.params.id);
        if (!salary) {
            return res.status(404).json({ error: "Salary details not found" });
        }
        res.status(200).json(salary);
    } catch (err) {
        console.error("Error fetching salary:", err);
        res.status(500).json({ error: "Error fetching salary details" });
    }
});

// Update salary
router.put("/updatesal/:id", async (req, res) => {
    const { employeeID, name, basicamount, othours, amountperhour, month, amount } = req.body;

    const updatedSalary = {
        employeeID,
        name,
        basicamount,
        othours,
        amountperhour,
        month,
        amount
    };

    try {
        const updatedItem = await Salary.findByIdAndUpdate(req.params.id, updatedSalary, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ error: "Salary details not found" });
        }
        res.status(200).json({ message: "Salary details updated successfully", updatedSalary: updatedItem });
    } catch (err) {
        console.error("Error updating salary:", err);
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: err.message });
        }
        res.status(500).json({ error: "Error updating salary details" });
    }
});

// Delete salary
router.delete("/deletesalary/:id", async (req, res) => {
    try {
        const deletedSal = await Salary.findByIdAndDelete(req.params.id);
        if (!deletedSal) {
            return res.status(404).json({ error: "Salary details not found" });
        }
        res.status(200).json({ message: "Salary details deleted successfully" });
    } catch (err) {
        console.error("Error deleting salary:", err);
        res.status(500).json({ error: "Error deleting Salary details" });
    }
});

module.exports = router;
