import './App.css';
import AddEmployee from './components/AddEmployee';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Header from './components/Header';
import MyComponent from './components/EmployeeDetails';
import Salaryassign from './components/SalaryAssign';
import SalaryDetails from './components/SalaryDetails';
import sm_dashboard from './components/sm_dashboard';
import AttendanceQRCode from './components/attendance';
import Emp_Login from './components/Emp_Login';
import EmployeeDashboard from './components/EmployeeDashboard';
//import LogHeader from './components/Emp_Login_Header';

function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/addemp" exact Component={AddEmployee} />
          <Route path="/DetailsEmp" exact Component={MyComponent} />
          <Route path="/AssignSalary" exact Component={Salaryassign} />
          <Route path="/SalaryDetails" exact Component={SalaryDetails} />
          <Route path="/sm_dashboard" exact Component={sm_dashboard} />
          <Route path="/attendance" exact Component={AttendanceQRCode} />
          <Route path="/emp_login" exact Component={Emp_Login} />
          <Route path="/EmployeeDashboard" exact Component={EmployeeDashboard} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
