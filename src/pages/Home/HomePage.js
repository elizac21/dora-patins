import { Card } from '../../components/Card/Card'
import { CardContainer } from '../../containers/Cards/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Modal } from '../../components/Modal/Modal';
import { useAppContext } from '../../store/AppContext';

export const HomePage = () => {
    const {dispatch} = useAppContext();
    const handleClose = () =>{
        console.log('fechando')
        dispatch({
            type: 'close modals'
        })
    }
    const {state} = useAppContext();
    return (                                                            
        <div>
        <Modal
        open={state.mode === 'savePin'}
        onHide={handleClose}
        title='Carrinho'
        controls={[
            {
                label: 'Ir para o carrinho',
                variant: 'info',
                onClick: ({onClick}) => {
                    console.log('Clicou');
                }
            }
        ]}>
            <p>Seu produto foi adicionado!</p>
        </Modal>
       
            <Container fluid>
      <Row>
        <Col xs={12} md={3}><CardContainer title='Patins Rosita' image='https://i.pinimg.com/564x/80/79/32/807932f20c3c18c376e57599fffcec39.jpg' total='R$ 650 ou 2x de R$325,00 s/ juros'/></Col>
        <Col xs={12} md={3}><CardContainer title='Patins Doralice' image='https://i.pinimg.com/564x/74/14/ca/7414caeffb38133f5eb49c20f95f368f.jpg' total='R$ 750 ou 3x de R$250,00 s/ juros'/></Col>
        <Col xs={12} md={3}><CardContainer title='Patins Lila' image='https://i.pinimg.com/564x/ae/30/be/ae30beec4689523a2a55d9701efca10e.jpg' total='R$ 700 ou 2x de R$350,00 s/ juros'/></Col>
        <Col xs={12} md={3}><CardContainer title='Patins Lalá' image='https://i.pinimg.com/564x/1a/c7/5b/1ac75b92c310b4a345eed267706f6bb7.jpg' total='R$ 750 ou 3x de R$250,00 s/ juros'/></Col>
        <Col xs={12} md={3}><CardContainer title='Patins Bribri' image='https://i.pinimg.com/564x/7c/43/22/7c4322c6eb69ea5b4374f8420d5a789e.jpg' total='R$ 650 ou 2x de R$325,00 s/ juros'/></Col>
        <Col xs={12} md={3}><CardContainer title='Patins 80s' image='https://i.pinimg.com/564x/1b/ea/40/1bea40b52aec096f8881f723fd36a209.jpg' total='R$ 750 ou 3x de R$250,00 s/ juros'/></Col>
        <Col xs={12} md={3}><CardContainer title='Patins Disco' image='https://i.pinimg.com/564x/8f/bf/fa/8fbffabafc61802437894fc86c86c449.jpg' total='R$ 850 ou 2x de R$425,00 s/ juros'/></Col>
        <Col xs={12} md={3}><CardContainer title='Patins Black' image='https://i.pinimg.com/564x/db/37/28/db3728beb42eb6e4344d6c6f85144696.jpg' total='R$ 600 ou 3x de R$200,00 s/ juros'/></Col>

      </Row>
    </Container>
        </div>
       
    )
}