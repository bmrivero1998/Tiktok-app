import { useState } from 'react'
import Button from 'react-bootstrap/Button'; 
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function App() {
  const [texto, setTexto] = useState('Hola Mundo');

  const manejarClick = () => {
    setTexto('¡Hola desde React Bootstrap!');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '18rem' }} className="text-center shadow">
        <Card.Body>
          <Card.Title>
            <h1>{texto}</h1>
          </Card.Title>
          <Card.Text>
            Este es un ejemplo simple usando componentes.
          </Card.Text>
          <Button variant="primary" onClick={manejarClick}>
            Púlsame
          </Button>
          
        </Card.Body>
      </Card>
    </Container>
  )
}

export default App