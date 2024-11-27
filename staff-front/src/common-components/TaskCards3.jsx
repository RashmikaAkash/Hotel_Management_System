import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MMM from '../../src/assets/MMM.jpg';

function TasksCards3() {
    return (
        <Card style={{ width: '18rem', textAlign: 'center' }}>
            <Card.Img variant="top" src={MMM} />
            <Card.Body>
                <Card.Title>Online oder restaurant</Card.Title>
                <Button variant="primary" href='' style={{width: '200px', margin: 'center', marginTop:'10px', background: "#198754",border: '0px',}}>restaurant Dashboard</Button>
            </Card.Body>
        </Card>
    );
}

export default TasksCards3;