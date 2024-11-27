import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FM from '../../src/assets/FM.jpg';

function TasksCards6() {
    return (
        <Card style={{ width: '18rem' , textAlign: 'center'}}>
            <Card.Img variant="top"  src={FM}/>
            <Card.Body>
                <Card.Title>Kitchen Management</Card.Title>
                <Button variant="primary" href='' style={{width: '200px', margin: 'center', marginTop:'10px', background: "#198754",border: '0px',}}>Kitchen Dashboard</Button>
            </Card.Body>
        </Card>
    );
}

export default TasksCards6;