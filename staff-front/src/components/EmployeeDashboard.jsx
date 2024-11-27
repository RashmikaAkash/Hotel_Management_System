import TasksCards1 from '../../src/common-components/TaskCards1';
import TasksCards2 from '../../src/common-components/TaskCards2';
import TasksCards3 from '../../src/common-components/TaskCards3';
import TasksCards4 from '../../src/common-components/TaskCards4';
import TasksCards5 from '../../src/common-components/TaskCards5';
import TasksCards6 from '../../src/common-components/TaskCards6';
import TasksCards7 from '../../src/common-components/TaskCards7';
import empDashboardimg from 'C:/Users/rashm/OneDrive/Desktop/staff management/staff management/staff-front/src/assets/empDashboardimg.jpg';
import Footer from './Footer';
import EmpDashHeader from './EmpDashHeader';


export default function EmployeeDashboard() {

  

  return (
    <div>
        <EmpDashHeader />

      <header style={{
        backgroundImage: `url(${empDashboardimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
      }}>
        <h1>Welcome To hotel Dhananjana Staff</h1>
      </header>

      <h2 style={{ marginTop: '50px', marginBottom: '20px',textAlign: 'center' }}>Choose your job</h2>
      <div style={{ margin: '0 auto', maxWidth: '1200px', padding: '0 20px' ,marginTop: '50px', marginBottom: '20px'}}></div>
      <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridTemplateRows: 'repeat(2, 1fr)',
                gap: '60px',
                marginBottom: '140px',
                marginLeft: '140px'
            }}>
      <TasksCards1/>
      <TasksCards2/>
      <TasksCards3/>
      <TasksCards4/>
      <TasksCards5/>
      <TasksCards6/>
      <TasksCards7/>
      </div>
      <Footer/>
    </div>
  )
}