import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UM from '../../src/assets/UM.jpg';

function TasksCards1() {
    return (
        <Card style={{ width: '18rem' , textAlign: 'center'}}>
            <Card.Img variant="top" src={UM} />
            <Card.Body>
                <Card.Title>Equipment rental</Card.Title>
                <Button variant="primary" href='' style={{width: '200px', margin: 'center', marginTop:'10px', background: "#198754",border: '0px',}}>Equipment Dashboard</Button>
            </Card.Body>
        </Card>
    );
}

export default TasksCards1;