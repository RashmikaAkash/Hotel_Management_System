import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CM from '../../src/assets/CM.jpg';

function TasksCards5() {
    return (
        <Card style={{ width: '18rem' , textAlign: 'center'}}>
            <Card.Img variant="top" src={CM} />
            <Card.Body>
                <Card.Title>Catering Management</Card.Title>
                <Button variant="primary" style={{width: '200px', margin: 'center', marginTop:'10px', background: "#198754",border: '0px',}}>Catering Dashboard</Button>
            </Card.Body>
        </Card>
    );
}

export default TasksCards5;