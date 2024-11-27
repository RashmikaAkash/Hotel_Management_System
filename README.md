# Hotel_Management_System
The **Hotel Staff Manager** is a comprehensive application designed to streamline staff management processes for hotels. This system provides a centralized platform for managing employee records, tracking attendance, assigning salaries, and generating reports. It enhances operational efficiency and ensures data accuracy, allowing hotel managers to focus on delivering exceptional guest experiences.

## Features

### Staff Management
- **Register New Employees:** Add detailed staff member profiles.
- **Update Employee Details:** Modify existing staff information.
- **Delete Employee Records:** Remove staff profiles as needed.

### Attendance Management
- **Mark Daily Attendance:** Record daily attendance for all employees.
- **View Attendance Details:** Allow staff members to check their attendance history.

### Salary Management
- **Assign Salaries and Bonuses:** Define and update salary structures for staff.
- **Generate Salary Slips:** Produce detailed payslips for employees.
- **Monthly Salary Reports:** Generate comprehensive reports for payroll management.

### Special Functions
- **Download Reports:** Export salary details and attendance reports as PDFs.
- **QR Code Attendance:** Enable staff to mark attendance using QR code scanning.
- **Search Functionality:** Quickly locate staff and salary details.
- **Email Notifications:** Send daily attendance summaries and messages to the CEO.

## Technologies Used
- **Frontend:** ReactJS
- **Backend:** Node.js with Express
- **Database:** MongoDB
- **Additional Libraries:**
  - QR Code Scanner for attendance.
  - PDF generation tools for reports.

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/username/HotelStaffManager.git
   ```
2. Navigate to the project directory:
   ```bash
   cd HotelStaffManager
   ```
3. Install dependencies for both frontend and backend:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```
4. Start the development servers:
   - **Frontend:**
     ```bash
     cd client
     npm start
     ```
   - **Backend:**
     ```bash
     cd server
     npm start
     ```
5. Access the application in your browser:
   ```
   http://localhost:3000
   ```

## Future Enhancements
- Add a role-based access control system for enhanced security.
- Integration with payroll services for automated salary processing.
- Multi-language support for a diverse workforce.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

---

Contributions are welcome! Feel free to fork this repository and submit pull requests to enhance the project.
