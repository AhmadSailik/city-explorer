import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
class ShowForm extends React.Component {
    render() {
        return (
            <div>
                <Container fluid="md"style={{fontWeight:'bolder'}}>
                    <Row>
                        <Col style={{height:'3rem'}}>{this.props.name}</Col>
                    </Row>
                    <Row>
                        <Col style={{height:'3rem'}}>{this.props.lat}, {this.props.lon}</Col>
                    </Row>
                </Container>
                   
              
            </div>
        )
    }
};
export default ShowForm;