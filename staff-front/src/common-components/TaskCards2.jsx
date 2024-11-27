import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EMm from '../../src/assets/EMM.jpg';

function TasksCards2() {
    return (
        <Card style={{ width: '18rem', textAlign: 'center'}}>
            <Card.Img variant="top"  src={EMm}/>
            <Card.Body>
                <Card.Title>Staff Management</Card.Title>
                <Button variant="primary" href='/sm_dashboard' style={{width: '200px', margin: 'center', marginTop:'10px', background: "#198754",border: '0px',}}>Staff Manager</Button>
            </Card.Body>
        </Card>
    );
}

export default TasksCards2;