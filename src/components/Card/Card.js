import CardBS from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


export const Card = ({ image, title, total, onClick }) => {
    return (
     <Container>
    <CardBS style={{ width: '18rem', marginTop: '30px'}}>
      <CardBS.Img variant="top" src={image} />
      <CardBS.Body>
        <CardBS.Title>{title}</CardBS.Title>
        <CardBS.Text>
          {total}
        </CardBS.Text>
        <Button variant="info" onClick={onClick}>Adicionar ao carrinho</Button>
      </CardBS.Body>
    </CardBS>
    </Container>
  );
}
