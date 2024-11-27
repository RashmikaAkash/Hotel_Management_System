import Staffmemberimg from 'C:/Users/rashm/OneDrive/Desktop/staff management/staff management/staff-front/src/assets/welcome.jpg';
import EM from 'C:/Users/rashm/OneDrive/Desktop/staff management/staff management/staff-front/src/assets/EM.jpg';
import AT from 'C:/Users/rashm/OneDrive/Desktop/staff management/staff management/staff-front/src/assets/AT.jpg';
import MM from 'C:/Users/rashm/OneDrive/Desktop/staff management/staff management/staff-front/src/assets/MM.jpg';
import R from 'C:/Users/rashm/OneDrive/Desktop/staff management/staff management/staff-front/src/assets/R.jpg';
import E from 'C:/Users/rashm/OneDrive/Desktop/staff management/staff management/staff-front/src/assets/E.jpg';
import S from 'C:/Users/rashm/OneDrive/Desktop/staff management/staff management/staff-front/src/assets/S.jpg';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './Footer';
import Swal from 'sweetalert2'; // Import SweetAlert
import Header from './Header';

function SMDashboard() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rccln6q', 'template_aebor9b', form.current, {
        publicKey: '_eUEyE-kBCN7v55cT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Show Toast notification
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
  
          Toast.fire({
            icon: "success",
            title: "Email sent successfully"
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Header */}
      <Header />
      <header style={{
        backgroundImage: `url(${Staffmemberimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
      }}>
        <h1>Welcome Staff Management Dashboard</h1>
      </header>

      {/* Send CEO Email */}
      <div className="container mt-5" style={{ border: '1px solid #ccc', borderRadius: '20px',backgroundColor:'#fafafa', width: "900px"}}>
        <h2 className="text-center mb-4" style={{marginTop: "30px"}}>Send Attendance Report to CEO</h2>
        <form ref={form} onSubmit={sendEmail} className="mb-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="form-group mb-3">
            <label htmlFor="user_name">Your Name</label>
            <input type="text" name="user_name" id="user_name" className="form-control" placeholder="Enter your name" required />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="numattend">Number of Employees Who Attended Work Today</label>
            <input type="number" name="numattend" id="numattend" className="form-control" placeholder="Enter the number" required />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="numnotattend">Number of Employees Who Did Not Attend</label>
            <input type="number" name="numnotattend" id="numnotattend" className="form-control" placeholder="Enter the number" required />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="message">Additional Message</label>
            <textarea name="message" id="message" className="form-control" rows="4" placeholder="Enter any additional message" required></textarea>
          </div>

          <div className="text-center">
            <input type="submit" value="Send Email" className="btn btn-primary" style={{ backgroundColor: '#198754', border: 'none', padding: '10px 30px', fontSize: '16px' }} />
          </div>
        </form>
      </div>

      {/* Main Content */}
      <div className="container mt-5">
        <div className="row">
          {/* Card 1: Employee Management */}
          <div className="col-md-4">
            <div className="card text-center shadow-sm mb-4">
              <img src={EM} alt="Employee Management" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Employee Management</h5>
                <p className="card-text">Add, edit, or remove employee details.</p>
                <a href="/DetailsEmp" className="btn btn-primary" style={{ background: "#198754", border: "0px", width: "300px" }}>Go to Employee Management</a>
              </div>
            </div>
          </div>

          {/* Card 2: Attendance */}
          <div className="col-md-4">
            <div className="card text-center shadow-sm mb-4">
              <img src={AT} alt="Attendance" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Attendance</h5>
                <p className="card-text">Mark employee attendance.</p>
                <a href="/attendance" className="btn btn-primary" style={{ background: "#198754", border: "0px", width: "300px" }}>Mark Attendance</a>
              </div>
            </div>
          </div>

          {/* Card 3: Salary Management */}
          <div className="col-md-4">
            <div className="card text-center shadow-sm mb-4">
              <img src={MM} alt="Salary Management" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Salary Management</h5>
                <p className="card-text">Manage salary payments and bonuses for employees.</p>
                <a href="/SalaryDetails" className="btn btn-primary" style={{ background: "#198754", border: "0px", width: "300px" }}>Manage Salary</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Card 4: Reports */}
          <div className="col-md-4">
            <div className="card text-center shadow-sm mb-4">
              <img src={R} alt="Reports" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Reports</h5>
                <p className="card-text">Generate monthly reports for employee salary data.</p>
                <a href="/SalaryDetails" className="btn btn-primary" style={{ background: "#198754", border: "0px", width: "300px" }}>Generate Reports</a>
              </div>
            </div>
          </div>

          {/* Card 5: Leave Requests */}
          <div className="col-md-4">
            <div className="card text-center shadow-sm mb-4">
              <img src={E} alt="Leave Requests" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Leave Requests</h5>
                <p className="card-text">Approve or reject leave requests from employees.</p>
                <a href="/leave-requests" className="btn btn-primary" style={{ background: "#198754", border: "0px", width: "300px" }}>Manage Leave Requests</a>
              </div>
            </div>
          </div>

          {/* Card 6: Settings */}
          <div className="col-md-4">
            <div className="card text-center shadow-sm mb-4">
              <img src={S} alt="Settings" className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Settings</h5>
                <p className="card-text">Configure system settings and update information.</p>
                <a href="/settings" className="btn btn-primary" style={{ background: "#198754", border: "0px", width: "300px" }}>Go to Settings</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default SMDashboard;
