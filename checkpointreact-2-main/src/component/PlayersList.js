import players from "../players";
import Player from "./Player"
import { Container, Row, Col } from 'react-bootstrap';
const PlayerList = () => {
    return (
      <Container>
        <Row>
          {players.map((player, index) => (
            <Col key={index} md={4}>
              <Player {...player} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  
  export default PlayerList;