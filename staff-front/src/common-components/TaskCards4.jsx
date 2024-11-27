import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IM from '../../src/assets/IM.jpg';

function TasksCards4() {
    return (
        <Card style={{ width: '18rem' , textAlign: 'center'}}>
            <Card.Img variant="top" src={IM} />
            <Card.Body>
                <Card.Title>Inventory Management</Card.Title>
                <Button variant="primary" href='' style={{width: '200px', margin: 'center', marginTop:'10px', background: "#198754",border: '0px',}}>Inventory Dashboard</Button>
            </Card.Body>
        </Card>
    );
}

export default TasksCards4;