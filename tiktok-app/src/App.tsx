import { useState } from 'react'
import Button from 'react-bootstrap/Button'; 
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import UIButton from './components/atoms/ui-button.component';

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

          <UIButton label="Botón personalizado" onClick={manejarClick} 
          ></UIButton>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default App