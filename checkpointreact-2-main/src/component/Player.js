import Card from 'react-bootstrap/Card';
import players from '../players';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carde(){
    
    return(
        <div>
        {players.map((player)=>(
        <Card style={{ width: '18rem' }}>
        
        <Card.Body>
          <Card.Title>{player.name}</Card.Title>
          <Card.Text>
            team: {player.team}
            <Card.Text>nationality:{player.nationality}</Card.Text>
            <Card.Text>jersey Number: {player.jerseyNumber}</Card.Text>
            
            <Card.Text>age: {player.age}</Card.Text>
          </Card.Text>
          <Card.Text>image:{player.imageUrl}</Card.Text>
        </Card.Body>
      </Card>
        ))};
        
      </div>
    )
}
export default Carde;