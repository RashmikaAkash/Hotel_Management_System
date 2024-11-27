import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import Footer from './Footer';
import Header from './Header';


const AttendanceQRCode = () => {
  const attendanceData = 'https://docs.google.com/forms/d/e/1FAIpQLSc9xzZDwmDPdWnjVSVfJ98R7ZLaWe4_HFCYnLfeauiU8yq3eA/viewform?usp=sf_link';

  return (
    <div>
      <Header />
      <h4 style={{ textAlign: 'center', marginTop: '40px' }}>
        Scan the code and mark your attendance! Thank you!
      </h4>

      {attendanceData && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '70px', marginBottom: '150px' }}>
          <QRCodeCanvas value={attendanceData} size={300} />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default AttendanceQRCode;
