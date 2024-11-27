import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OM from '../../src/assets/OM.jpg';

function TasksCards7() {
    return (
        <Card style={{ width: '18rem' , textAlign: 'center'}}>
            <Card.Img variant="top"  src={OM}/>
            <Card.Body>
                <Card.Title>Room Management</Card.Title>
                <Button variant="primary" href='' style={{width: '200px', margin: 'center', marginTop:'10px', background: "#198754",border: '0px',}}>Room Dashboard</Button>
            </Card.Body>
        </Card>
    );
}

export default TasksCards7;