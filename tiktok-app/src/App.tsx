import { useState } from 'react'
import Button from 'react-bootstrap/Button'; 
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import UIButton from './components/atoms/ui-button.component';
import UIInput from './components/atoms/ui-input.component';

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

          <UIInput
            label="Nombre de usuario"
            name="username"
            placeholder="Ingresa tu nombre de usuario"
            value='Juan carlos'
            isDisabled={true}
            isInvalid={true}
          ></UIInput>

          <UIButton label="Botón personalizado" onClick={manejarClick} 
          ></UIButton>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default App